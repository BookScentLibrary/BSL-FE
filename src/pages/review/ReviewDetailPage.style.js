import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 12px 0;
  vertical-align: middle;
`;

export const StyledWord = styled.div`
  text-align: left;
  border-bottom: 2px solid black;
  margin-bottom: 20px;
`;

export const Image = styled.div`
  width: 230px;
  height: 330px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
  border-radius: 5px;
`;

export const ButtonStyle = styled.button`
  background: none;
  border: none;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

export const CenteredText = styled.span`
  display: inline-block;
  text-align: center;
  width: 100%;
`;

export const NoneIndex = styled.div`
  background: none;
  border: none;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-weight: normal;
  font-size: 14px;
`;

export const TitleContaienr = styled.div`
  flex: 1;

  p {
    color: #b8b8bd;
    font-size: 15px;
  }

  h3 {
    margin-bottom: none;
  }
`;

export const ContainerDiv = styled.div`
  background: #f0f0f0;
  border-top: 2px solid #dfdfdf;
  border-bottom: 2px solid #dfdfdf;
  display: flex;
  height: 100px;
  align-items: center; /* 세로 중앙 정렬을 위해 추가 */
  padding: 0 20px;
`;

export const StarContainer = styled.div`
  display: flex;
  height: 26px; /* 높이를 조절하여 요소가 화면에 보이게 함 */
  position: relative;
  width: 80px;
`;

export const StarBox = styled.label`
  position: relative;
  width: 16px; /* Reduce the width to make the icons smaller */
  height: 32px; /* Adjust the height accordingly */

  input {
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    position: absolute !important;
  }

  .startRadio__img {
    display: block;
    position: absolute;
    right: 0;
    width: 15px; /* Adjust the width of the icons */
    height: 32px; /* Adjust the height of the icons */
    pointer-events: none;
  }

  .active {
    fill: #a1e092;
  }
`;

export const Nickname = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px 10px;

  span {
    font-size: 15px;
  }
`;

export const Content = styled.div`
  font-weight: normal;
`;

export const BookContent = styled.div`
  flex: 2;
 

  span {
    font-weight: 800;
    margin-left: 5px;
    display:inline-block;
    width:70px;
  }
`;

export const BookContentContianer = styled.div`
  display:flex;
  align-items:flex-start;
  border:1px solid #ccc;
  border-radius:10px;
  padding:20px;
  position: relative;
`;

export const ButtonContainer = styled.div`
position: absolute;
bottom: 20px;
`;
