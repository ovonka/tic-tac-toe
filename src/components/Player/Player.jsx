import React from "react";
import { PlayerWrapper } from "./Player.styled";

function Player({ player, isPlayeractive }) {
  return (
    <PlayerWrapper isPlayeractive={isPlayeractive ?? false}>
      {" "}
      <div>
        {" "}
        {player.name} ({player.choice}){" "}
      </div>
      <div> {player.score} </div>
    </PlayerWrapper>
  );
}

export default Player;
