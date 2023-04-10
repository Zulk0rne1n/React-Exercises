import React from "react";
import { LanguageContext } from "./LanguageContext";

const Greetings = {
    en: {
        GREETINGS: "Hello, Welcome!"
    },
    tr: {
        GREETINGS: "Merhaba, Hoşgeldiniz!"
    }
}

export class Hello extends React.Component {


    render() {
        return (
            <div>
                <LanguageContext.Consumer >
                    {language => {
                        return (
                            <h2>
                                {Greetings[language].GREETINGS}
                            </h2>
                        )
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}