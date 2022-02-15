import React from "react";
import { NavLink } from "react-router-dom";
import './BaseLayout.scss'
// @ts-ignore
import logo from '../../images/logo.svg';

export const BaseLayout = () => {
    return (
        <div className="wrapper">
                <header className="header">
                    <div className="container">
                        <NavLink to="/"><img src={logo} alt="logo"/></NavLink>

                        <NavLink to="/" className="header__item">Главная</NavLink>
                        <NavLink to="/" className="header__item">Пункты сбора</NavLink>
                        <NavLink to="/" className="header__item">ЭкоМаркет</NavLink>
                        <NavLink to="/" className="header__item">О сервисе</NavLink>



                    </div>

                </header>

        </div>

    )
}