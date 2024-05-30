import React, { useContext, useState } from "react";
import { ISocialContext, SocialContext } from "../../Context/SocialContext";
import { TPost } from "../../Types/typeSocial";
import './style.css'

function CreatePost() {

    const [postText, setPostText] = useState<string>('')
    const [postTitle, setPostTitle] = useState<string>('')
    const [postTags, setPostTags] = useState<string[]>([])

    const { jsonData, setJsonData } = useContext(SocialContext) as ISocialContext

    const context = useContext(SocialContext) as ISocialContext


    function publishPost() {
        if (jsonData) {
            const obj: TPost = {
                id: jsonData?.length + 1,
                title: postTitle,
                body: postText,
                tags: postTags,
                reactions: { likes: 0 },
                views: 0,
                userId: Math.floor(Math.random() * 350)
            }
            let view = jsonData
            view.push(obj)
            setJsonData([...view])

            if (context.Check === false) {
                context.setCheck(true)
            } else {
                context.setCheck(false)
            }
        }
    }

    return (
        <div className="create">
            <input
                required
                placeholder="Write a title..."
                onChange={(event) => setPostTitle(event.target.value)}
            />
            <textarea
                required
                placeholder="Write something here..."
                onChange={(event) => setPostText(event.target.value)}
            />
            <textarea id="tag"
                placeholder="Tags..."
                onChange={(event) => setPostTags((event.target.value).split(" "))}
            />
            <button onClick={() => publishPost()}>Publish</button>
        </div>
    )
}

export default CreatePost