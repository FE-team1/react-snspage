import '@fortawesome/fontawesome-free/js/all.js'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa"
// IoLogoGithub
// 계속 import안돼서 보니 ai뒤에 소문자로 적어야한다고한다^^
import React, { useState } from 'react';
import styled from "styled-components";
import OneComment from './oneComment';

const OnePost = ({list, contentList, setContentList}) => {
    // fontAwesome으로 좋아요 아이콘 구현하는데에는 문제가 있어서 react-icons를 설치했다.
    
    const [heart, setHeart] = useState(false);
    const handleHeart = () => {
        setHeart(!heart);
    }

    const [isShowComment, setIsShowComment] = useState(false);
    
    const onClickShowComment = () => {
        setIsShowComment((prev) => !prev);
        console.log(isShowComment);
    }

    return (
        <>
        <Wrapper>
            <Logo>Logo</Logo>
            {/* 목데이터 필요한 부분 -> 반복되는 UI처리해야한다 */}
            {/* list는 목데이터 값 */}
            <ContentWrapper>
                <div>
                    <ProfileImg src={list.User.profileImg}></ProfileImg>
                    <div style={{fontWeight:'bold', paddingTop:'10px'}}>
                        {list.User.nickName}</div>
                    <div>{list.createdAt.toString()}</div>
                    {/* toString() !!*/}
                </div>
                <content>
                    <div style={{fontSize:'20px', padding:'30px 0px 30px 20px'}}>{list.title}</div>
                    <div style={{paddingLeft:'20px'}}>{list.content}</div>
                    <PostImg src={list.Post_img}></PostImg>
                </content>
                {/* 여기까지 */}
                <BottomIcon>
                    {/* 삼항연산자로 좋아요기능 다루기 */}
                    <div onClick={handleHeart}>
                        {heart ? (
                            <AiFillHeart style={{ color: "red", fontSize: "35px" }} />
                        ) : (
                            <AiOutlineHeart style={{ fontSize: "35px" }} />
                        )}
                    </div>
                    {/* 댓글 아이콘 클릭이벤트가 먹지 않는다ㅠ*/}
                    <div onClick={onClickShowComment}>
                        <FaRegComment style={{ fontSize: "30px", marginLeft:"10px" }} />
                    </div>
                    {isShowComment && list.Comments.map((comment) => 
                    <OneComment comment={comment} contentList={contentList} setContentList={setContentList}></OneComment>)}
                        {/* 꽉찬하트 <FontAwesomeIcon icon="fas fa-heart" /> */}
                        {/* 사이즈 조절어떻게해.. ?? fa-2x 안됨 => className -> App.css가서해결*/}
                </BottomIcon>
            </ContentWrapper>
        </Wrapper>
        </>
    )
}

export default OnePost;



const Wrapper =  styled.div`
    background-color:  white;
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

const BottomIcon = styled.div`
    padding-left: 20px;
    display: flex;
`
