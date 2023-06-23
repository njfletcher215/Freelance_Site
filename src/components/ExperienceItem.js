import React from "react";

export default function ExperienceItem(props) {
    return(
        <div className='experience-item drop-shadow'>
            <div className='experience-overview'>
                <h4 className='institution'>{props.institution}</h4>
                <h4 className='location'>{props.location}</h4>
                <h4 className='title'>{props.title}</h4>
                <div className='experience-dates-container'>
                    <h6 className='start-date'>{props.startDate}–</h6>
                    <h6 className='end-date'>{props.endDate}</h6>
                </div>
            </div>
            <p className='experience-description'>{props.children}</p>
        </div>
    )
}