import React, { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";



export function Articles() {
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./markdown/article.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });


    return <div className="prose box-border text-center mx-auto  mt-20 font-sans relative">

        <ReactMarkdown remarkPlugins={[remarkGfm]} children={post} className="bg-gray-100 p-6 text-left text-sm text-gray-100 font-normal" />



    </div>
}