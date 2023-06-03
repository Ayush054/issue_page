import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchIssue } from '../api';

const IssuePage = () => {
  const { owner,repo,issueNumber } = useParams();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    const fetchSelectedIssue = async () => {
      try {
        const data = await fetchIssue('CodeWithHarry', 'iNotebook-React', issueNumber);
        setIssue(data);
      } catch (error) {
      
      }
    };

    fetchSelectedIssue();
  }, [issueNumber]);

  if (!issue) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 style={{marginLeft:"30px"}}>{issue.title}</h1>
      <hr/>
      <p style={{border:"2px solid black",borderRadius:'5px',margin:"30px",padding:"10px",width:'50%'}}>{issue.body}</p>
    </div>
  );
};

export default IssuePage;
