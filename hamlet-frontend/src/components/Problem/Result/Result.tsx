import logo from '../../../images/logo.png';
import styled from 'styled-components';
import { colors } from '../../../styles/style';

const StyledOption = styled.div<{isTitle: boolean}>` 
    display: flex;
    justify-content: ${props => props.isTitle ? "center" : "space-between"};
    align-items: center;
    background-color: ${props => props.isTitle ? "#FFFFFF" : colors.pointSub2};
    width: ${props => props.isTitle ? 35 : 65}%;
    height: 6vh;
    border-radius: 20px;
    font-size: 0.7em;
    font-weight: bold;
    color:  ${props => props.isTitle ? "#FF961C" : "white"};
    padding: 0 2em 0 2em;
    margin: 0 0 2em 0;
  `;


const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: rows;
  align-content: center;
  justify-content: center;
  background-color: #FFB762;
  width: 80%;
  min-height: 60vh;
  margin-top : 2em;
  border-radius: 10px;
  padding: 1em 0 1em 0;
`;

const Result = () => {
  return(
    <StyledDiv>
      <StyledOption isTitle={true}>현재까지 순위</StyledOption>
      <StyledOption isTitle={false}><p>1위</p> <p>A206_윤혜구</p> <p>1500점</p></StyledOption>
      <StyledOption isTitle={false}><p>2위</p> <p>A206_이규은</p> <p>1320점</p></StyledOption>
      <StyledOption isTitle={false}><p>3위</p> <p>A206_이건</p> <p>1280점</p></StyledOption>
    </StyledDiv>
  );
}

export default Result;