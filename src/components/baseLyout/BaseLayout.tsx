import React, {FC, ReactNode} from "react";
import { NavLink } from "react-router-dom";
import './BaseLayout.scss'
import logo from '../../images/logo.svg';
import geoSymbol from '../../images/icons/geo-symbol.svg';
import signInSymbol from '../../images/signIn-symbol.svg';
import email from '../../images/icons/email.svg';
import phone from '../../images/icons/phone.svg';

interface BaseLayoutProps {
    children: ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({children}) => {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="container">
                    <NavLink to="/" className="header__logo"><img src={logo} alt="logo"/></NavLink>

                    <NavLink to="/" className="header__item" exact activeClassName="header__active">Главная</NavLink>
                    <NavLink to="/collectionPoints" className="header__item" activeClassName="header__active">Пункты сбора</NavLink>
                    <NavLink to="/ecoMarket" className="header__item" activeClassName="header__active">ЭкоМаркет</NavLink>
                    <NavLink to="/aboutService" className="header__item" activeClassName="header__active">О сервисе</NavLink>

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

            <main className="main">
                {children}
            </main>

            <footer className="footer">
                <div className="container">
                    <span className="footer_item">
                        <img src={email} alt=""/>
                        info@ecorus.ru
                    </span>
                    <span className="footer_item">
                        <img src={phone} alt=""/>
                        +7 (800) 880-88-88
                    </span>
                </div>
            </footer>
        </div>
    )
}