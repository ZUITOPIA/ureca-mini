// MainPage.jsx
import styled from "styled-components";
import UserInfoList from "./UserInfoList";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

export default function MainPage() {
    return (
        <>
            <Wrapper>
                <Container>
                    <UserInfoList />
                </Container>
            </Wrapper>
        </>
    );
}
