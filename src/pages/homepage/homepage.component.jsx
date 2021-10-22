import React from "react";
import Card from "../../components/card/card.component";

import "./homepage.styles.css";

const Homepage = ({ games }) => (
  <div className="homepage">
    {games.map((game, i) => (
      <Card key={i} {...game} />
    ))}
  </div>
);

export default Homepage;
