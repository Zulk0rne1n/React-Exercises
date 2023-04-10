import React from "react";
import { LanguageContext } from "./LanguageContext";

const AvailableLanguages = {
    en: {
        CURRENT_LANGUAGE: "Selected language : English"
    },
    tr: {
        CURRENT_LANGUAGE: "Tercih edilen dil:  Türkçe"
    }
}
export class DisplayLanguage extends React.Component {
    render() {

        return (
            <div>
                <LanguageContext.Consumer >
                    {language => {
                        return (
                            <h1>
                                {AvailableLanguages[language].CURRENT_LANGUAGE}
                            </h1>
                        )
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}