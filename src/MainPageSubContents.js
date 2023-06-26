import React from "react"

export function MainPageSubContents(props) {
    return (
        <div className="text-bold text-md  max-[500px]:text-xl mt-4 text-gray-700 mt-2 ">
            <h2 className="text-gray-800 font-bold text-xl">{props.title}</h2>
            {props.children}
        </div>
    )
}