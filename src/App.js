import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import IssuePage from './pages/IssuePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issues/:owner/:repo/:issueNumber" element={<IssuePage />} />
      </Routes>
    </Router>
  );
};

export default App;
