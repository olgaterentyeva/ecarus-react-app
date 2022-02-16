import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {MainPage} from "./pages/mainPage/MainPage";
import {CollectionPointsPage} from "./pages/collectionPointsPage/CollectionPointsPage";
import {EcoMarket} from "./pages/ecoMarket/EcoMarket";
import {AboutService} from "./pages/aboutService/AboutService";

function App() {
  return (
    <div className="App">

            <BrowserRouter>
                <Route path='/' exact component={MainPage}/>
                <Route path='/collectionPoints' component={CollectionPointsPage}/>
                <Route path='/ecoMarket' component={EcoMarket}/>
                <Route path='/aboutService' component={AboutService}/>
            </BrowserRouter>

    </div>
  );
}

export default App;
