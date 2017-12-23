import * as ReactDOM from 'react-dom';
import * as React from "react";
import AppContainer from "./components/AppContainer";


function renderApp() {
    ReactDOM.render(
        <AppContainer/>,
        document.getElementById('root')
    );

}

renderApp();
