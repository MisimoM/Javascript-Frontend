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

    const [successMessage, setSuccessMessage] = useState("");

    const handleNameValidation = (name) => {
        const nameRegex = /^[\p{L} ]{1,60}$/u;

        if (!name.trim()) {
            return "Please enter your name.";
        } else if (!nameRegex.test(name)) {
            return "Invalid name. Name can't have numbers or special characters."
        } else {
            return "";
        }
    };

    const handleEmailValidation = (email) => {
        const emailRegex  = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!email.trim()) {
            return "Please enter your email address.";
        } else if (!emailRegex.test(email)) {
            return "Invalid email address."
        } else {
            return "";
        }
    };

    const handleMessageValidation = (message) => {
        const messageRegex = /^[\p{L} \d\p{P}]{1,50}$/u;

        if (!message.trim()) {
            return "Please enter your message.";
        } else if (!messageRegex.test(message)) {
            return "The message can only be 50 characters long."
        } else {
            return "";
        }
    };

   const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleError = (e) => {
        const {name, value} = e.target;

        let error = "";
        
        switch (name) {
            case "name":
                error = handleNameValidation(value);
                break;
            case "email":
                error = handleEmailValidation(value);
                break;
            case "message":
                error = handleMessageValidation(value);
                break;
            default:
                break;
        }

        setFormError((prevFormError) => ({
            ...prevFormError,
            [name]: error,
        }));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const {name, email, message} = formData;
        const url = "https://win23-assignment.azurewebsites.net/api/contactform";

        const nameError = handleNameValidation(name);
        const emailError = handleEmailValidation(email);
        const messageError = handleMessageValidation(message);

        if (!nameError && !emailError && !messageError) {

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

                    setSuccessMessage("Message sent successfully. Thank you for your message!");

                    setTimeout(() => {
                        setSuccessMessage("");
                    }, 5000);

                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                
                } else {
                    throw new Error('Request to the API failed');
                }

            } catch (error) {
                console.error("Error sending data:", error);
            }
        } else {
            setFormError({
                name: nameError,
                email: emailError,
                message: messageError,
            });
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
                            onBlur={handleError}
                            className={formError.name ? "error-border" : "normal-border"}
                        />
                        <span className="error-message">{formError.name}</span>
                    </li>
                    <li>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleError}
                            className={formError.email ? "error-border" : "normal-border"}
                        />
                        <span className="error-message">{formError.email}</span>
                    </li>
                    <li>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message*"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleError}
                            className={formError.message ? "error-border" : "normal-border"}>
                        </textarea>
                        <span className="error-message">{formError.message}</span>
                    </li>
                    <li>
                        <Button className="button-yellow" title="Send Message" type="submit"/>
                        <span className="success-message">{successMessage}</span>
                    </li>
                </ul>
        </form>
    )
}