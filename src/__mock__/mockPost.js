import { fakerKO as faker } from "@faker-js/faker";
import shortId from "shortid";
// 더미데이터 생성 faker.js/ id랜덤하게 만들어주는 유용한 라이브러리 shortid


export const MockPosts = (count) =>
  Array(count)
    .fill()
    .map(() => ({
      id: shortId.generate(), // 게시글의 id
      title: faker.lorem.sentence(), // 제목
      content: faker.lorem.paragraph(), // 내용
      User: {
        // 작성자
        id: shortId.generate(),
        nickName: faker.person.firstName(),
        profileImg: faker.image.url(), // User.profileImg
      },
      Post_img: Array(Math.floor(Math.random() * 2) + 1)  // 배열 이미지 갯수 설정
        .fill()
        .map(() => faker.image.url()), // 게시글 이미지
      Comments: Array(Math.floor(Math.random() * 3) + 1) // 댓글 갯수 설정
        .fill()
        .map(() => {
          return {
            id: shortId.generate(), // 댓글 id
            content: faker.lorem.sentence(), // 댓글 내용
            User: {
              // 댓글 작성자
              id: shortId.generate(),
              nickName: faker.person.firstName(),
              profileImg: faker.image.url(),
            },
            myComment: false, // 내 댓글이 맞는지
            createdAt: faker.date.between(
              // 작성일
              "2023-01-01T00:00:00.000Z",
              "2023-01-31T00:00:00.000Z"
            ),
          };
        }),
      createdAt: faker.date.between(
        "2023-01-01T00:00:00.000Z",
        "2023-01-31T00:00:00.000Z"
      ),
      myPost: false,
    }));
