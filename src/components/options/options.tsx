import React from "react";
import Stone from "./stone/stone";
import Btn from "./btn/btn";
import cls from "./options.module.scss";

interface OptionsProps {
  onDice: (num1: number, role: boolean) => void;
  role: boolean;
  onHold: (role: boolean) => void;
  onRestart: () => void;
}

const Options: React.FC<OptionsProps> = ({
  onDice,
  role,
  onHold,
  onRestart,
}) => {
  return <div></div>;
};
export default Options;
