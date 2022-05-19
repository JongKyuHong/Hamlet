import styled from "styled-components";
import AddQuestion from "./modal/AddQuestion";
import plus from "../../../images/plus.svg";
import OneList from "./OneList";

const testData = [
  {
    title: "현재 다니는 SSAFY 캠퍼스가 어디인가요?",
    color: "#FFB34F",
    type: "투표",
    time: 20,
    score: 0,
  },
  {
    title: "컨설턴트님은 무엇을 더 좋아할까요?",
    color: "#FF92F1",
    type: "퀴즈",
    time: 20,
    score: 20,
    option: ["짜장", "짬뽕"],
  },
  {
    title: "햄릿에 대해 어떻게 생각하시나요?",
    color: "#87BAF9",
    type: "설문",
    time: 20,
    score: 0,
  },
  { title: "1+1=?", color: "#FF525B", type: "주관식", time: 10, score: 30 },
  { title: "1+1=?", color: "#FF525B", type: "주관식", time: 10, score: 30 },
  { title: "1+1=?", color: "#FF525B", type: "주관식", time: 10, score: 30 },
  { title: "1+1=?", color: "#FF525B", type: "주관식", time: 10, score: 30 },
  { title: "1+1=?", color: "#FF525B", type: "주관식", time: 10, score: 30 },
  { title: "1+1=?", color: "#FF525B", type: "주관식", time: 10, score: 30 },
  { title: "1+1=?", color: "#FF525B", type: "주관식", time: 10, score: 30 },
  { title: "1+1=?", color: "#FF525B", type: "주관식", time: 10, score: 30 },
  { title: "1+1=?", color: "#FF525B", type: "주관식", time: 10, score: 30 },
  { title: "1+1=?", color: "#FF525B", type: "주관식", time: 10, score: 30 },
];

interface props {
  showModal: boolean;
  onModal: () => void;
  offModal: () => void;
}

const QuestionsList = ({ showModal, onModal, offModal }: props) => {
  return (
    <>
      <Questions>
        <Scroll>
          {testData.map((data, i) => (
            <OneList key={i} {...data} />
          ))}
        </Scroll>
        <NewQuestion onClick={onModal}>
          <p>새 햄릿 추가</p>
          <div />
        </NewQuestion>
        {showModal && <AddQuestion offModal={offModal} />}
      </Questions>
    </>
  );
};

const NewQuestion = styled.div`
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

const Questions = styled.div`
  background-color: white;
  width: 70vw;
  height: 70%;
  border-radius: 30px;
  position: relative;
  padding: 50px;
`;

const Scroll = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  overflow-y: auto;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export default QuestionsList;
