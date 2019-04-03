import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider, addLocaleData } from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobsList";

// Configuración para determinar el lenguaje del navegador y acoplar el contenido a ello

var localeLanguage = ""
var userLang = navigator.language || navigator.userLanguage;
var messagesLanguage = ""

if (userLang.substring(0, 2) === 'es') {
    addLocaleData(esLocaleData);
    localeLanguage = "es-ES";
    messagesLanguage = localeEsMessages
}
else{
    addLocaleData(enLocaleData);
    localeLanguage = "en-US";
    messagesLanguage = localeEnMessages
}

ReactDOM.render(
    <IntlProvider locale={localeLanguage} messages={messagesLanguage}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);