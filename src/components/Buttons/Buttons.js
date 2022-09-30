import "./style.css"
import MailIcon from "./Mail.png"
import LinkedInIcon from "./LinkedIn.png"

export function Buttons() {
    return (
        <div className={"Buttons"}>
            <button className={"Mail"}>
                <img src={MailIcon}/>
                E-mail
            </button>
            <button className={"LinkedIn"}>
                <img src={LinkedInIcon}/>
                LinkedIn
            </button>
        </div>
    );
}