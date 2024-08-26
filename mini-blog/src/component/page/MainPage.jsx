import styled from "styled-components";
import Button from "../ui/Button";
import PostList from "../list/PostList";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // localStorage에서 posts 배열을 불러옴
        const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        setPosts(savedPosts); // 상태에 저장
    }, []);

    return (
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}
                />
                {posts.length !== 0 ? (
                    <PostList
                        posts={posts}
                        onClickItem={item => {
                            navigate(`/post/${item.id}`);
                        }}
                    />
                ) : (
                    <p>글이 존재하지 않습니다.</p>
                )}
            </Container>
        </Wrapper>
    );
}
