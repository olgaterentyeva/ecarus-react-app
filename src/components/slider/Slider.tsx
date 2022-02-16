import React, {useEffect, useState} from "react";
import {SliderContent} from "./SliderContent";
import SliderItems from './SliderItems';
import {Arrows} from "./Arrows";
import {Dots} from "./Dots";
import './Styles.scss';

const len = SliderItems.length - 1;

export const Slider = (props:any) => {
    const [activeIndex, setActiveIndex] = useState(0);
    // useEffect(() => {const interval = setInterval(() => {setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}, 500);
    // return () => clearInterval(interval)
    // }, [activeIndex]);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} imageSlider={SliderItems}/>
            <Arrows
                prevSlide={() =>
                 setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />
            <Dots
                activeIndex={activeIndex}
                imageSlider={SliderItems}
                onclick={(activeIndex:any) => setActiveIndex(activeIndex)}/>
        </div>
    )
}