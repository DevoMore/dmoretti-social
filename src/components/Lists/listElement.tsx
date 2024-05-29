import React from "react";

interface IListElement {
    title: string,
    body: string
}

function ListElement(props:IListElement) {
    
    return (
            <li> {props.title} {props.body} </li>
    )
}

export default ListElement