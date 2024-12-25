import { useState, useEffect } from "react";
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post() {
  const [data, setData] = useState([]);

  // Fetch data only once
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Dependency array to avoid infinite fetch calls

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src={product.images && product.images.length > 0 ? product.images[0] : "/public/placeholder.jpeg"}
                alt={product.title}
              />
             
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  Price: ${product.price} <br />
                  {product.description}
                </Card.Text>
                <Button variant="primary" href={`/product/${product.id}`}>
                  View Product
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
