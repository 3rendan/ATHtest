import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
import Style from '../style/Socials'

export default function Socials() {
    return (
        <Style>
            <section>
                <FontAwesomeIcon icon={faFacebookF} />
            </section>
            <section>
                <p>hello</p>
            </section>
            <section>
                <p>hello</p>
            </section>
        </Style>
    )
}
