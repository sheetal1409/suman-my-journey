import React from "react"
import { Link } from "react-router-dom"

// When using third party libraries
// wrap in a component
export default function ContentLinks(props) {
    return (
        <div className="w-24 h-8  p-2 text-center ">
            <Link to={props.to} onClick={(event) => props.onClick(event)} className="font-mono text-gray-900 hover:text-gray-600 leading-normal">{props.pageName}</Link>
        </div>
    )
}