import "./style.css"
import {About} from "../About/About";
import {Interests} from "../Interests/Interests";
import {Info} from "../Info/Info";
import {Buttons} from "../Buttons/Buttons";

export function GeneralInfo() {
    return (
        <div className={"GeneralInfo"}>
            <Info/>
            <Buttons/>
            <About/>
            <Interests/>
        </div>
    )
}