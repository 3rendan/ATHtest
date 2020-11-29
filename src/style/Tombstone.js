import styled from 'styled-components';


const Tombstone = styled.table`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: .5rem;
  grid-row-height: 30px;
  height: 40rem;
  overflow: scroll;
  font-size: 1.1rem;
  line-height: 2;
`;


export default Tombstone;
