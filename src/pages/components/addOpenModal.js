import { faker } from '@faker-js/faker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { styled } from 'styled-components';
// import { faPen, faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
// 아이콘 가져오기

const AddOpenModal = ({setContentList, setIsOpenAddModal}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const onAddWrite = (e) => {
        e.preventDefault();
        const title = e.target.title;
        const content = e.target.content;
        setContentList((prev) => [{
            Post_img: [],
            // createdAt부분이 toString이 떠서 mockPost부분 그대로 복사 했음!
            createdAt : faker.date.between( //post 작성시간
            "2023-01-01T00:00:00.000Z",
            "2023-01-31T00:00:00.000Z"
            ),
        User: {
            nickName: "X",
            profileImg: null,
            },
                title,
                content,
                myPost: true,
        },
        ...prev,
        ]);
        setIsOpenAddModal(false);
        setTitle('');
        setContent('');
        console.log(title, content)
    }

return (
    <Wrapper>
            {/* <header>
                <h1>게시글 작성</h1>
                <button>x</button>
            </header> */}
                {/* 나중에 밑에 선그을 것 ------ */}
            <Form onSubmit={onAddWrite}>
                <FormHeader>
                    <h1>게시글 작성</h1>
                    <button style={{width:'30px', height:'30px'}}>x</button>
                </FormHeader>
                <p><input value={title} placeholder="제목을 입력해주세요" onChange={(e) => setTitle(e.target.value)}></input></p>
                <p><textarea value={content} placeholder="내용을 입력해주세요" onChange={(e) => setContent(e.target.value)}></textarea></p>
                <button>사진 추가하기</button>
                <button>작성</button> 
                {/* Button component써야함 */}
            </Form>
    </Wrapper>
    )
}

export default AddOpenModal;

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
`;


const FormHeader = styled.div`
    display: flex;
`

const Form = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 32px;
    /* display: flex; */
    /* justify-content: center;
    align-items: center;
    flex-direction: column; */
`;