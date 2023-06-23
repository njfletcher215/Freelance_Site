import React from "react";

export default function Project(props) {
    return(
        <div className='project drop-shadow'>
            <img src={props.image} />
            <div className='text-container'>
                <h3>{props.title}</h3>
                <p>{props.children}</p>
                <a className='styled-button' href={props.link}>VIEW</a>
            </div>
        </div>
    )
}