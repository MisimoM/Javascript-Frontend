import Button from "../../Global/Button/Button";

export default function SubscribeForm() {
    return(
        <form action="/submit" method="POST">
            <h2>Get News Updates By Signup</h2>
            <ul>
                <li>
                    <input type="email" id="email" name="email" placeholder="username@domain.com" required />
                </li>
                <li>
                    <Button className="button-yellow" type="submit" title="Subscribe" /> 
                </li>
            </ul>
        </form>
    )
}