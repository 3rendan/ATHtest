import React from 'react';
import { Link } from "react-router-dom";
import Style from '../style/Navigation';

export default function Navigation() {
    return (
        <Style>
            <li className='nav-item'><Link to={`/`}>About</Link></li>
            <li className='nav-item'><Link to={`/browse`}>Browse</Link></li>
            <li className='nav-item'><Link to={`/collections`}>Collections</Link></li>
            <li className='nav-item'><a href="http://provath.org">Library Home</a></li>        
        </Style>
    )
}
