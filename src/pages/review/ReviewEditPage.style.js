import styled from "styled-components";

export const RateContainer = styled.div`

`;

export const RateText = styled.div`

`;

const StarContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 40px;
`;

export const ReviewContainer = styled.div`

`;

export const BookContent = styled.div`
 padding:20px;
`;


export const Image = styled.div`
  width: 230px;
  height: 330px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
  margin: 20px;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 10px;
  margin-top: 10px;
`;

export const BookInfoHeader = styled.h2`
  margin: 5px;
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 20px;
`;

export const BookInfoText = styled.p`
  margin: 4px 0;
  font-size: 18px;
`;

export const Textarea = styled.textarea`
   padding: 40px;
  border: 1px solid gray;
  border-radius: 6px;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 1000px;
  width:1060px;
`;

export const ButtonWrapper = styled.div`
  margin: 10px;
  justify-content: center;
`;

export const CenteredButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;






