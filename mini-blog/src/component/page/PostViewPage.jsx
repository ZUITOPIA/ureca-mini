import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import TextInput from "../ui/TextInput";

import CommentList from "../list/CommentList";

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

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

export default function PostViewPage() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    const [comment, setComment] = useState("");

    useEffect(() => {
        // localStorage에서 posts 배열을 가져옴
        const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        // postId에 해당하는 포스트를 찾음
        const foundPost = savedPosts.find(item => item.id === Number(postId));
        setPost(foundPost); // 상태에 저장
    }, [postId]);

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                {post ? (
                    <PostContainer>
                        <TitleText>{post.title}</TitleText>
                        <ContentText>{post.content}</ContentText>
                    </PostContainer>
                ) : (
                    <p>해당 글을 찾을 수 없습니다.</p>
                )}

                {/* <CommentList comments={post.comments} /> */}
                {/* post.comments를 연결해주어야함 */}

                {/* 댓글 추가 입력폼 */}
                <TextInput
                    height={40}
                    value={comment}
                    onChange={event => {
                        setComment(event.target.value);
                    }}
                />
                <Button
                    title="댓글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}
