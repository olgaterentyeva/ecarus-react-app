import React from "react";
import {BaseLayout} from "../../components/baseLyout/BaseLayout";
import map from "../../images/icons/map.svg";
import arrow from "../../images/arrow.svg";
import market from "../../images/slider/market.svg";
import './MainPage.scss';
import { Slider } from "../../components/slider/Slider";



export const MainPage = () => {
    return (
        <BaseLayout>
            <main className="main">
                <div className="container">
                    <div className="slider">
                        <Slider/>
                    </div>

                    <span className="inform">
                        <div className="inform-block">
                            <img src={map} className="inform-block__img" alt=""/>
                            <div className="inform-block__text">
                                <h3>Пункты сбора</h3>
                                <p>Посмотри, где в твоем городе<br/> можно сдать вторсырье<br/>на переработку</p>
                                <button><img src={arrow} alt=""/></button>
                            </div>
                        </div>

                        <div className="inform-block">
                            <img src={market} className="inform-block__img" alt=""/>
                            <div className="inform-block__text">
                                <h3>ЭкоМаркет</h3>
                                <p>Используй заработанные<br/> экокоины для покупки товаров <br/>из переработанных материалов </p>
                                <button><img src={arrow} alt=""/></button>
                            </div>
                        </div>
                    </span>
                </div>
            </main>
        </BaseLayout>

    )
}