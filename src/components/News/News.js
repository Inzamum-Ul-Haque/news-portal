import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const News = () => {
  const detailedNews = useLoaderData();
  const { title, image_url, details, category_id } = detailedNews;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button>Find news under this category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
