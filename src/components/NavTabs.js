import React from 'react'
import Style from '../style/NavTabs'

export default function NavTabs(props) {
    const topic = [];
    return (
        <Style>
           { props.topics.map((topic)=>{
               return (
               <li className='nav-item general-nav'>{ topic }</li>
                )
            })
           }
        </Style>
    )
}
