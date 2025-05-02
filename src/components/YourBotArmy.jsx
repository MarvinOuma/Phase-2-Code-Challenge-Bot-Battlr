import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ myBots, handleRemove }) => {
  return (
    <div className="ui segment inverted olive bot-army">
      <h3>Your Bot Army</h3>
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {myBots.map((bot) => (
            <BotCard key={bot.id} bot={bot} handleClick={handleRemove} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
