import React, { useContext, useState } from "react";
import { ISocialContext, SocialContext } from "../../Context/SocialContext";
import { TPost } from "../../Types/typeSocial";

function CreatePost(){

    const [postText, setPostText] = useState<string>('')
    const [postTitle, setPostTitle] = useState<string>('')

    const { jsonData, setJsonData } = useContext(SocialContext) as ISocialContext

        function publishPost(){
        if(jsonData) {
            const obj: TPost = {
                id: jsonData?.length + 1,
                title: postTitle,
                body: postText,
                tags: "",
                reactions: { likes: 0 },
                views: 0,
                userId: ""
            } 
            let view =jsonData
            view.push(obj)
            setJsonData([...view])
            console.log(view)
    }
} 

    return (
        <div>
            <input  
                placeholder="Write a title..."
                value={postTitle}
                onChange={(event) => setPostTitle(event.target.value)}
            />
            <textarea 
                placeholder="Write something here..."
                value={postText}
                onChange={(event) => setPostText(event.target.value)}
            />
            <button onClick={() => publishPost()}>Publish</button>
        </div>
)}
export default CreatePost