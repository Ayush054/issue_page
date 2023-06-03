import React from 'react';
import Issue from './Issue';


const IssueList = ({ issues }) => {
  return (
    <div>
      {issues.map((issue) => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default IssueList;
