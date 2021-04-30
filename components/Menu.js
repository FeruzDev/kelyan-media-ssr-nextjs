import React, {useState} from 'react';
import Link from "next/link";


const Menu = () => {


    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => setToggled(!isToggled);

    return (
        <div>
            <button onClick={toggleTrueFalse} className="  bg-transparent border-0 sibeBarToggle">
                <img  src="/img/icon/burger.png" alt=""/>
            </button>
            <div className={isToggled ? "d-block" : "d-none"} id="sideBar">
                <ul>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
            </div>

        </div>
    );
};

export default Menu;