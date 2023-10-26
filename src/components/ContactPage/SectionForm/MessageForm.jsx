export default function MessageForm() {
    
    return(
        <form action="/submit" method="post">
            <h2>Leave us a message<br /> for any information.</h2>
                <ul>
                    
                    <li>
                        <input type="text" id="name" name="name" placeholder="Name*" required />
                    </li>
                    <li>
                        <input type="email" id="email" name="email" placeholder="Email*" required />
                    </li>
                    <li>
                        <textarea id="message" name="message" placeholder="Your Message*" required></textarea>
                    </li>
                    <li>
                        <button type="submit" className="button-yellow">Send Message</button>
                    </li>
                </ul>
        </form>
    )
}