import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { styled } from 'styled-components';
import ToyButton from '../../../components/Button';

// import { faPen, faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
// 아이콘 가져오기

const AddPostModal = ({setPosts, posts, setIsAddPostModal}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const onAddPost = (e) => {
        e.preventDefault();
        const newPost = {title, content}
        setPosts((prev) => [{
            Post_img: [],
            // createdAt부분이 toString이 떠서 mockPost부분 그대로 복사 했음!
            createdAt : faker.date.between( //post 작성시간
            "2023-01-01T00:00:00.000Z",
            "2023-01-31T00:00:00.000Z"
            ),
        User: {
            // 고정하기 id:1,
            id: 1,
            nickName: "김땡땡",
            profileImg: '/img/IMG_8961.JPG',
            },
                newPost,
                title,
                content,
                id: Math.floor(Math.random() * 1000000),
                myPost: true,
        },
        ...prev,
        ]);
        setIsAddPostModal(false);
        setTitle('');
        setContent('');
        console.log(title, content)
    }

return (
    <Wrapper>
                {/* 나중에 밑에 선그을 것 ------ */}
            <Form onSubmit={onAddPost}>
                <FormHeader>
                    <h3>게시글 작성</h3>
                    <button style={{width:'20px', height:'20px', margin: "0px 0px 30px 130px"}} 
                    onClick={() => {
                        setIsAddPostModal(false);
                    }}>X</button>
                </FormHeader>
                <p><input value={title} placeholder="제목을 입력해주세요" onChange={(e) => setTitle(e.target.value)} style={{width: '100%'}}></input></p>
                <p><textarea value={content} placeholder="내용을 입력해주세요" style={{width: '100%', height: '6.5em', resize:'none', display:'flex'}}
                onChange={(e) => setContent(e.target.value)}></textarea></p>
                <p><button style={{margin:'15px 0px'}}>사진 추가하기</button></p>
                <ToyButton> 작성 </ToyButton>
                {/* Button component써야함 */}
            </Form>
    </Wrapper>
    )
}

export default AddPostModal;

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
`;