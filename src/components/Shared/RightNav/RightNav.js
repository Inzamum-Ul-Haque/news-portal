import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, ButtonGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaTwitter,
  FaDiscord,
  FaRegStickyNote,
  FaRegListAlt,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button className="mb-2" variant="outline-dark">
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube /> Youtube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaDiscord /> Discord
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaRegStickyNote /> Privacy Policy
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaRegListAlt /> Terms & Conditions
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-3">
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightNav;
