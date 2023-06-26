import React from "react"
import { Route, Routes } from "react-router-dom"

import { MainPage } from "./MainPage"
import { Articles } from "./Articles.js"

export function SwitchLinks() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<MainPage />} />
            <Route path="/articles" element={<Articles />} />
        </Routes>
    )
}