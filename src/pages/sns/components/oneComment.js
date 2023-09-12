import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { HiMiniPaperAirplane } from "react-icons/hi2";

// setPosts 부모로 setPosts 프롭스드릴링일어남
const OneComment = ({comment, editComment, addComment, deleteComment}) => {
    const [isEditMode, setIsEditMode] = useState(false);

    // comment가 왜 state기본값으로 설정이 안되는 걸까
    // 혹시 몰라 MockPosts.Comments로 가져와봤는데 실패
    // 콘솔찍어보면 잘가져와진다 콘솔을 보고 다시 천천히 선택자를 맞춰봐야겠다
    // 맞는데 외 않 되;; (심한욕)
    const onEditComment = () =>  {
        if(!isEditMode) return setIsEditMode(true);
        editComment();
        setIsEditMode(false);
    }

    
    const onDeleteComment = () => {
        deleteComment();
    }

    // const onDeleteComment = () => {
    //     const newComment = [];
    //     for(let i=0; i<comment.length; i++) {
    //         if(comment[i] !== comment) {
    //             newComment.push(comment)
    //         }
    //     }
    //     setCommentList(newComment)
    // }

    // setPosts(prev) 프롭스드릴링 해소를 위해서는 부모에서 작업하는게 낫다 return prev

    return(
        <>
            <div>
                <CommentWrapper>
                    {/* Cannot read properties of undefined (reading 'User') 이거 왜 뜨냐 왜못읽어. */}
                    <ProfileImg src={comment.User.profileImg}></ProfileImg>
                    <span style={{fontWeight:'bold', marginTop:'30px'}}>{comment.User.nickName}</span>
                    {/* editmode가 true면 수정할 수 있게 한다. : 아니면 원래 comment.content가나옴 */}
                    <ContentBox>{isEditMode ?
                    <form onSubmit={editComment}>
                        <input defaultValue={comment.content}
                        style={{width: '500px', height: '2.5em', border: 'none', resize:'none'}}></input> 
                        <HiMiniPaperAirplane /> 
                    </form>
                    : comment.content }
                    </ContentBox>
                </CommentWrapper>
                <BtnWrapper>
                    <button onClick={onEditComment}>수정</button> &nbsp;
                    <button onClick={onDeleteComment}>삭제</button>
                </BtnWrapper>
                    {/* 누르면 editMode되는 이벤트 */}
                    {/* 수정해야할 경우 comment.content수정  */}
                    {/* ref로 줄경우 textarea에 기본값을 줄 수 없다 */}
                    {/* 왜이렇게 많이 생기는 걸까요..ㅋㅋ 난감 */}
            </div>
        </>
    )
}

export default OneComment;

const CommentWrapper = styled.div`
    background-color: #e9e9e9;
    border-radius: 30px;
    width: 98%;
    /* 왜 세로로 안뜰까요.?????? */
    display: flex;
    margin: 10px;
    /* 사실은 요소만큼만 댓글ㅇ이 등장하게 하고싶어요 */
`

const ProfileImg = styled.img`
    width: 50px;
    height: 50px; 
    border-radius: 70%;
    float: left;
    margin: 10px;
`

const ContentBox = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 600px;
    left: 20px;
    /* 왼쪽으로 오게만들고 싶은데ㅠ */
    top: 30px;
`

const BtnWrapper = styled.div`
    margin: 0px 10px;
`