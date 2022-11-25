import styled from 'styled-components';


const Tombstone = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  overflow: hidden;
  font-size: 1.1rem;
  line-height: 2;
  background-color: #eee;
  max-height: 50vh;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.22);
`;


export default Tombstone;
