import React from 'react';
import './App.css';
import {BaseLayout} from "./components/baseLyout/BaseLayout";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">

            <BrowserRouter>
                <BaseLayout/>
            </BrowserRouter>

    </div>
  );
}

export default App;
