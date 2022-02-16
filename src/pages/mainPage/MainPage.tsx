import React from "react";
import {BaseLayout} from "../../components/baseLyout/BaseLayout";
import sliderRecycle from "../../images/slider-recycle.svg";
import map from "../../images/icons/map.svg";
import arrow from "../../images/arrow.svg";
import market from "../../images/market.svg";
import './MainPage.scss';

export const MainPage = () => {
    return (
        <BaseLayout>
            <main className="main">
                <div className="container">
                    <div className="slider">
                        <img src={sliderRecycle} className="slider__img" alt=""/>
                        <div className="slider__text">
                            <h1>Сделаем мир чище</h1>
                            <p>Сдай макулатуру или старую одежду и получи скидку <br/>на покупку товаров из
                                переработанных материалов</p>
                            <button>Условия сервиса</button>
                        </div>
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