import React from "react"
import { MainPageSubContents } from "./MainPageSubContents"
import { Subscribe } from "./Subscribe"
export function MainPage(props) {
    return (
        <div>
            <div className="mt-20 flex flex-col justify-center items-center  font-sans">
                <div className="flex justify-center items-center sm:text-6xl font-bold">
                    <h1 className="tracking-normal leading-normal  text-4xl sm:text-6xl mr-2">Hi, I'm Suman</h1>
                    <img className="emoji w-12 h-12" src="https://s.w.org/images/core/emoji/11/svg/1f44b.svg" alt="waving-emoji" scale="0" />
                </div>
                <div className="sm:w-1/2 mx-4 sm:text-xl tracking-normal leading-6 flex flex-col sm:justify-center">
                    <div className="mx-auto my-auto flex flex-col sm:justify-center item-center sm:justify-between mt-8 sm:py-4">
                        <div className="flex flex-row justify-center sm:mx-auto max-[580px]:flex-col max-[580px]:items-center  max-[640px]:mx-auto">
                            <img src="./suman.jpeg" alt="about-profile" className="rounded-3xl mx-auto w-10/12 min-[600px]:mr-4  min-[640px]:w-60 min-[640px]:h-60 sm:w-60 sm:h-60" />
                            <p className="bg-gray-800 rounded-2xl overflow text-white max-[640px]:text-lg max-[640px]:w-10/12 max-[600px]:mt-4 min-[640px]:w-8/12  h-32 py-4 px-4 max-[800px]:ml-4 max-[1040px]:h-60 max-[500px]:h-28 max-[580px]:mx-auto" >
                                I'm a software Engineering Manager at Amazon , leading advertisment.</p>
                        </div>
                        <div className="mt-4 text-left">
                            <h2 className="text-2xl font-bold text-gray-800 " id="aboutme">A bit about me</h2>
                            <p className=" text-bold text-md max-[500px]:text-xl mt-4 text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took
                                a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="text-bold text-md  max-[500px]:text-xl mt-4 text-gray-700">
                        <p>  I love coding and the feeling that comes with building something by yourself. When I build something new, I usually learn something in the process.</p>
                        <p>I love coding and the feeling that comes with building something by yourself. When I build something new, I usually learn something in the process.</p>
                    </div>
                    <MainPageSubContents title="My Side Projects" >
                        <p className="mt-4">I love coding and the feeling that comes with building something by yourself. When I build something new, I usually learn something in the process.
                            I love coding and the feeling that comes with building something by yourself.</p>
                        <p className="mt-4">I love coding and the feeling that comes with building something by yourself. When I build something new, I usually learn something in the process.
                            I love coding and the feeling that comes with building something by yourself.</p>
                    </MainPageSubContents>
                    <MainPageSubContents title="Version" >
                        <p className="mt-4">I love coding and the feeling that comes with building something by yourself. When I build something new, I usually learn something in the process.
                            I love coding and the feeling that comes with building something by yourself.</p>
                        <p className="mt-4">I love coding and the feeling that comes with building something by yourself. When I build something new, I usually learn something in the process.
                            I love coding and the feeling that comes with building something by yourself.</p>
                    </MainPageSubContents>
                    <div className="h-max-content bg-gray-200 border 
                tracking-wide leading-8 text-bold text-md  max-[500px]:text-xl mt-4 text-gray-800"><Subscribe /></div>
                </div >
            </div>
        </div >
    )
}


