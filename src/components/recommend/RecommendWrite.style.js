import styled from "styled-components";

export const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
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

export const RoundedDashedBorder = styled.div`
  border: 1px dashed gray;
  width: 1215px;
  height: 400px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  font-weight: "800";
  font-size: 20px;
`;

export const BookInfoText = styled.p`
  margin: 4px 0;
  font-size: 18px;
`;

export const Textarea = styled.textarea`
  width: 1208px;
  padding: 16px;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 800px;
`;

export const ButtonWrapper = styled.div`
  margin: 10px;
`;
