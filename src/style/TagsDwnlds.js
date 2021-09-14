import styled from 'styled-components';


const TagsDwnlds = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 600px) {
    display: block;
    margin: auto;
  }
`;


export default TagsDwnlds;
