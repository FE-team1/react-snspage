import { useState } from "react";
import { styled } from "styled-components";
import OnePost from "./components/onePost";
import Paging from "./components/pagination";
import { useNavigate } from "react-router-dom";
import ToyButton from "../../components/Button";
import { MockPosts } from '../../__mock__/mockPost'
import AddPostModal from "./components/addPostModal";
// npm i faker와 shortid를 안해서 오류가 났다.
// 또 에러나서 npm install @faker-js/faker --save-dev 로 해결!
// npm install react-icons --save
// npm i shortid
// 문제: console창 켰을때 전체적으로 밀리는 문제, 추가시 이상하게 나옴

const SnsPage = () => {
    const navigate = useNavigate();

    // onNavigateToLogin~으로 작명다시하기
    const onNavigateToLogin = () => {
        // navigate!
        navigate("/")
    }
    // 모달창들어가니까 작성하는 모달창이 떴는지 확인하기위해 True로세팅;
    // 화면이 바껴야하므로 Modal관련은 상태를 쓴다
    const [isAddPostModal, setIsAddPostModal] = useState(false);
    // bool나타내는 변수앞에 is붙여주기
    // component는 한 가지이상의 기능을 하는 UI를 합치는 것
    // title photo content가 계속 반복된다 반복되는 UI -> 컴포넌트화 시키기
    // 데이터가 추가되도록 해야한다.

    // 목포스트 불러오기 상태로 불러온다!
    // posts, setPosts
    const [posts, setPosts] = useState(MockPosts(10));
    // 맵돌려서 여러개 뜨게..?


    return (
        <>  
            {/* 모달을 넣어야지 */}
            {/* create로직 */}
            {/* 중괄호있으면 변수를 쓸 수 있다. */}
            {/* AddOpenModal을 컴포넌트화 시킨다~ */}
            {/* 이름 수정 AddPostModal */}
            {isAddPostModal && <AddPostModal setPosts={setPosts} posts={posts} setIsAddPostModal={setIsAddPostModal}/>}
            {/* div를 일단 다 만들어 놓는다 className으로 했다... 나중에 styledComponent하려고 Logo이렇게 만들었다가 오류가났다 */}
            <Wrapper>
                <div>
                    {/* img src로 바꿔야함 */}
                {/* 이부분을 그냥 따로 사진과 닉네임을 가져와야 할지 고민.. 
                목데이터를 가져오니 create과정에서 충돌이 일어난다 */}
                    {/* 독립적으로 가져오기 */}
                    {/* 왜 이미지 안뜨는가 */}
                    {/* 퍼블릭 폴더에 넣어서해결~ */}
                    <ProfileImg src="/img/IMG_8961.JPG"></ProfileImg>
                    <ProfileBox>
                        <User>김땡땡</User>
                        {/* 로그인 페이지로 이ㅇ */}
                        <button onClick={onNavigateToLogin}>로그아웃</button>
                    </ProfileBox>
                </div>
                {/* 이름 container나 buttonwrapper로 이름명시! */}
                <ButtonWrapper>
                    {/* 공용컴포넌트 이름도 명시하기 제대로!! => 그냥 다 지우기 style 바로 입히기*/}
                    <ToyButton onClick={() => {
                        // 이부분도 이벤트로 할 수 있음!!
                        setIsAddPostModal(true);
                    }}>작성</ToyButton>
                </ButtonWrapper>
            </Wrapper>
            {/* 렌더링시 map 오류관련 해결중 .. 반복 실행시 undefined*/}
            {/* 이름 post={posts} posts && posts.map((map)=> post={post}) */}
            {posts && posts.map((post) => (<OnePost post={post} posts={posts} setPosts={setPosts}/>))}
            {/* 목데이터 필요한 부분 -> 반복되는 UI처리해야한다 */}
            {/* list는 목데이터 값 */}

            {/* Layout을 페이지네이션.js에다가 다시달기 */}
            <Layout >
				<Paging  />
		    </Layout>
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

const ButtonWrapper = styled.div `
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



