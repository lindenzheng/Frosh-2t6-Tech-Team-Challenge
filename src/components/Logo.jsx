import React from 'react'

export default function Logo({ nite }) {
    const textSrc = nite
        ? "/assets/text-yellow.svg"
        : "/assets/text-purple.svg";
    return (
        <div className="logo">
            <div class="container">
                <div class="circle">
                    <div class="circle-anim"></div>
                </div>
            </div>

            <div className="logo-text">
                <img src={textSrc} alt="F!ROSH WEEK" />
            </div>
        </div>
    )
}