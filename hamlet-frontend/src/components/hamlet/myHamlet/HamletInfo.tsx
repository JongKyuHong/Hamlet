import styled from "styled-components";
import OneQuestion from "../OneQuestion";
import { Questtions } from "../../Type/Hamlets/Hamlets";
import { requestWithAccessToken } from "../../../utils/axios";
import AddNewHamletView from "../addNewHamlet/AddNewHamletView";
import { useState } from "react";

const colors = ["#FF92F1", "#FFB34F", "#87BAF9"];

interface props {
  questtions?: Questtions[];
  onClick: (id: number) => void;
}

const HamletInfo = ({ questtions, onClick }: props) => {

  const [input, setInput] = useState<string>("");

  const overLap = () => {
    requestWithAccessToken({
      method: "POST",
      url: "/hamlets",
      headers: {},
      data: {
        title: input
      }
    }).then((res) => {
      console.log(res) 
      window.location.reload();
    }).catch((err) => {
      console.log(err)
    })
  };

  const changeInput = (e: any) => {
    setInput(e.target.value);
  }


  return (
    <HamletInfoSection>
      <div className="section">
      <div style={{display: "flex", alignItems: "center"}} className="title">
      <HamletTitle onChange={changeInput} placeholder="새 햄릿" />
      <button onClick={overLap} style={{width:85, cursor: "pointer", height: 30, borderRadius: 5, marginLeft: 5, color: "white", border: "none", background: "#523e24"}}>확인</button>
      </div>
      <QuestionSection>
        <QuestionList>
          <p onClick={() => {}} style={{fontSize: 30, margin: 0, cursor: "pointer"}}>+</p>
          {questtions?.map((q, index) => (
            <OneQuestion
              id={q.questionId}
              color={colors[index] || "#87BAF9"}
              key={q.questionId}
              title={q.contents}
              onClick={onClick}
              {...q}
            />
          ))}
        </QuestionList>
        <AddBtn>생성하기</AddBtn>
      </QuestionSection>
      </div>
    </HamletInfoSection>
  );
};

const AddBtn = styled.button`
  background-color: #523e24;
  border: none;
  margin: 0;
  padding: 0;
  height: 10%;
  height: 10%;
  width: 100%;
  border-radius: 0 0 21px 21px;
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const HamletInfoSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .section{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20vw;
  }  
`;

const QuestionList = styled.div`
  height: 82%;
  width: 100%;
  margin: 8% 0 0 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;

  gap: 20px;
`;

const QuestionSection = styled.div`
  background-color: white;
  width: 100%;
  height: 50vh;
  border-radius: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HamletTitle = styled.input`
  width: 94%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;
  padding: 0px 3% 5px 3%;
  color: #fff;
  outline: none;

  font-weight: 700;
  font-size: 32px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default HamletInfo;
