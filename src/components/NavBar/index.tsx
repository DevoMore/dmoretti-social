import React, { useContext } from "react";
import { ISocialContext, SocialContext } from "../../Context/SocialContext";
import './style.css'

function NavBar() {
    const context = useContext(SocialContext) as ISocialContext

    function whenClick() {
        if(context.Check === false) {
            context.setCheck(true)
        } else {
            context.setCheck(false)
        }
    }   

    return (
        <div className="nav">
            <h2>MySocial</h2>
            <button onClick={whenClick}>Create New Post</button>
        </div>
    )
}

export default NavBar