import React, { useContext, useState } from "react";
import { ISocialContext, SocialContext } from "../../Context/SocialContext";

function CreatePost(){

    const [postText, setPostText] = useState<string>('')
    const [postTitle, setPostTitle] = useState<string>('')
    const [create, setCreate] = useState<boolean>()

    const { selectedPost, jsonData, setJsonData } = useContext(SocialContext) as ISocialContext
//c
//         function a(){
//         if(jsonData) {
//             const obj = {
//                 userId: 99,
//                 id: jsonData.length+1,
//                 title: postTitle,
//                 body: postText,
//                 tags:"",
//                 reactions:{likes: 0},
//                 views: 0
//             } 
            
//             jsonData.push(obj)
//             setJsonData([...jsonData])
//     } console.log(a)
// }

    return (
        <div>
            <input  
                placeholder="Inserisci titolo..."
                value={postTitle}
                onChange={(event) => setPostTitle(event.target.value)}
            />
            <textarea 
                placeholder="Scrivi qui..."
                value={postText}
                onChange={(event) => setPostText(event.target.value)}
            />
        </div>
)}
export default CreatePost