import styled from "styled-components";

export const StyledWord = styled.div`
  text-align: left;
  margin-left: 20px;
`;

export const ParentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;

export const InfoText = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

export const YearSelectContainer = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const YearSelect = styled.select`
  width: 70px;
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
`;

export const YearSelectArrow = styled.div`
  position: absolute;
  top: 50%;
  color: gray;
  right: 5px;
  transform: translateY(-50%);
`;

export const Image = styled.div`
  width: 230px;
  height: 330px;
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const StyledList = styled.li`
  width: 33%;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  list-style-type: none;
`;

export const DateBadge = styled.div`
  background-color: limegreen;
  color: #fff;
  padding: 5px;
  position: absolute;
  top: 10px;
  left: 20px;
  z-index: 1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const PostTitle = styled.div`
  white-space: pre-wrap;
  font-size: 20px;
  width: 230px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
`;
