import '@fortawesome/fontawesome-free/js/all.js'
import {faPen, faBan, faCheck} from '@fortawesome/fontawesome-free/js/all.js'
import styled from "styled-components";

const OneAdd = () => {
    // 부모에게서 props 전달받아서 사용
    // setList([
    //     {
    //         title,
    //         content,
    //         state: false,
    //     },
    //     ...list,
    // ])
    return (
        <>
        {/* oneAdd에 들어갈내용 */}
        <wrapper>
            <logo></logo>
            {/* 목데이터 필요한 부분 -> 반복되는 UI처리해야한다 */}
            {/* list는 목데이터 값 */}
            {/* {contentList.map((list) => (oneAdd list={list})) */}
            <content>
                <div>
                    <div className="ProfileImg">img</div>
                    <div className="Nickname">nickname</div>
                    <div className="Date">date</div>
                </div>
                <div>
                    <div className="title">title</div>
                    <div className="Photo">photo</div>
                    <div className="Content">content</div>
                </div>
                {/* 여기까지 */}
                <div>
                    <div className="HeartIcon">hearticon</div>
                    <div className="commentIcon">commneticon</div>
                </div>
            </content>
        </wrapper>
        </>
    )
}

export default OneAdd;

