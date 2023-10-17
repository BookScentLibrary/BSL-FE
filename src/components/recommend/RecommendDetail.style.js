import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 12px 0;
  vertical-align: middle;
`;

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

export const BoldSolidHr = styled.hr`
  border: 1px solid black;
`;
