import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import Style from '../style/Socials'

export default function Socials() {
    return (
        <Style>
            <section className="social-item-1">
                <a href="https://www.facebook.com/ProvidenceAthenaeum/" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon size="3x" icon={faFacebookSquare} /></a>
            </section>
            <section className="social-item-2">
              <a href="https://twitter.com/pvdAth" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="3x" icon={faTwitterSquare} /></a>
            </section>
            <section className="social-item-3">
                <a href="https://instagram.com/pvdath" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon size="3x" icon={faInstagramSquare} /></a>
            </section>
        </Style>
    )
}
