import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 0;
  width: 100%;
  display: flex;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray}`};
`;

export const RentDistrib = styled.div`
  width: 50%;
  padding: 8px 0 20px 0;
  border-right: ${({ theme }) => `2px solid ${theme.colors.gray100}`};
`;

export const RatingDistrib = styled.div`
  width: 50%;
`;

export const SubTitle = styled.div`
  margin: 0 auto 24px auto;
  width: fit-content;
  font-size: 20px;
  font-weight: 700;
`;

export const DistGraphContainer = styled.div`
  margin: auto;
  display: grid;
  gap: 8px;
  width: fit-content;
  & > .gender_title {
    width: 88%;
    margin: auto;
    display: flex;
    justify-content: space-around;
  }
`;

export const DistGraphSection = styled.div`
  display: flex;
  align-items: center;
  & > p {
    width: 40px;
    text-align: right;
  }

  & > .age {
    width: 50px;
    text-align: center;
    margin: 0 4px 0 6px;
  }

  & > .f {
    text-align: left;
  }
`;

export const RateGraphContainer = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 8px;
  width: fit-content;
`;

export const Average = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
  & > p {
    font-size: 20px;
    font-weight: 700;
    margin-left: 8px;
  }
`;

export const RateGraphSection = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 12px;
  & > div {
    margin-left: 12px;
  }
`;
