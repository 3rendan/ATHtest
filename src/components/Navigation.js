import React from 'react';
import { Link } from "react-router-dom";
import Style from '../style/Navigation';

export default function Navigation() {
    return (
        <Style>
            <ul>
                <li><Link to={`/items`}>Browse</Link></li>
            </ul>
            
        </Style>
    )
}
