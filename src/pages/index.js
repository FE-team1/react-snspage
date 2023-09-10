import { useState } from "react";
import AddOpenModal from "./components/addOpenModal";
import { MockPosts } from "../__mock__/mockPost";
import ToyButton from "../components/Button";
import { styled } from "styled-components";
import OnePost from "./components/onePost";
import { useNavigate } from 'react-router-dom'
// npm i faker와 shortid를 안해서 오류가 났다.
// 또 에러나서 npm install @faker-js/faker --save-dev 로 해결!
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen, faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
// 문제: console창 켰을때 전체적으로 밀리는 문제, 추가시 이상하게 나옴

const SnsPage = () => {
    // const navigate = useNavigate();

    // const navigateToLogin = () => {
    //     useNavigate("/login")
    // }
    // 모달창들어가니까 작성하는 모달창이 떴는지 확인하기위해 True로세팅;
    // 화면이 바껴야하므로 Modal관련은 상태를 쓴다
    const [isOpenAddModal, setIsOpenAddModal] = useState(false);
    // bool나타내는 변수앞에 is붙여주기
    // component는 한 가지이상의 기능을 하는 UI를 합치는 것
    // title photo content가 계속 반복된다 반복되는 UI -> 컴포넌트화 시키기
    // 데이터가 추가되도록 해야한다.
    // 목포스트 불러오기 상태로 불러온다!
    const [contentList, setContentList] = useState(MockPosts(10));
    console.log(contentList)
    // 맵돌려서 여러개 뜨게..?


    return (
        <>  
            {/* 모달을 넣어야지 */}
            {/* create로직 */}
            {/* 중괄호있으면 변<수를 쓸 수 있다. */}
            {/* AddOpenModal을 컴포넌트화 시킨다~ */}
            {isOpenAddModal && <AddOpenModal setContentList={setContentList} contentList={contentList} setIsOpenAddModal={setIsOpenAddModal}/>}
            {/* div를 일단 다 만들어 놓는다 className으로 했다... 나중에 styledComponent하려고 Logo이렇게 만들었다가 오류가났다 */}
            <Wrapper>
                <userInfo>
                    <div>
                        {/* img src로 바꿔야함 */}
                    {/* 이부분을 그냥 따로 사진과 닉네임을 가져와야 할지 고민.. 
                    목데이터를 가져오니 create과정에서 충돌이 일어난다 */}
                    {/* {contentList.map((list) => 
                    <>
                        <ProfileImg src={list.User.profileImg}></ProfileImg>
                        <ProfileBox>
                            <User>{list.User.nickName}</User>
                            <button>로그아웃</button>
                        </ProfileBox>
                    </>
                        )} */}
                        {/* 독립적으로 가져오기 */}
                        {/* 왜 이미지 안뜨는가 */}
                        {/* 퍼블릭 폴더에 넣어서해결~ */}
                        <ProfileImg src="/img/IMG_8961.JPG"></ProfileImg>
                        <ProfileBox>
                            <User>김땡땡</User>
                            {/* onClick */}
                            <button >로그아웃</button>
                        </ProfileBox>
                    </div>
                </userInfo>
                <Button>
                    <ToyButton onClick={() => {
                        setIsOpenAddModal(true);
                    }}>작성</ToyButton>
                </Button>
                
            </Wrapper>
            {contentList.map((list) => (<OnePost list={list} contentList={contentList} setContentList={setContentList}/>))}
            {/* 목데이터 필요한 부분 -> 반복되는 UI처리해야한다 */}
            {/* list는 목데이터 값 */}
            
        </>
    )
}

export default SnsPage;

const Wrapper = styled.div`
    position: fixed;
    background: white;
    width : 340px;
    height: 240px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
`

const ProfileImg = styled.img`
    width: 150px;
    height: 150px; 
    border-radius: 70%;
    overflow: hidden;
    float: left;
    margin: 10px 40px 10px 10px;
`

const ProfileBox = styled.div`
    padding-top: 50px;
`

const User  = styled.p`
    font-size: 1.4rem;
    padding-bottom: 18px;
`

const Button = styled.div `
    position: relative;
    top: 10px;
    left: 50px;
`

const Layout = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
`

