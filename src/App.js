import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Home from './components/Home';
import './index.css'

function App() {

  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
  return (
    <div className="App">
      {loading ? <Loader /> : <Home/>}
    </div>
  );
}

export default App;
