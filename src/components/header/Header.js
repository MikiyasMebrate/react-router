import React from 'react'

const Header  = (props) =>(
    <div>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.author.firstName} {props.author.lastName}</h3>
        <small>{props.date}</small>
    </div>
)


export default Header