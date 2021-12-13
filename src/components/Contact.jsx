import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import Form from './ui/Form';
import '../css/contact.css'

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const loading = document.querySelector('.contact__overlay--loading');
        const success = document.querySelector('.contact__overlay--success');
        const formContact = document.querySelector('.form__contact');
        const inputs = document.querySelectorAll('.input');
        loading.classList += " contact__overlay--visible"

        emailjs.sendForm('service_2urpw7w', 'template_atm9iht', form.current, 'user_YJrwIGAjHPr2WrDrVmoAW')
            .then(() => {
                loading.classList.remove("contact__overlay--visible");
                success.classList += " contact__overlay--visible";
                return new Promise(function(resolve, reject) {
                    setTimeout(() => {
                        success.classList.remove('contact__overlay--visible');
                        formContact.classList += " contact__overlay--visible";
                        inputs.forEach(input => input.value = '');
                        resolve();
                    }, 5000)
                });
            }).catch(() => {
                loading.classList.remove("contact__overlay--visible");
                alert("The email service is temporarily unavailable. Please contact me directly at reuelpalancas@gmail.com")
            })
    }

    return (
        <section id="contact__me">
            <div className="container contact__me-bg">
                <div className="row">
                    <div className="contact__me-div">
                        <h3 className="contact__me--title">Let's have a chat!</h3>
                        <h4 className="contact__me--subtitle">I'm currently open to new opportunities!</h4>
                        <Form form={form} sendEmail={sendEmail}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
