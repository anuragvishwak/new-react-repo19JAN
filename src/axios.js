import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PerformingAxios() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // calling the api
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response);
        setUserData(response.data); // Move this line inside the .then block
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      HELLO I AM AXIOS!
      {userData.map((data) => {
        return (
          <div key={data.id}>
            {data.name}
          </div>
        );
      })}
    </div>
  );
}

export default PerformingAxios;
