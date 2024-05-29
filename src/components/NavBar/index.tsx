import React, { useContext, useEffect, useState } from "react";


function NavBar() {

    function createPost(){
        console.log("a")
    }
    
    return (
        <div>
            <h2>MySocial</h2>
            <button onClick={() => createPost()}>New Post</button>
        </div>
    )
}

export default NavBar