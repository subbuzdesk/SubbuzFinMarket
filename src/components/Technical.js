import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Technical = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/technical-analysis')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching technical analysis:', error));
  }, []);

  return (
    <div>
      <h2>Technical Analysis</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default Technical;
