import React from "react";
import {Button} from "../button/Button";

export const SliderContent = ({activeIndex, imageSlider}:any) => {
    return (
        <section>
            {imageSlider.map((slide:any, index:any) =>
                <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
                    <img className="slide-image" src={slide.bg} alt=""/>
                    <img className="slide-img" src={slide.image} alt=""/>
                    <div className="text">
                        <h2 className="slide-title">{slide.title}</h2>
                        <h4 className="slide-description">{slide.description}</h4>
                        <div className="button">
                            <Button type="submit" buttonText={slide.buttonText}/>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}