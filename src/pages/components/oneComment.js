import { styled } from "styled-components";

const OneComment = ({comment}) => {
    console.log(comment)

    // 수정
    const [isEditMode, setIsEditMode] = useState(false);
    const onEditPost = () =>  {
        if(!isEditMode) return setIsEditMode(true)
    }

    return(
        <>
            <div>
                <CommentWrapper>
                    <ProfileImg src={comment.User.profileImg}></ProfileImg>
                    <div>{comment.nickname}</div>
                    <div>{comment.content}</div>
                    <a href="/update">수정</a> &nbsp;
                    <a href="/delete">삭제</a>
                </CommentWrapper>
            </div>
        </>
    )
}

export default OneComment;