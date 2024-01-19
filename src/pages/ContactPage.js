import React from "react";

const ContactPage = () => {
    return ( 
        <div className="contact-page">
            <h1>Contact Page</h1>
            <p>This is the contact page. You can reach out to me through this form or by emailing at: email@gmail</p>
                <form action="#" method="post">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name"/><br/>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email"/><br/>
                    <label htmlFor="message">Message: </label><br/>
                    <textarea name="message" id="message" rows="5"></textarea><br/>
                    <button type="submit">Submit</button>
                    
                </form>
        </div>
        );
}