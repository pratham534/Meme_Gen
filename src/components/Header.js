import React from "react"
// import trollface from 

export default function Header() {
    return (
        <header className="header">
            <img 
                src={require("../images/troll-face.png") }
                className="header--image"
            />
            <h2 className="header--title">Meme</h2>
        </header>
    )
}