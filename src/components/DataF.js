import React, { useEffect, useState } from 'react';
import './Menu.css'; // Ensure this is correctly linked to apply styles

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/bissful-bakery-items.json?key=1c1db980')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Check the response structure
        if (Array.isArray(data)) {
          setData(data);
        } else {
          console.error('Data is not an array');
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="menu-items">
      {data.map(item => (
        <div key={item.product_id} className="menu-item">
          <img src={item.img_URL} alt={item.Product_name} className="menu-image" />
          <div className="menu-description">
            <h3>{item.Product_name}</h3>
            <p>{item.description}</p>
            <span>Price: Rs {item.Price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataFetcher;
