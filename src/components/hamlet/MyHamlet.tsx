import styled from "styled-components";
import plus from "../../images/plus.svg";
import AddNewHamlet from "./addNewHamlet/AddNewHamlet";
import axios from "axios";
import { useEffect, useState } from "react";
import { Hamlet } from "../Type/Hamlets/Hamlets";
import { config } from "../../rest";

const hemletData = [
  { name: "햄릿1", color: "#FFB34F" },
  { name: "햄릿2", color: "#FF525B" },
  { name: "햄릿3", color: "#FF92F1" },
  { name: "햄릿4", color: "#87BAF9" },
  { name: "햄릿4", color: "#87BAF9" },
  { name: "햄릿4", color: "#87BAF9" },
  { name: "햄릿4", color: "#87BAF9" },
  { name: "햄릿4", color: "#87BAF9" },
  { name: "햄릿4", color: "#87BAF9" },
];

const colors = ["#FF92F1", "#FFB34F", "#87BAF9"];

interface props {
  showModal: boolean;
  onModal: () => void;
  offModal: () => void;
}

const MyHamlet = ({ showModal, onModal, offModal }: props) => {
  const [hamlets, setHamlets] = useState<Hamlet[]>();
  const [selectedId, setSelectedID] = useState<number>();
  const getHamlets = async () => {
    try {
      const response = await axios.get(
        "http://k6a206.p.ssafy.io:8080/hamlets",
        config
      );
      setHamlets(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getHamlets();
  }, []);
  return (
    <>
      <MyHamlets>
        <Scroll>
          {hamlets &&
            hamlets.map((hd, i) => (
              <OneHamlet
                key={i}
                color={colors[i]}
                onClick={() => {
                  onModal();
                  setSelectedID(hd.hamletId);
                }}
              >
                <p>{hd.title}</p>
                <DelBtn>
                  <div />
                </DelBtn>
              </OneHamlet>
            ))}
        </Scroll>
        <NewHemlet onClick={onModal}>
          <p>새 햄릿 추가</p>
          <div />
        </NewHemlet>
      </MyHamlets>
      {showModal && (
        <AddNewHamlet offModal={offModal} id={selectedId as number} />
      )}
    </>
  );
};

const NewHemlet = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 10px;

  p {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }
  div {
    width: 32px;
    height: 32px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    background-image: url(${plus});
  }
`;

const MyHamlets = styled.div`
  background-color: white;
  width: 70vw;
  height: 70%;
  border-radius: 30px;
  position: relative;
  padding: 50px;
`;

const Scroll = styled.div`
  height: 100%;
  display: grid;
  gap: 50px 0;
  grid-template-columns: repeat(4, 1fr);

  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const OneHamlet = styled.div`
  width: 220px;
  height: 200px;
  align-self: flex-start;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  background-color: ${({ color }: { color: string }) => color};
  border-radius: 20px;

  p {
    color: white;
    font-size: 40px;
  }
`;

const DelBtn = styled.button`
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  div {
    position: relative;
    height: 0px;
    width: 18px;
    border-top: 3px solid black;
    border-radius: 3px;
    transform: rotate(-45deg);
  }

  div:after {
    height: 0px;
    width: 18px;
    border-top: 3px solid black;
    border-radius: 3px;
    content: "";
    position: absolute;
    top: -3px;
    left: 0;
    transform: rotate(-90deg);
  }
  background-color: transparent;
  border: none;
  height: 20px;
  padding: 0;
`;

export default MyHamlet;
