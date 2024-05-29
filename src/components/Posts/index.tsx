import React, { useContext } from "react";
import { SocialContext, ISocialContext } from "../../Context/SocialContext";
import './style.css'

function Posts() {

    const context = useContext(SocialContext) as ISocialContext
    return (
        <div className="principal">
            <h3>Posts</h3>
            <ul>
                {context.jsonData && context.jsonData.slice().reverse().map((item,index) => (
                    <div className="post" key={index}>
                        <div className="title">{item.title}</div>
                        <div className="user">written by: {item.userId}</div>
                        <div className="body">{item.body}</div>
                        <div className="tags">{item.tags}</div>
                        <div className="extras">
                            <div>
                                <button>💗</button>
                                {item.reactions.likes}
                            </div>
                            <div>👁 {item.views}</div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Posts