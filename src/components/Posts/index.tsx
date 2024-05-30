import React, { useContext, useState } from "react";
import { SocialContext, ISocialContext } from "../../Context/SocialContext";
import './style.css'

function Posts() {
    const context = useContext(SocialContext) as ISocialContext
    const [view, setView] = useState(0)
    const [like, setLike] = useState(0)

    return (
        <div className="principal">
            <h3>Posts</h3>
            <ul>
                {context.jsonData && context.jsonData.slice().reverse().map((item, index) => (
                    <div className="post" onMouseEnter={() => { setView(view + 1) }} key={index}>
                        <div className="title">{item.title}</div>
                        <div className="user">written by: User #{item.userId}</div>
                        <div className="body">{item.body}</div>
                        <div className="tags">{item.tags}</div>
                        <div className="extras">
                            <div>
                                <button id="like" onClick={() => { setLike(like + 1) }}>❤️</button>
                                {item.reactions.likes + like}
                            </div>
                            <div>👁 {item.views + view}</div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Posts