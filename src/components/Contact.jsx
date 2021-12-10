import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

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
                        <form ref={form} onSubmit={sendEmail} id="contact__form" className="form__contact">
                            <div className="form__item">
                                <label className="form__item--label">Name</label>
                                <input className="input" name="user_name" type="text" required />
                            </div>
                            <div className="form__item">
                                <label className="form__item--label">Email</label>
                                <input className="input" name="user_email" type="email" required />
                            </div>
                            <div className="form__item">
                                <label className="form__item--label">Message</label>
                                <textarea className="input" name="message" type="text" required></textarea>
                            </div>
                            <div className="form__item contact__me-div">
                                <button id="contact__submit" className="form__submit">Send it my way!</button>
                            </div>
                        </form>
                        <div className="contact__overlay contact__overlay--loading">
                            <FontAwesomeIcon icon="spinner" className="fa-spinner"/>
                        </div>
                        <div className="contact__overlay contact__overlay--success">
                            Thanks for the message! <br />
                            Looking forward to speaking to you soon!
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
