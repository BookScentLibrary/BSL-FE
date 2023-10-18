import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 20px 0;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: ${({margin}) => margin==="none"? 0 : "24px"};
`;

export const Route = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  width: 100%;
  max-width: 924px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkgray};
  border-top: 2px solid #000;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

export const BookInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  padding: 60px 24px;

  width: 100%;
  max-width: 876px;
  height: fit-content;
`;

export const BookImg = styled.div`
  width: 160px;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.gray100};
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
`;

export const Buttons = styled.div`
  position: relative;

  & > div:first-child {
    position: absolute;
    bottom: 56px;
    right: 0;
  }

  & > div:last-child {
    position: absolute;
    bottom: 0px;
    right: 0;
  }
`;

export const LibraryInfoContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  border-left: none;
  border-right: none;
`;

export const Description = styled.div`
  padding: 40px 0;
  width: 100%;
  height: fit-content;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

export const ReviewContainer = styled.div`
`;
