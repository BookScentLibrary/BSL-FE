import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 1232px;
  height: 98px;
  font-size: 16px;
  font-weight: 600;
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;

  cursor: pointer;

  & > p {
    letter-spacing: 4px;
    font-weight: 800;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  width: 544px;
  justify-content: center;
  & > p {
    cursor: pointer;
    width: fit-content;
    margin: 0 56px;
  }

  & > .header_menu__mypage {
  }
`;

export const UserWrapper = styled.div`
  cursor: pointer;
  width: 200px;
  text-align: right;
  display: flex;
  align-items: center;

  & > .header_user__nickname {
    margin: 0 4px;
    cursor: none;
    & > span {
      font-weight: 800;
    }
  }

  & > .header_user__logout {
    font-size: 14px;
  }
`;
