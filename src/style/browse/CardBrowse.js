import styled from 'styled-components';


const CardBrowse = styled.div`
  background: #fff;
  text-align: center;
  display: inline-block;
  max-width: 31%;
  border-top: 1.5rem #999999 solid;
  border-top-right-radius: .25rem;
  border-top-left-radius: .25rem;
  margin-bottom: .75rem;
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
