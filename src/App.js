import React, { useState } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error('Error fetching random user data:', error);
    }
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Random User Generator</h1>
          <button onClick={fetchRandomUser}>Generate Random User</button>
          {userData && (
              <div className="user-info">
                <img src={userData.picture.large} alt="User" />
                <p>Name: {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</p>
                <p>Email: {userData.email}</p>
                <p>Location: {`${userData.location.city}, ${userData.location.country}`}</p>
                <p>Phone: {userData.phone}</p>
              </div>
          )}
        </header>
      </div>
  );
}

export default App;
