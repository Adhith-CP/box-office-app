import React from "react";
import { Link } from "react-router-dom";

const ActorCard = ({ name, image, country, gender, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country}` : "No Country"}</p>

      {!!birthday && <p>Born {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : "Alive"}</p>

      <div>
        <Link to="/read-more">Read more</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};

export default ActorCard;
