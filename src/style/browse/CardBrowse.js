import styled from 'styled-components';


const CardBrowse = styled.div`
  text-align: center;
  display: block;
  max-width: 33%;
  border-top: 1.5rem #999999 solid;
  border-radius: 5px 5px 0 0;
  @media only screen and (max-width: 768px) {
    min-height: 45vh;
    max-width: 95%;
    margin: auto;
  }
  @media only screen and (max-width: 600px) {
    min-height: 66vh;
    max-width: 90%;
    margin: auto;
  }
`;

export default CardBrowse;
