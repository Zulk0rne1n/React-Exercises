import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
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
                            <div>
                                {Strings[language].CURRENT_LANGUAGE}
                            </div>
                        )
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}