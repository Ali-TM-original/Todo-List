import React from 'react'

export const Footer = () => {
    let cstmstyle = {
        position:'relative',
        top:"19.1vh",
        width:"100%"

    }
    return (
        <footer className="bg-dark text-light py-2" style={cstmstyle}>
            <p className="text-center">
            Copyright &copy; Todolist.com

            </p>
            
        </footer>
    )
}
