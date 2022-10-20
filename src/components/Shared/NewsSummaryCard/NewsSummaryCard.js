import React from "react";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, author, details, total_view, image_url } = news;

  return (
    <Card className=" mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex ">
          <Image src={author?.img} style={{ width: "55px" }} roundedCircle />
          <div className="ms-1">
            <p className="m-0">
              <b>{author?.name}</b>
            </p>
            <p className="m-0">
              <small>{author?.published_date}</small>
            </p>
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-2" />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Img src={image_url} />
        <Card.Text>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsSummaryCard;
