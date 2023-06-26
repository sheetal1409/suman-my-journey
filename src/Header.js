import React from "react"
import SocialConnect from "./SocialConnect"
import ContentLinks from "./ContentLinks"




export function Header(props) {

    return (
        <div className="header w-full h-16  flex justify-between items-center sticky">
            <div className="header-links flex justify-center h-16 items-center">
                <img src="suman.jpeg" className="w-16 h-16 rounded-full" alt="Profile" />
                <div className="header-separator h-8 border-r border-gray-400 ml-4"></div>
                <nav>
                    <SocialConnect href="https://www.linkedin.com/in/sheetal-kulkarni-47509a190/" icon="fa-brands fa-linkedin" />
                    <SocialConnect href="https://sheetalskulkarni.com/" icon="fa-brands fa-github" />
                    <SocialConnect href="https://sheetalskulkarni.com/" icon="fa-brands fa-twitter" />
                    <SocialConnect href="https://sheetalskulkarni.com/" icon="fa-solid fa-envelope" />
                </nav>
            </div>
            <div className="header-pages hidden sm:flex">
                <ContentLinks to="/about" pageName="About" />
                <ContentLinks to="/articles" pageName="Articles" onClick={(event) => props.displayAbout(event)} />
            </div>
            <div className="header-pages flex sm:hidden ">
                <i className="fa-solid fa-bars fa-2x cursor-pointer" onClick={(event) => props.onClick(event)}></i>
            </div>

        </div >

    )
}

