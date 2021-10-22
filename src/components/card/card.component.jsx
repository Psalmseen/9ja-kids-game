import React from "react";

import "./card.styles.css";

const Card = ({
  GameDescription,
  GameImage,
  GameTitle,
  Group,
  Level,
  Subject,
  Topic,
}) => (
  <div className="card">
    <div className="card__front">
      <div className="card__image">
        <img src={GameImage} alt="game-images" />
      </div>
      <h1 className="card__title">{GameTitle}</h1>
      <p className="card__desc">{GameDescription} </p>
    </div>

    <div className="card__back">
      <h2>{GameTitle}</h2>
        <h3 className="card__text-title">Description</h3>
      <p>
        {GameDescription}
      </p>
        <h3 className="card__text-title">Group</h3>
      <p>
        {Group}
      </p>
        <h3 className="card__text-title">Level</h3>
      <p>
        {Level}
      </p>
        <h3 className="card__text-title">Subject</h3>
      <p>
        {Subject}
      </p>
        <h3 className="card__text-title">Topic</h3>
      <p>
        {Topic}
      </p>
    </div>
  </div>
);

export default Card;
