import "./style.css"
import Facebook from "./Facebook.png"
import Twitter from "./Twitter.png"
import Github from "./Github.png"
import Instagram from "./Instagram.png"

export function Footer() {
    return (
        <div className={"Footer"}>
            <img src={Twitter}/>
            <img src={Facebook}/>
            <img src={Instagram}/>
            <img src={Github}/>
        </div>
    );
}