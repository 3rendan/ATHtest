import React from 'react';
import Style from '../style/Paragraph'

const About = () => {
  return (
    <Style className='container'>
    <img src="http://digital.provath.org/uploads/carousel/cPaintings.jpg" className="about-img" alt="The Hours"/>
    <p>The Providence Athenæum possesses an eclectic art collection of nearly 150 art objects, which range from a delicate ivory miniature to a massive cabinet styled after an Egyptian temple. These artworks - either donated by Athenæum members or purchased by subscription - track developments in art and art collecting from the institution’s founding in 1836 to the present. Together they provide a narrative of the Athenæum’s cultural significance to Providence and the region.
The art collection can be browsed by item, collection, or by keyword in the search box. Each of the objects is accompanied by a downloadable image and a text box that includes the catalog information, a brief description, and a tab for additional resources.
The digital archive of the art collection has been made possible by a grant from the Herman H. Rose Civic, Cultural and Media Access Fund.</p>
    </Style>
  )
}
export default About;
