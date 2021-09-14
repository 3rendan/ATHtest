import styled from 'styled-components';


const Board = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: .5rem;
  color: black;
  padding: .5rem 0 2rem 0;
  align-content: space-evenly;

  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;


export default Board;
