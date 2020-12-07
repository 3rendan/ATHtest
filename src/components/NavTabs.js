import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Style from '../style/NavTabs'

export default function NavTabs(props) {
    const topic = [];
    const activeKey = '';
    return (
        <Style>
            <Tabs defaultActiveKey={activeKey} id="uncontrolled-tab-example">
           { props.topics.map((topic)=>{
               return (
               <Tab eventKey={topic} title={topic}></Tab>              
                )
            })
           }
           </Tabs>
        </Style>
    )
}
