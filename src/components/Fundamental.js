import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fundamental = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/fundamental-analysis')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching fundamental analysis:', error));
  }, []);

  return (
    <div>
      <h2>Fundamental Analysis</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default Fundamental;
