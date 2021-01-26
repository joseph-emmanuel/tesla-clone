import React from 'react'
import "./Header.css";
import TeslaLogo from '../assets/teslaLogoSmall.svg'
import ListIcon from '@material-ui/icons/List';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <div className="header_logo">
            <IconButton><img src={TeslaLogo} alt='tesla logo'/></IconButton>
            </div>
            <div className="header_center">
                <p><IconButton>Model S</IconButton></p>
                <p><IconButton>Model 3</IconButton></p>
                <p><IconButton>Model X</IconButton></p>
                <p><IconButton>Model Y</IconButton></p>
                <p><IconButton>Solar Roof</IconButton></p>
                <p><IconButton>Solar Panel</IconButton></p>
            </div>
            <div className="header_right">
                <p><IconButton>Shop</IconButton></p>
                <p><IconButton>Tesla Account</IconButton></p>
                <p>
                    <IconButton><ListIcon/></IconButton></p>

            </div>
        </div>
    )
}

export default Header
