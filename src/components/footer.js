import styled from "styled-components";
import { flexCenter } from "../styles/common.style";

const Footer = () => {
  const Lang = ["한국어", "English (US)", "Tiếng Việt", "Bahasa Indonesia", "ภาษาไทย", "Español", "中文(简体)", "日本語", "Português (Brasil)", "Français (France)", "Deutsch"];
  const About = [
    "가입하기",
    "로그인",
    "Messenger",
    "Facebook Lite",
    "동영상",
    "장소",
    "게임",
    "Marketplace",
    "Meta Pay",
    "Meta 스토어",
    "Meta Quest",
    "Instagram",
    "Threads",
    "기부 캠페인",
    "서비스",
    "투표 정보 센터",
    "개인정보처리방침",
    "개인정보 보호 센터",
    "그룹",
    "정보",
    "광고 만들기",
    "페이지 만들기",
    "개발자",
    "채용 정보",
    "쿠키",
    "AdChoices",
    "이용 약관",
    "고객 센터",
    "연락처 업로드 및 비사용자",
  ];

  return (
    <div>
      <S.FooterBox>
        <S.FooterUl>
          {Lang.map((list) => (
            <S.FooterLi>{list}</S.FooterLi>
          ))}
          <button>+</button>
        </S.FooterUl>
        <ul>
          {About.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </S.FooterBox>
    </div>
  );
};

export default Footer;

const FooterBox = styled.div`
  ${flexCenter}
  flex-direction: column;
`;

const FooterUl = styled.ul`
  ${flexCenter}
  list-style: none;
  & > * {
    padding: 5px;
    cursor: pointer;
  }
`;

const FooterLi = styled.li`
  :hover {
    text-decoration: underline;
  }
  size: 150px;
`;

const S = {
  FooterBox,
  FooterUl,
  FooterLi,
};
