import React from "react";

const BotCard = ({ bot, handleClick }) => {
  return (
    <div className="ui column" style={{ margin: "1rem" }}>
      <div className="ui card" onClick={() => handleClick(bot.id)}>
        <div className="image">
          <img alt={bot.name} src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">{bot.name}</div>
          <div className="meta">
            <small>{bot.bot_class}</small>
          </div>
          <div className="description">{bot.catchphrase}</div>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
