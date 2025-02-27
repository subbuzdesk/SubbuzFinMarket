import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Competitor = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/competitor-analysis')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching competitor analysis:', error));
  }, []);

  return (
    <div>
      <h2>Competitor Analysis</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default Competitor;
