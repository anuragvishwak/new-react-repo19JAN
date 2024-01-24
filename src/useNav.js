import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AApp = () => {
  const [count, setCount] = useState(0);
  const inter = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Focus on the input element when the component mounts
    inter.current.focus();
  }, []); // Empty dependency array to run the effect only once on mount

  const handleClick = () => {
    setCount(count + 1);

    // Programmatically navigate to a different route
    navigate('/new-route'); // Replace '/new-route' with the desired route
  };

  return (
    <div>
      <button onClick={handleClick}>Click here</button>
      <input ref={inter}></input>
      <button onClick={() => { inter.current.focus() }}>Click here</button>
      {count}
    </div>
  );
};

export default AApp;
