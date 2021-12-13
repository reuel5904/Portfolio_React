import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Form({ form, sendEmail }) {
    return (
        <>
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
    </>
    )
}
