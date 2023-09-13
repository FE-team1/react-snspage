import React, { useRef, useState } from "react";
import { styled } from "styled-components";

// setPosts 부모로 setPosts 프롭스드릴링일어남
const OneComment = ({post, posts, comment, comments, setComments}) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const editCommentInput = useRef(null)
    console.log(editCommentInput)

    // comment가 왜 state기본값으로 설정이 안되는 걸까
    // 혹시 몰라 MockPosts.Comments로 가져와봤는데 실패
    // 콘솔찍어보면 잘가져와진다 콘솔을 보고 다시 천천히 선택자를 맞춰봐야겠다
    // 맞는데 외 않 되;; (심한욕)
    const onEditComment = () =>  {
        if(!isEditMode) return setIsEditMode(true);
        const _post = [...posts]
        const findPost = _post.find((el) => el.id === post.id ) // 1
        const findComment = findPost.Comments.filter((el)=> el.id === comment.id) // 2
        findPost.Comments = findComment;
        // 원하는 값으로 수정된 + 원래 값들이 나열된 배열이 들어가야함
        setComments((comments) => {
            const newComment = comments.find((el) => el.id === comment.id)
            // 잘몰랐던 부분 editCommentInput의 current.value를 가져오기!!
            newComment.content = editCommentInput.current.value;
            // 댓글의 리스트 리턴
            return comments
        })
        setIsEditMode(false);
    }


    // 새로 생성한 댓글은 삭제가 잘 된다. 그러나 원래 있던 것들이 되지않는 문제
    const onDeleteComment = () => {
        const _post = [...posts]
        const findPost = _post.find((el) => el.id === post.id) // 1
        console.log(`findpost`, findPost) //undefined.... -> // post를 props로 내려줘야만 선택됨
        // 같지않은 것만 setComments해주기
        const findComment = findPost.Comments.filter((el)=> el.id !== comment.id) // 2
        console.log(`comment.id:`, comment.id)
        console.log(`findpostcomment:`, findPost.Comments)
        // 선택한 아이디를 인식 못하는듯 하다...
        // 어떻게 가져오는거ㅑㅇ; => comment.id !! 각각하나하나
        console.log(`findComment`, findComment)
        // 원래있던 댓글을 findComment 배열로 바꿈!!
        findPost.Comments = findComment;
        // 댓글 부분 findComment~!~!~@!~ !~ 
        setComments(findComment);
    }

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
                        <input defaultValue={comment.content} ref={editCommentInput}
                        style={{width: '500px', height: '2.5em', border: 'none', resize:'none'}}></input> 
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
    width: 97%;
    /* 왜 세로로 안뜰까요.?????? */
    display: flex;
    margin: 12px;
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
    top: 30px;
`

const BtnWrapper = styled.div`
    margin: 0px 12px;
`