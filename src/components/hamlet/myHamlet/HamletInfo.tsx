import styled from "styled-components";
import OneQuestion from "../OneQuestion";
import { Questtions } from "../../Type/Hamlets/Hamlets";

const colors = ["#FF92F1", "#FFB34F", "#87BAF9"];

interface props {
  questtions?: Questtions[];
  onClick: (id: number) => void;
}

const HamletInfo = ({ questtions, onClick }: props) => {
  return (
    <HamletInfoSection>
      <HamletTitle placeholder="새 햄릿" />
      <QuestionSection>
        <QuestionList>
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
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
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
