import {Photo} from "../Photo/Photo";
import {GeneralInfo} from "../GeneralInfo/GeneralInfo";
import {Footer} from "../Footer/Footer";

import "./style.css"

export function Card() {
    return (
        <div className={"Card"}>
            <Photo/>
            <GeneralInfo/>
            <Footer/>
        </div>
    )
}