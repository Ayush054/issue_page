import React, { useEffect, useState } from 'react';
import { fetchIssues } from '../api';
import IssueList from '../components/IssueList';
import Pagination from '../components/Pagination';
//import axios from 'axios';

const Home = () => {
  const [issues, setIssues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchOpenIssues = async () => {
      try {
        const data = await fetchIssues('CodeWithHarry', 'iNotebook-React', currentPage);
        
        setIssues(data);
        
        setTotalPages(2);
        
      } catch (error) {
        
      }
    };

    fetchOpenIssues();
  }, [currentPage,totalPages]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Open Issues</h1>
      <hr></hr>
      <IssueList issues={issues} />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
