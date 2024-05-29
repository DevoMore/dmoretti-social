import React, { useContext, useEffect, useState } from "react";
import ListElement from "../Lists/listElement";
import { SocialContext, ISocialContext } from "../../Context/SocialContext";

function Posts() {

    return (
        <div>
            <h3>Posts</h3>
            <ul>
                <ListElement title={""} body={""} />
            </ul>
        </div>
    )
}

export default Posts