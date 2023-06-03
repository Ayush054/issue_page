import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Issue = ({ issue }) => {
  const dateupdated = issue.updated_at.slice(0,10);
  return (
    <Container>
      <Link style={{textDecoration:"none",color:"black"}} to={`/issues/CodeWithHarry/iNotebook-React/${issue.number}`}>
        <div className='issuetitlecontainer'>
          <h3>{issue.title}</h3>
          <p>Issue updated on {dateupdated}</p>
        </div>
    </Link>
    </Container>
  );
};

export default Issue;

const Container = styled.div`
 .issuetitlecontainer{
  border: 1px solid black;
  border-radius:5px;
  width: 80%;
  margin:20px;
  padding:20px;
  cursor:pointer;
 }
`

