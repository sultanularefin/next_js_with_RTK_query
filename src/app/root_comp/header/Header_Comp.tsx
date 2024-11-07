'use client'
import React from "react";

import header_Styles from "./header.module.css";


export interface CHeader_Comp_Props{

}
const Header_Comp:React.FC<CHeader_Comp_Props> = ({ })=>{




    const logout_button_pressed = ()=>{

        console.log("at <<logout_button_pressed>>");
        if((typeof window !== "undefined")
            &&
            (window.localStorage)){
            localStorage.removeItem('user');

            window.location.href = "./index.html";

// Simulate an HTTP redirect:
//         window.location.replace("./index.html");

        }

        else{

            console.log("at else of logout_button_pressed");
        }
    }



    return (

        <div className={header_Styles.header}>
            <a href="./index.html" className={header_Styles.logo}>Local Super Shop</a>
            <div className={header_Styles.headerRight}>
                <a
                    className={header_Styles.active}
                    href="./index.html">Home</a>
                <a href="./contact_us.html">Contact</a>
                <a href="./about_us.html">About</a>
                <a id="account_button" style={{display: 'none'}} href="./profile.html">Account</a>
                <a id="login_button" style={{display: 'none'}} href="./register.html">Register</a>
                {/* <a id="login_button" style="display: none"
     href="./login.html">Log in</a>*/}
                <a id="logout_button" onClick={()=>{
                    logout_button_pressed();
                }} style={{display: 'none'}}>Log out</a>
            </div>
        </div>

    );
}

export default Header_Comp;