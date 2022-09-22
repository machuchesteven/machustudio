import React, {useContext} from "react";

import { NavigationProvider, NavigationContext } from "../providers/NavigationProvider";

const Route = ({children, href}) =>{
    var navObj = useContext(NavigationContext)

    var copy = {...navObj}

    switch(copy.pathname){
        case href:
            return children;
        default:
            return null
    }
}

export default Route;