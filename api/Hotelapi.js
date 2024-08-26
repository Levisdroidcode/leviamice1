// api.js
import axios from 'axios';

const API_KEY = '4951dbd6cfmsha8447816f1c0bf4p160991jsn0d581cfd471e';
const API_HOST = 'tripadvisor16.p.rapidapi.com';

export const getHotelsData = async () => {
  const options = {
    method: 'GET',
    url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation',
    params: {
      latitude: '40.730610',  // Example coordinates
      longitude: '-73.935242',
      pageNumber: '1',
      currencyCode: 'USD',
      checkIn: new Date().toISOString().split('T')[0], // Today's date
      checkOut: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0] // Tomorrow's date
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    // Extract hotel data from response
    return response.data.data?.data || []; // Adjust based on the actual structure
  } catch (error) {
    console.error('Error fetching hotels data:', error);
    return []; // Return an empty array in case of error
  }
};
