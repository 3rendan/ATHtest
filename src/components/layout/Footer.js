import React from 'react';
import Style from '../../style/layout/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer (props) {
  return (
    <Style>
        <h5><a href="http://providenceathenaeum.org">The Providence Athenæum</a></h5>
        <small>251 Benefit St. Providence RI 02903</small><br />
        <small>Created by Brendan Ryan using an <a href="http://omeka.org">Omeka</a> API as the backend</small><br />
        <a href="https://github.com/3rendan/ATHtest">
        <small>Version: {props.version} </small>
        <FontAwesomeIcon icon={faGithub} /></a>
    </Style>
  )
}
