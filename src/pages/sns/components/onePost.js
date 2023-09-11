import '@fortawesome/fontawesome-free/js/all.js'
import { FaRegComment } from "react-icons/fa"
// IoLogoGithub
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// 계속 import안돼서 보니 ai뒤에 소문자로 적어야한다고한다^^
import React, { useState } from 'react';
import styled from "styled-components";
import OneComment from './oneComment';

// post posts setPosts
const OnePost = ({post, posts, setPosts}) => {
    // fontAwesome으로 좋아요 아이콘 구현하는데에는 문제가 있어서 react-icons를 설치했다.
    // 상태끼리는 다 모아주기

    const [comment, setComment] = useState(post.Comments);
    // 잘 불러와진다
    console.log(comment)
    const [content, setContent] = useState('')
    // isLiked, setIsLiked 
    const [isLiked, setIsLiked] = useState(false);
    // onToggleIsLiked!! 
    const onToggleIsLiked = () => {
        // setIsLIked((prev) => !prev)
        setIsLiked((prev) => !prev);
    }

    // 수정관련 로직을 여기다가 만들어서 !
    // 시간복잡도는 상승하지만 데이터의 일관성이 유지된다.
    /*
        const editComment = (id, content) => {
            // 1번째 방법 (중첩객체 =>  find 두번씀)
            const _posts = [...posts]
            const findPost = posts.find((el) => el.id === post.id ) // 1
            const findComment = findPost.Comments.find((comment) => comment.id === id) // 2
            // Comment.content = content
            // 중첩객체배열의 깊은복사 해결
            findComment = {
                ...findComment,
                content,
                title
            }
            setPosts(_posts)
        }
     */
    
    const addComment = (e) => {
        e.preventDefault();
        const newComment = {content}
        // const _posts = [...posts]
        // const findPost = posts.find((el) => el.id === post.id ) // 1
        // const findComment = findPost.Comments.find((comment) => comment.id === id) // 2
        setComment((prev) => [{
            User: {
                id: 1,
                nickName: '김땡땡',
                profileImg: '/img/IMG_8961.JPG',
            },
            content,
            newComment,
            },
        ...prev,
        ])
        // 쓸데없는 반점 넣어서 오류남
        setContent('')
        console.log(newComment)
    }

    const [isShowComment, setIsShowComment] = useState(false);
    
    const onClickShowComment = () => {
        setIsShowComment((prev) => !prev);
        console.log(isShowComment);
    }

    return (
        <Wrapper>
            <Logo>Logo</Logo>
            {/* 목데이터 필요한 부분 -> 반복되는 UI처리해야한다 */}
            {/* list는 목데이터 값 */}
            {/* container로 수정 wrapper와container 남발하지않기 */}
            <ContentWrapper>
                <div>
                    <ProfileImg src={post.User.profileImg}></ProfileImg>
                    {/* style 다 아래로 내려서 처리하기 */}
                    <div style={{fontWeight:'bold', paddingTop:'10px'}}>
                        {post.User.nickName}</div>
                    <div>{post.createdAt.toString()}</div>
                    {/* toString() !!*/}
                </div>
                <content>
                    <div style={{fontSize:'20px', padding:'30px 0px 30px 20px'}}>{post.title}</div>
                    <div style={{paddingLeft:'20px'}}>{post.content}</div>
                    {/* <PostImg /> */}
                    <PostImg src={post.Post_img}></PostImg>
                </content>
                {/* Icon */}
                {/* IconWrapper같은 거로 감싸고있는 거처럼작명하기 */}
                {/* {isShowComment && <div> <input><button> } */}
                {/* aifillheart style= {css` color:red `}같은 형식으로 작성하기 */}
                <BottomWrapper>
                    {/* 삼항연산자로 좋아요기능 다루기 */}
                    <div onClick={onToggleIsLiked}>
                        {isLiked ? (
                            <AiFillHeart style={{ color: "red", fontSize: "35px" }} />
                        ) : (
                            <AiOutlineHeart style={{ fontSize: "35px" }} />
                        )}
                    </div>
                    {/* 댓글 아이콘 클릭이벤트가 먹지 않는다ㅠ*/}
                    <div onClick={onClickShowComment}>
                        <FaRegComment style={{ fontSize: "30px", marginLeft:"10px" }} />
                    </div>
                    {/* map 오류를 해결하기위해 && list.Comments넣으면 새로 생긴 데이터에서 댓글을 불러오지 못한는 문제ㅠ */}
                    {isShowComment && 
                    // <div><input/></div>넣기!
                    <div>
                        {/* 댓글의 input부분 */}
                        <form onSubmit={addComment}>
                            <input value={content} placeholder='댓글을 입력해주세요' onChange={(e) => setContent(e.target.value)}/><button>등록</button>
                        </form>
                    {post.Comments  && post.Comments.map((comment) => 
                    // editPost물려주기
                    <OneComment comment={comment} addComment={addComment}></OneComment>)}
                        {/* 꽉찬하트 <FontAwesomeIcon icon="fas fa-heart" /> */}
                        {/* 사이즈 조절어떻게해.. ?? fa-2x 안됨 => className -> App.css가서해결*/
                    }
                    </div>
                        }
                </BottomWrapper>
            </ContentWrapper>
        </Wrapper>
    )
}

export default OnePost;



const Wrapper =  styled.div`
    background-color: white;
    display: flex;
    max-width: 800px;
    box-sizing: border-box;
    height: 100vh;

    /* 왜 100%...???왜 짤리지..? */
    margin: 0 auto;
    border-radius: 30px;
    flex-direction: column;
`

const Logo = styled.h3`
    position: absolute;
    font-size: 30px;
    top: 20px;
    left: 460px;

`

const ContentWrapper = styled.div `
    position: relative;
    top: 80px;
    justify-content: center;
    align-items: center;
`

const ProfileImg = styled.img`
width: 50px;
height: 50px; 
border-radius: 70%;
float: left;
margin: 0px 40px 10px 20px;
`

const PostImg = styled.img`
    width: 100%;
    height: 600px;
`

const BottomWrapper = styled.div`
    padding-left: 20px;
    display: flex;
`
