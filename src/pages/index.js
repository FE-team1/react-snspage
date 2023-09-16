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
    const [list, setList] = useState([
        {
            title: "example-title",
            content: "example-content",
            state: false,
        },
        {
            title: "example-title2",
            content: "example-content2",
            state: false,
        },
    ])

    

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
                    <div className="profileImg"></div>
                    <div className="nickName">user</div>
                    <button>로그아웃</button>
                </div>
                <button onClick={() => {
                    setIsOpenAddModal(true);
                }}>작성</button>
            </div>
            {/* {contentList.map((list) => (oneAdd list={list})) */}
            <OneAdd></OneAdd>
            {/* 목데이터 필요한 부분 -> 반복되는 UI처리해야한다 */}
            {/* list는 목데이터 값 */}
        </>
    )
}

export default SnsPage;

