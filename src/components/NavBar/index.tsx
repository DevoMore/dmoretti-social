import React, { useContext, useEffect, useState } from "react";
import { ISocialContext, SocialContext } from "../../Context/SocialContext";


function NavBar() {
    const context = useContext(SocialContext) as ISocialContext


    function handleClick(){
        if(context.onCheck === false){
            context.setOnCheck(true)
        }else{
            context.setOnCheck(false)
        }
    }   

    return (
        <div>
            <h2>MySocial</h2>
            <button onClick={handleClick}>New Post</button>
        </div>
    )
}

export default NavBar