import React, { useState } from "react";

import cls from "./base.module.scss";
import Options from "./components/options/options";
interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [state, setState] = useState({
    player1: 0,
    player2: 0,
    currentRole: true,
    first: 0,
    second: 0,
  });
  return (
    <div className={cls.wrapper}>
      <div className={cls["bg-opacity"]}>
        <div
          className={cls.container}
          style={{
            background: `linear-gradient(to` ${
              state.currentRole ? "right" : "left"
            },  #f7d7d7 50%, #fff 50%)`,
          }}
        >
          <Player />
          <Options />
          <Player />
        </div>
      </div>
    </div>
  );
};

export default App;
