import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // updates every second
    return () => clearInterval(timer); // clear interval on component unmount
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (time) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return time.toLocaleDateString(undefined, options);
  };

  return (
    <footer>
        <p>{`Date: ${formatDate(currentTime)}`}</p>
      <p>{`Time waits for no one! ${formatTime(currentTime)}`}</p>
    </footer>
  );
};



export default Footer;
