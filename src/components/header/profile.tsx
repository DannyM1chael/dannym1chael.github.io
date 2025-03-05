import { Link } from "react-router-dom";
import { social } from "@/config";
import ProfileImg from "/assets/img/profile.jpg";

export const Profile = () => {
  const renderLinks = ({ name, page }) => (
    <a
      href={page}
      target="_blank"
      rel="noopener noreferrer"
      key={name}
      className={`${name}`}
    >
      <i className={`bx bxl-${name}`}></i>
    </a>
  );

  return (
    <div className="profile">
      <img src={ProfileImg} alt="" />
      <h1 className="text-light">
        <Link to="/">Denis Mikhalev</Link>
      </h1>
      <div className="social-links mt-3 text-center">
        {social.map(renderLinks)}
      </div>
    </div>
  );
};
