// PostList.jsx
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostList(props) {
    const { posts, onClickItem } = props;
    //posts ==> Post배열
    return (
        <Wrapper>
            {posts.map(post => {
                return (
                    <PostListItem
                        post={post}
                        key={post.id}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;
