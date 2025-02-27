import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sentiment = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/sentiment-analysis')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching sentiment analysis:', error));
  }, []);

  return (
    <div>
      <h2>Sentiment Analysis</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default Sentiment;
