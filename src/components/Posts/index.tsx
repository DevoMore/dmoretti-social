import React, { useContext, useEffect, useState } from "react";
import { SocialContext, ISocialContext } from "../../Context/SocialContext";
import './style.css'

function Posts() {

    const context = useContext(SocialContext) as ISocialContext
    return (
        <div>
            <h3>Posts</h3>
            <ul>
                {context.jsonData && context.jsonData.map((item,index) => (
                    <div key={index}>
                        <div className="title">{item.title}</div>
                        <div className="body">{item.body}</div>
                        <div className="tags">{item.tags}</div>
                        <div className="likes">{item.reactions.likes}</div>
                        <div className="views">{item.views}</div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Posts