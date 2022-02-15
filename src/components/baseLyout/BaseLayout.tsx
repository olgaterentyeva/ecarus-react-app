import React from "react";
import { NavLink } from "react-router-dom";
import './BaseLayout.scss'
import logo from '../../images/logo.svg';
import geoSymbol from '../../images/geo-symbol.svg';
import signInSymbol from '../../images/signIn-symbol.svg';

export const BaseLayout = () => {
    return (
        <div className="wrapper">
                <header className="header">
                    <div className="container">
                        <NavLink to="/" className="header__logo"><img src={logo} alt="logo"/></NavLink>

                        <NavLink to="/" className="header__item">Главная</NavLink>
                        <NavLink to="/" className="header__item">Пункты сбора</NavLink>
                        <NavLink to="/" className="header__item">ЭкоМаркет</NavLink>
                        <NavLink to="/" className="header__item">О сервисе</NavLink>

                        <NavLink to="/" className="header__img">
                            <img src={geoSymbol} className="geo" alt=""/>
                            Казань
                        </NavLink>

                        <NavLink to="/" className="header__img">
                            <img src={signInSymbol} alt=""/>
                            Войти
                        </NavLink>



                    </div>

                </header>

        </div>


    )
}