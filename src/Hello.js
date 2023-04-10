import React from "react";

import { Message } from "./Message";
import { LanguageContext } from "./LanguageContext";
const Strings = {
    en: {
        CURRENT_WELCOME: "Hello, Welcome!"
    },
    tr: {
        CURRENT_WELCOME: "Merhaba, Hoşgeldiniz!"
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
                                {Strings[language].CURRENT_WELCOME}
                            </h2>
                        )
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}