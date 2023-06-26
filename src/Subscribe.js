import React from "react"

export function Subscribe() {
    return (
        <div className="p-12 mx-auto text-left">
            <h1 className="text-2xl font-bold ">Let's stay in touch</h1>
            <p className="mt-8 mb-6 tracking-wide leading-8">I usually write one in-depth article sharing what I learned every few months.
                It's usually about software engineering or management. If this sounds interesting, sign up below to get notified.</p>
            <form method="post" target="_blank"><label className="text-left mx-auto text-gray-600 ">Email Address<input type="email" name="email" className="block w-10/12 h-12  rounded border border-2 border-black mt-4 p-2" /></label>
                <button type="submit" className="bg-black text-white mt-4 w-fit p-2 rounded">Subscribe</button></form>
        </div >
    )
}

// action="/action_page.php"