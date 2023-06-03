import axios from 'axios';

const API_BASE_URL = 'https://api.github.com';

export const fetchIssues = async (repoOwner, repoName, page = 1) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/repos/${repoOwner}/${repoName}/issues?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching issues:', error);
    throw error;
  }
};

export const fetchIssue = async (repoOwner, repoName, issueNumber) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/repos/${repoOwner}/${repoName}/issues/${issueNumber}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching issue:', error);
    throw error;
  }
};
