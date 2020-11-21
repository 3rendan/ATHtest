import React from 'react';
import { Link } from "react-router-dom";
import Style from '../style/Navigation';

export default function Navigation() {
    return (
        <Style>
            <li className='nav-item'><Link to={`/browse`}>Browse</Link></li>        
        </Style>
    )
}
