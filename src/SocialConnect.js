import React from "react"

// Duplicate code
// so wrap
export default function SocialConnect(props) {
    return (
        <a className="text-xl" href={props.href} target="_blank" >
            <i className={`${props.icon} display-inline ml-2`}></i>
        </a>
    )
}