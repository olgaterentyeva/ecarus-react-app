import React from "react";
import leftArrow from '../../images/left-arrow.svg';

export const Arrows = ({ prevSlide, nextSlide }:any) => {
    return (
        <div className="arrows">
            <div className="prev" onClick={prevSlide}>&#10094;</div>
            <div className="next" onClick={nextSlide}>&#10095;</div>
        </div>
    )
}