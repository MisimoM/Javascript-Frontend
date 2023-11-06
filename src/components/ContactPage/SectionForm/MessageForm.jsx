import Button from "../../Global/Button/Button";

import { useState } from "react"

export default function MessageForm() {
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formError, setFormError] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleNameValidation = (name) => {
        const nameRegex = /^[\p{L} ]{2,60}$/u;
        return nameRegex.test(name);
    };

    const handleEmailValidation = (email) => {
        const emailRegex  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const handleMessageValidation = (message) => {
        const messageRegex = /^[\p{L} \d\p{P}]{2,300}$/u;
        return messageRegex.test(message);
    };

   const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const {name, email, message} = formData;
        const url = "https://win23-assignment.azurewebsites.net/api/contactform";

        if (handleNameValidation(name) && handleEmailValidation(email) && handleMessageValidation(message)) {

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify(formData)
                });

                if (response.status === 200) {
                    console.log(response.status);
                    const data = await response.text();
                    console.log('Response from the API:', data);
                } else {
                    throw new Error('Request to the API failed');
                }

            } catch (error) {
                console.error("Error sending data:", error);
            }
        } else {
            setFormError((prevFormError) => ({
                ...prevFormError,
                name: !handleNameValidation(name) ? "Error Name" : "",
                email: !handleEmailValidation(email) ? "Error Email" : "",
                message: !handleMessageValidation(message) ? "Error Message" : "",
            }));
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Leave us a message<br /> for any information.</h2>
                <ul>
                    <li>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name*"
                            value ={formData.name}
                            onChange={handleChange}
                        />
                        <span>{formError.name}</span>
                    </li>
                    <li>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <span>{formError.email}</span>
                    </li>
                    <li>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message*"
                            value={formData.message}
                            onChange={handleChange}>
                        </textarea>
                        <span>{formError.message}</span>
                    </li>
                    <li>
                        <Button className="button-yellow" title="Send Message" type="submit"/>
                    </li>
                </ul>
        </form>
    )
}