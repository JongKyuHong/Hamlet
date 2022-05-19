import styled from "styled-components";

const Header = () => {

    const logout = () => {
        localStorage.removeItem("access_token");
    }

    return(
        <Wrapper>
            <p onClick={logout}>로그아웃</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 50px;
    background: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    & p {
        margin-right: 20px;
        font-size: 18px;
        font-weight: bold;
        color: #FFB34F;
        cursor: pointer;
    }
`

export default Header;