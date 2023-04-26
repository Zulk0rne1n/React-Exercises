import React, { useState } from "react"
import { LanguageContext } from "./LanguageContext"
import { Welcome } from "./Welcome"


export function App() {

    const [language, setLanguage] = useState('en')

    function handleChangeLanguage(event) {
        setLanguage(event.target.value)

    }

    return (
        <div>
            <select value={language} onChange={handleChangeLanguage}>
                <option value="en"></option>
                <option value="tr"></option>
            </select>
            <LanguageContext.Provider value={language}>
                <Welcome />
            </LanguageContext.Provider>
        </div >)

}