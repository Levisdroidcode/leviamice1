// api/index.js
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://real-time-events-search.p.rapidapi.com/search-events',
  params: {
    query: 'Events',
    date: 'any',
    is_virtual: 'false',
    start: '0'
  },
  headers: {
    'x-rapidapi-key': '1e4ef15cd1mshfcc05aecb502e62p1b997bjsn81ca6e46dde1',
    'x-rapidapi-host': 'real-time-events-search.p.rapidapi.com'
  }
};

export const getEventsData = async () => {
  try {
    console.log('Sending request with options:', options); // Log request details
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error('API request failed:', error.response ? error.response.data : error.message); // Log error details
    return null;
  }
};
