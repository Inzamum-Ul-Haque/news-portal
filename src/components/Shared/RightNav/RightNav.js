import React, { useContext } from "react";
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
import { AuthContext } from "../../../Contexts/UserContext";
import { GoogleAuthProvider } from "firebase/auth";

const RightNav = () => {
  const { user, providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {user?.uid ? (
        <></>
      ) : (
        <ButtonGroup vertical>
          <Button
            onClick={handleGoogleSignIn}
            className="mb-2"
            variant="outline-primary"
          >
            <FaGoogle /> Login with Google
          </Button>
          <Button className="mb-2" variant="outline-dark">
            <FaGithub /> Login with Github
          </Button>
        </ButtonGroup>
      )}
      <div className={user?.uid ? "mt-0" : "mt-4"}>
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
