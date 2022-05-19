import { useState } from "react";
import styled, { css } from "styled-components";

interface props {
  title: string;
  color: string;
  type: string;
  time: number;
  score: number;
  option?: string[];
}

const OneList = ({ title, color, type, time, score, option }: props) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const changeClickedState = () => setClicked((pre) => !pre);
  return (
    <List>
      <QuestionsOption color={color}>
        <OneQuestion color={color}>
          <Title>{title}</Title>
          <Propertys>
            <p>
              {type} | {time}초 | {score ? `${score}점` : "-"}
            </p>
            <Toggle clicked={clicked} onClick={changeClickedState}>
              {option?.length && <div />}
            </Toggle>
          </Propertys>
        </OneQuestion>
        {option && (
          <Options clicked={clicked}>
            {option.map((opt, i) => (
              <Option key={i}>{opt}</Option>
            ))}
          </Options>
        )}
      </QuestionsOption>
      <PatchBtn>수정</PatchBtn>
    </List>
  );
};

const QuestionsOption = styled.div`
  width: 90%;
  height: fit-content;
  background-color: ${({ color }: { color: string }) => color + "80"};
  border-radius: 20px;
`;

const List = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  /* align-items: center; */
`;

const Options = styled.div`
  padding: 10px 40px;
  flex-direction: column;
  gap: 5px;

  display: ${({ clicked }: { clicked: boolean }) =>
    clicked ? "flex" : "none"};
`;

const Option = styled.div`
  background-color: white;
  width: 50%;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;

  height: 20px;
  padding: 8px 15px;
  border-radius: 18px;
`;
const PatchBtn = styled.button`
  width: 8%;
  height: 40px;
  margin: 5px 0;
  background-color: transparent;
  border: black solid 1px;
  border-radius: 20px;

  font-size: 20px;
  cursor: pointer;
`;

const OneQuestion = styled.div`
  width: 100%;
  height: 50px;
  align-self: flex-start;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ color }: { color: string }) => color};
  border-radius: 20px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 20px;
  color: white;
  font-weight: 700;
  padding-left: 30px;
`;

const Propertys = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-right: 20px;

  p {
    margin: 0;
    font-size: 16px;
    color: white;
    font-weight: 500;
  }
`;

const Toggle = styled.div`
  width: 30px;
  height: 25px;
  cursor: pointer;
  transform: rotate(180deg);
  position: relative;

  ${({ clicked }: { clicked: boolean }) =>
    clicked
      ? css`
          transform: rotate(0deg);
        `
      : css`
          transform: rotate(-180deg);
        `}

  transition:0.5s;

  div {
    position: absolute;
    top: 50%;
    left: 0px;
    width: 18px;
    border-top: 3px solid white;
    border-radius: 3px;

    transform: rotate(45deg);

    &:after {
      position: absolute;
      width: 18px;
      content: "";

      border-top: 3px solid white;
      border-radius: 3px;
      top: -11px;
      left: 8px;

      transform: rotate(90deg);
    }
  }
`;

export default OneList;
