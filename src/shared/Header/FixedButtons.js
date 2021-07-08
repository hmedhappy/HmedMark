import React from 'react'

export default function FixedButtons() {
    const GoUpButtonStyle = {
        position: "fixed",
    right: "20px",
    bottom: "20px",
    fontSize: "45px",
    zIndex: "435443534",
    opacity: '0.5',
    cursor:'pointer'
    }
    return (
        <>
        <a href='https://vimeo.com'>
        <img
        alt='vimeo'
            src='vimeo.png'
            width="55"
            style={{
                ...GoUpButtonStyle,
                bottom :"90px"
            }}/>
        </a>
        <a href='https://www.flickr.com/'>
             <img
                     alt='filcker'
             width="55"
            src='flicker.png'
            style={{
                ...GoUpButtonStyle,
            }}/>
        </a>
        </>
    )
}
