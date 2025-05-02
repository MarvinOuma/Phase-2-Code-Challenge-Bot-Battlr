import React from "react";

const BotSpecs = ({ bot, seeAll, handleClick }) => {
  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon large circular military" />;
      break;
    case "Defender":
      botType = <i className="icon large circular shield" />;
      break;
    case "Support":
      botType = <i className="icon large circular ambulance" />;
      break;
    default:
      botType = <i className="icon large circular question" />;
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="column">
            <img
              alt={bot.name}
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div className="column">
            <h2>{bot.name}</h2>
            <p><strong>Class:</strong> {bot.bot_class}</p>
            <p><strong>Health:</strong> {bot.health}</p>
            <p><strong>Damage:</strong> {bot.damage}</p>
            <p><strong>Armor:</strong> {bot.armor}</p>
            <p><em>"{bot.catchphrase}"</em></p>
            {botType}
            <br /><br />
            <button className="ui button" onClick={() => handleClick(bot.id)}>
              Enlist
            </button>
            <button className="ui button" onClick={seeAll}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
