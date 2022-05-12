import React from 'react';
import { question } from '../../../types';
import styled from "styled-components";
import { colors } from '../../../styles/style';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${ colors.bgMain };
  width: 80%;
  min-height: 60vh;
  margin : 2em 0 1em 0;
  border-radius: 10px;
`;

const  Styledtitle = styled.label`
  margin : 2.5em 0 5em 3em;
  font-weight: bold;
`;

const StyledInput = styled.input`
  background-color: ${ colors.bgDark };
  margin: 0 0 1em 0;
  width: 50%;
  height: 5vh;
  border-radius: 5px;
  font: 0.9em bold;
  color: black;
  padding: 0 3em 0 0;
`;

const StyledScore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-content:center;
  background-color: ${ colors.pointSub1 };
  min-width: 9vh;
  max-width: 9vh;
  min-height: 9vh;
  max-height: 9vh;
  border-radius: 100%;
  margin : 2em 0 5em 0;
  color: white;
  font-weight: bold;
`;

const StyleDiv2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 80%;  
`;

const AdminButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.pointSub2};
  margin: 0 0 1em 0;
  width: 45%;
  height: 6vh;
  border-radius: 10px;
  font: 0.7em bold;
  color: white;
  font-weight: bold;
`

const StyledDiv3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`;

function PollAdmin( ) { // poll : question
  // const { q, type, time, choices} = poll;
  return(
    <>
      <StyledDiv>
        <StyleDiv2>
          <StyledScore>20</StyledScore>
          <Styledtitle>투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표
          투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표투표
          </Styledtitle>
        </StyleDiv2>
        <StyledInput placeholder='입력하세요'/>
      </StyledDiv>
      <StyledDiv3>
        <AdminButton>
          Skip
        </AdminButton>
        <AdminButton>
          정답공개
        </AdminButton>
      </StyledDiv3>
    </>
  );
}

export default PollAdmin;