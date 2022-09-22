import React, { createContext, useState, Component } from 'react'

export const NavigationContenxt = createContext()


export default class NavigationProvider extends Component {
    constructor(props) {
        super(props)

        this.state({ 
            pathname: window.location.pathname,
            navigate: this.navigate 
        })

        window.onpopstate = () =>{
            this.setState({
                pathname: window.location.pathname
            })
        }

    }
    render(){
        return <NavigationContext.Provider value={this.state}>
            {this.props.children}
        </NavigationContext.Provider>
    }

    navigate = (pathname) =>{
        this.setState({pathname})

        window.history.pushState(null, null, pathname)
    }

}

