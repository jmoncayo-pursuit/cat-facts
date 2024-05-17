import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setCatFacts([data.fact]));
  }, []);

  const fetchNewFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => setCatFacts([...catFacts, data.fact]));
  };

  const removeFact = (index) => {
    setCatFacts(catFacts.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <ul>
        {catFacts.map((fact, index) => (
          <li key={index}>
            {fact}
            <button onClick={() => removeFact(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={fetchNewFact}>Get New Fact</button>
    </div>
  );
}

export default App;
