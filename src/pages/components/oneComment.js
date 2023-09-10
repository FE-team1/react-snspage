import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import { HiMiniPaperAirplane } from "react-icons/hi2";

const OneComment = ({comment, contentList, setContentList}) => {

    const [isEditMode, setIsEditMode] = useState(false);
    const commentInput = useRef('null')

    const onEditComment = () =>  {
        if(!isEditMode) return setIsEditMode(true);
    }

    const onUpdateComment = (e) => {
        e.preventDefault(); 
        setContentList((prev) => {
            const updateComment = prev.find((el) => comment.content === comment);
            updateComment.comment = commentInput.current.valueOf;
            return contentList;
        })
    setIsEditMode(false);
    }


    return(
        <>
            <div>
                <CommentWrapper>
                    <ProfileImg src={comment.User.profileImg}></ProfileImg>
                    <p style={{fontWeight:'bold', padding:'6px 0px'}}>{comment.User.nickName}</p>
                    {/* editmode가 true면 수정할 수 있게 한다. : 아니면 원래 comment.content가나옴 */}
                    <Textarea>{isEditMode ?
                    <form onSubmit={onUpdateComment}>
                        <textarea defaultValue={comment.content} ref={commentInput}
                        style={{width: '500px', height: '2.5em', border: 'none', resize:'none', display:'flex'}}></textarea> 
                        <HiMiniPaperAirplane /> 
                    </form>
                    : comment.content}
                        </Textarea>
                </CommentWrapper>
                    {/* 누르면 editMode되는 이벤트 */}
                    <a href="#" onClick={onEditComment}>수정</a> &nbsp;
                    <a href="#">삭제</a>
                    {/* 수정해야할 경우 comment.content수정  */}
                    {/* ref로 줄경우 textarea에 기본값을 줄 수 없다 */}
                <textarea placeholder="댓글을 입력하세요..."></textarea>
                <HiMiniPaperAirplane />
            </div>
        </>
    )
}

export default OneComment;

const CommentWrapper = styled.div`
    background-color: #e9e9e9;
    border-radius: 20px;
    width: 100%;
    float: left;
`

const ProfileImg = styled.img`
    width: 50px;
    height: 50px; 
    border-radius: 70%;
    float: left;
    margin: 10px;
`

const Textarea = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 600px;
    left: 5px;

`