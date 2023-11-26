import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./UserComponents/UserContext";

const NavBar = () => {
  const { user } = useAuth();
  return (
    <nav>
      <h1>
        <Link to="/destinations">Destinations</Link>
      </h1>
      <button>
        <Link to="/destinations/new">Add a Destination</Link>
      </button>
      {user.id ? (
        <button>
          <Link to="/">Logout</Link>
        </button>
      ) : null}
    </nav>
  );
};

export default NavBar;
