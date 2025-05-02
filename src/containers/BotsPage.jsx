import React from "react";
import YourBotArmy from "../components/YourBotArmy";
import BotCollection from "../components/BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      myBots: [],
      renderCollection: true,
      botSpecs: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then((data) => this.setState({ bots: data }));
  }

  handleClick = (selectedId) => {
    const selectedBot = this.state.bots.find(bot => bot.id === selectedId);
    const alreadyInArmy = this.state.myBots.find(bot => bot.id === selectedId);

    if (!alreadyInArmy && selectedBot) {
      this.setState((prev) => ({
        myBots: [...prev.myBots, selectedBot],
      }));
    }
  };

  handleRemove = (selectedId) => {
    const updatedArmy = this.state.myBots.filter(bot => bot.id !== selectedId);
    this.setState({ myBots: updatedArmy });
  };

  renderSpecs = (selectedId) => {
    const bot = this.state.bots.find(bot => bot.id === selectedId);
    this.setState({
      renderCollection: false,
      botSpecs: bot,
    });
  };

  seeAll = () => {
    this.setState({ renderCollection: true });
  };

  render() {
    const { myBots, bots, renderCollection, botSpecs } = this.state;

    return (
      <div>
        <YourBotArmy myBots={myBots} handleRemove={this.handleRemove} />
        {renderCollection ? (
          <BotCollection
            bots={bots}
            renderCollection={renderCollection}
            renderSpecs={this.renderSpecs}
            handleClick={this.handleClick}
          />
        ) : (
          <BotSpecs
            handleClick={this.handleClick}
            seeAll={this.seeAll}
            bot={botSpecs}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
