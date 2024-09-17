import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import './Menu.css'; 
const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://my.api.mockaroo.com/bissful-bakery-items.json?key=1c1db980')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
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

  if (loading) return (
    <div className="text-center my-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );

  if (error) return (
    <div className="text-center my-5">
      <Alert variant="danger">
        Error: {error.message}
      </Alert>
    </div>
  );
  return (
    <Container>
      <Row className="g-4">
        {data.map(item => (
          <Col md={4} key={item.product_id}>
            <div className="menu-item">
              <img src={item.img_URL} alt={item.Product_name} className="menu-image img-fluid" />
              <div className="menu-description">
                <h3>{item.Product_name}</h3>
                <p>{item.description}</p>
                <span>Price: Rs {item.Price}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default DataFetcher;
