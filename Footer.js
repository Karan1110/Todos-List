import React from 'react'
export const Footer = () => {
    let footerStyle = {
        position:'absolute',
        top:'88vh',
        width:'100%',
    }
    return (
        <footer className='bg-success text-light py-3' style={footerStyle} >
            <p className="text-center">
            Copyright &copy; LetoTasks 
            </p>
        </footer>        
    )
}
