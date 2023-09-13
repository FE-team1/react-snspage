import '@fortawesome/fontawesome-free/js/all.js'
import { faker } from '@faker-js/faker';
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

    const [comments, setComments] = useState(post.Comments);
    // 콘솔 시 잘 불러와진다
    const [content, setContent] = useState('')
    // isLiked, setIsLiked 
    const [isLiked, setIsLiked] = useState(false);
    const onToggleIsLiked = () => {
        // setIsLIked((prev) => !prev)
        setIsLiked((prev) => !prev);
    }

    const [isShowComment, setIsShowComment] = useState(false);

    const onClickShowComment = () => {
        setIsShowComment((prev) => !prev);
    }

    // 수정관련 로직을 여기다가 만들어서 !
    // 시간복잡도는 상승하지만 데이터의 일관성이 유지된다.
        // const editComment = (id) => {
        //     // 1번째 방법 (중첩객체 =>  find 두번씀)
        //     // 중첩객체의 깊은복사 해결
        //     const _posts = [...posts]
        //     const findPost = _posts.find((el) => el.id === post.id ) // 1
        //     const findComment = findPost.Comments.find((comment) => comment.id === id) // 2 : undefined뜸
        // }
    // 댓글 추가 기능
    const onAddComment = (e) => {
        e.preventDefault();
        setComments((prev) => [{
            User: {
                id: 1,
                nickName: '김땡땡',
                profileImg: '/img/IMG_8961.JPG',
                },
                myComment: true,
                createdAt: faker.date.between(
                "2023-01-01T00:00:00.000Z",
                "2023-01-31T00:00:00.000Z"
            ),
            content,
            },
        ...prev,
        ])
        // 쓸데없는 반점 넣어서 오류남
        setContent('')
        // 콘솔에는 찍히는데 새로 생성이 안된다.
        // 지금 댓글의 데이터는 맵 돌려서 데이터가 들어가고 있다.
        // 내가 새로 작성한 댓글이 그 속에 들어가게 하려면 어떻게 해야할까ㅠ
        // 해결했다ㅠㅠㅠ!!!!! 왜 comments 상태를 맵자체에 넣을 생각을 못햇을까..? 
    }

    // 한개의 포스트 마다 여백을 주려면 어떻게 해야할까?
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
                {/* IconWrapper같은 거로 감싸고있는 거처럼작명하기 */}
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
                    <div onClick={onClickShowComment}>
                        <FaRegComment style={{ fontSize: "30px", marginLeft:"10px" }} />
                    </div>
                </BottomWrapper>
                    {isShowComment && 
                    // map 바깥에 <div><input/></div>넣기!
                    <CommentWrapper>
                        {/* 댓글의 input부분 */}
                        <form onSubmit={onAddComment}>
                            <input value={content} placeholder='댓글을 입력해주세요' style={{width: '715px', height: '2.5em', margin:'12px', border:'0.8px solid #2d2d2d'}} 
                            onChange={(e) => setContent(e.target.value)}/>
                            <button style={{padding:'10px'}}>등록</button>
                        </form>
                        {comments && comments.map((comment) => 
                        // editPost물려주기
                        <OneComment post={post} posts={posts} comment={comment} comments={comments} setComments={setComments}></OneComment>)}
                            {/* 꽉찬하트 <FontAwesomeIcon icon="fas fa-heart" /> */}
                            {/* 사이즈 조절어떻게해.. ?? fa-2x 안됨 => className -> App.css가서해결*/
                        }
                    </CommentWrapper>
                        }
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
    height: 120%;
    /* 왜 100%...???왜 짤리지..? */
    margin: 0 auto;
    padding-bottom: 120px;
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

const CommentWrapper = styled.div`
`