import styled from 'styled-components';


const Board = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: black;
  padding: .5rem 0 2rem 0;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 600px) {
    display: block;
  }
  body {
    background-color: #eeeeee;
  }
`;


export default Board;
