import React from 'react'

export default function Quote() {
    return (
        <section id="quote__section">
            <div className="quote__box">
                <div className="corner left_top"></div>
                <div className="corner left_bottom"></div>
                <div className="corner right_top"></div>
                <div className="corner right_bottom"></div>
                <span className="quote__title">Winston Churchill</span>
                <blockquote>
                    <p className="quote__paragraph"><i>&ldquo;Success consists of going from failure to failure without loss of enthusiasm.&rdquo; </i></p>
                </blockquote>
            </div>
        </section>
    )
}
