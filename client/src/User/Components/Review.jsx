import React from 'react'

export default function Review() {
    return (
        <div><section className="contact" id="contact">
            <div className="contactform">
                <h3>Send Message</h3>
                <div className="inputbox">
                    <textarea placeholder="Message" defaultValue={""} />
                </div>
                <div className="inputbox">
                    <input type="submit" defaultValue="Send" />
                </div>
            </div>
        </section>
        </div>
    )
}
