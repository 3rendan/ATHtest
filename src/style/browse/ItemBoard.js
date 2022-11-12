import styled from 'styled-components';


const ItemBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: .5rem;
  color: black;
  @media only screen and (max-width: 600px) {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;


  }

`;


export default ItemBoard;
