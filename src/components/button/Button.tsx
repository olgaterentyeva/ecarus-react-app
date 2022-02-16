import React from "react";
import './Button.scss';

export const Button = (props:any) => {
    return (
        <div className="button">
            <button
                type={props.type}
                // onClick={props.onClick}
            >
                {props.buttonText}
            </button>
        </div>
    )
}