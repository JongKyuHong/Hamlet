import { useState } from "react";
import HamletView from "./HamletView";

const Hamlet = () => {
  const [showModal, setShowModal] = useState(false);
  const [toggleNum, setToggleNum] = useState<number>(0);

  const changeToggleNum = (num: number) => {
    setToggleNum(num);
  };

  const props = {
    showModal,
    onModal: () => setShowModal(true),
    offModal: () => setShowModal(false),
    toggleNum,
    changeToggleNum,
  };
  return <HamletView {...props} />;
};

export default Hamlet;
