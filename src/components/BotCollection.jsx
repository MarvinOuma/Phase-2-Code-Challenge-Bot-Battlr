import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({ bots, renderSpecs, handleClick }) => {
  return (
    <div className="ui segment">
      <h3>Bot Collection</h3>
      <div className="ui four column grid">
        <div className="row">
          {bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={() => renderSpecs(bot.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BotCollection;
