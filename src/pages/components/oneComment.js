import { useState } from "react";
import { styled } from "styled-components";
import { HiMiniPaperAirplane } from "react-icons/hi2";

const OneComment = ({comment}) => {

    console.log(comment)

    // 수정
    const [isEditMode, setIsEditMode] = useState(false);
    // comment가 왜 state기본값으로 설정이 안되는 걸까
    // 혹시 몰라 MockPosts.Comments로 가져와봤는데 개같이 실패
    const [commentList, setCommentList] = useState(comment);
    const commentInput = useRef(null)
    // 콘솔찍어보면 잘가져와진다 콘솔을 보고 다시 천천히 선택자를 맞춰봐야겠다
    // 맞는데 외 않 되;; (심한욕)
    console.log('commentList:', commentList)
    console.log('commentInput:', commentInput.current)


    const onEditComment = () =>  {
        if(!isEditMode) return setIsEditMode(true);
    }

    // 어떻게 하는건지 모르겠다 아오,.... id값을 제대로 가지고온건지도 모르겠고 화낭다 
    // 뭔가 .value .current이런 거에대한 개념이 아직 부족한듯하다...
    const onUpdateComment = (e) => {
        e.preventDefault(); 
        setCommentList((commentList) => {
            const updateCommentList = [];
            for(let i=0; i<commentList.length; i++) {
                if(commentList[i] === comment){
                    updateCommentList.push(commentInput.current.value);
                }
            }
            setCommentList(updateCommentList)
        })
    setIsEditMode(false);
    }

    const onDeleteComment = () => {
        const newCommentList = [];
        for(let i=0; i<commentList.length; i++) {
            if(commentList[i] !== comment) {
                newCommentList.push(comment)
            }
        }
        setCommentList(newCommentList)
    }

    return(
        <>
            <div>
                <CommentWrapper>
                    {/* 왜 CommentList.User가 안되나요ㅠㅠ?? */}
                    {/* Cannot read properties of undefined (reading 'User') 이거 왜 뜨냐 왜못읽어. */}
                    <ProfileImg src={commentList.User.profileImg}></ProfileImg>
                    <p style={{fontWeight:'bold', margin:'6px 75px'}}>{commentList.User.nickName}</p>
                    {/* editmode가 true면 수정할 수 있게 한다. : 아니면 원래 comment.content가나옴 */}
                    <Textarea>{isEditMode ?
                    <form onSubmit={onUpdateComment}>
                        <input defaultValue={comment.content} ref={commentInput}
                        style={{width: '500px', height: '2.5em', border: 'none', resize:'none', display:'flex'}}></input> 
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
                <input placeholder="댓글을 입력하세요..."></input>
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
    flex-direction: column;
    /* 왜 세로로 안뜰까요.?????? */
    float: left;
`

const ProfileImg = styled.img`
width: 50px;
height: 50px; 
border-radius: 70%;
float: left;
margin: 0px 40px 10px 20px;
`