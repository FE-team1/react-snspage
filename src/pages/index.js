import { useState } from "react";
import OneAdd from "./components/oneAdd";
import AddOpenModal from "./components/addOpenModal";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen, faBan, faCheck } from '@fortawesome/free-solid-svg-icons';

const SnsPage = () => {
    // 모달창들어가니까 작성하는 모달창이 떴는지 확인하기위해 True로세팅;
    // 화면이 바껴야하므로 Modal관련은 상태를 쓴다
    const [isOpenAddModal, setIsOpenAddModal] = useState(false);
    // bool나타내는 변수앞에 is붙여주기
    // component는 한 가지이상의 기능을 하는 UI를 합치는 것
    // title photo content가 계속 반복된다 반복되는 UI -> 컴포넌트화 시키기
    // 데이터가 추가되도록 해야한다.
    // 목포스트 불러오기 상태로 불러온다!
    const [contentList, setContentList] = useState(MockPosts);
    console.log(contentList)
    // 맵돌려서 여러개 뜨게..?

    return (
        <>  
            {/* 모달을 넣어야지 */}
            {/* create로직 */}
            {/* 중괄호있으면 변<수를 쓸 수 있다. */}
            {/* AddOpenModal을 컴포넌트화 시킨다~ */}
            {isOpenAddModal && <AddOpenModal setList={setList}/>}
            {/* div를 일단 다 만들어 놓는다 className으로 했다... 나중에 styledComponent하려고 Logo이렇게 만들었다가 오류가났다 */}
            <div className="userInfo">
                <div>
                    {/* img src로 바꿔야함 */}
                    {/* 1. 이부분을 그냥 따로 사진과 닉네임을 가져와야 할지 고민.. 
                    목데이터를 가져오니 create과정에서 충돌이 일어난다 */}
                    {/* 독립적으로 가져오기! */}
                    {contentList.map((list) => 
                    <>
                        <ProfileImg src={list.User.profileImg}></ProfileImg>
                        <ProfileBox>
                            <User>{list.User.nickName}</User>
                            <button>로그아웃</button>
                        </ProfileBox>
                    </>
                        )} */}
                        {/* 독립적으로 가져오기 */}
                        {/* 왜 안뜨는가 */}
                        <ProfileImg src="../img/IMG_8961.JPG"></ProfileImg>
                        <ProfileBox>
                            <User>김이름</User>
                            <button>로그아웃</button>
                        </ProfileBox>
                    </div>
                </userInfo>
                <Button>
                    <ToyButton onClick={() => {
                        setIsOpenAddModal(true);
                    }}>작성</ToyButton>
                </Button>
            </Wrapper>
            {contentList.map((list) => (<OneAdd list={list}/>))}
            {/* 목데이터 필요한 부분 -> 반복되는 UI처리해야한다 */}
            {/* list는 목데이터 값 */}
        </>
    )
}

export default SnsPage;

const Wrapper = styled.div`
    position: fixed;
    box-sizing: border-box;
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


