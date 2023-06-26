import React from "react"
import ContentLinks from "./ContentLinks"


export function BarMenu(props) {
    return (
        <div className="font-bold text-2xl m-4">
            <ContentLinks onClick={(event) => props.displayContent(event)} to="/about" pageName="About" />
            <ContentLinks onClick={(event) => props.displayContent(event)} to="/articles" pageName="Articles" />
        </div>
    )
}