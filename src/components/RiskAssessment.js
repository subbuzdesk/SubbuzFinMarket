import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RiskAssessment = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/risk-assessment')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching risk assessment:', error));
  }, []);

  return (
    <div>
      <h2>Risk Assessment</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default RiskAssessment;
