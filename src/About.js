import React from 'react'
import {useParams} from "react-router-dom"


function About(){
    const name = useParams()
    return <h1>The About page in react {name}</h1>
}
export default About;