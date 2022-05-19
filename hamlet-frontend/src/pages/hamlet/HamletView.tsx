import styled from "styled-components";
import MyHamlet from "../../components/hamlet/MyHamlet";
import QuestionsList from "../../components/hamlet/questionsList/QuestionsList";

interface props {
  showModal: boolean;
  onModal: () => void;
  offModal: () => void;
  toggleNum: number;
}

interface props2 {
  changeToggleNum: (num: number) => void;
}

const HamletView = ({
  showModal,
  onModal,
  offModal,
  toggleNum,
  changeToggleNum,
}: props & props2) => {
  return (
    <Page>
      <ToggleBar>
        <MyHamletToggle onClick={() => changeToggleNum(0)}>
          내 햄릿
        </MyHamletToggle>
        <MyHamletToggle onClick={() => changeToggleNum(1)}>
          질문 목록
        </MyHamletToggle>
        <MyHamletToggle onClick={() => changeToggleNum(2)}>
          종료된 햄릿
        </MyHamletToggle>
      </ToggleBar>
      <Board
        showModal={showModal}
        onModal={onModal}
        offModal={offModal}
        toggleNum={toggleNum}
      />
    </Page>
  );
};

const Board = ({ toggleNum, showModal, onModal, offModal }: props) => {
  if (toggleNum === 0) {
    return (
      <MyHamlet showModal={showModal} onModal={onModal} offModal={offModal} />
    );
  }

  if (toggleNum === 1) {
    return (
      <QuestionsList
        showModal={showModal}
        onModal={onModal}
        offModal={offModal}
      />
    );
  }

  return <></>;
};

const Page = styled.main`
  display: flex;
  height: 100vh;

  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ToggleBar = styled.div`
  width: 70vw;
  height: auto;
  display: flex;
`;

const MyHamletToggle = styled.div`
  background-color: #523e24;
  height: 25px;
  width: fit-content;
  padding: 15px 30px 0 30px;
  border-radius: 30px 30px 0 0;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export default HamletView;
