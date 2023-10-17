import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;

  &.open {
    display: block;
  }
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 80%;
  padding: 30px;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 1001;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 80%;
    height: 70%;
    padding: 20px;
  }
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

export const BookInfoHeader = styled.h3`
  margin: 5px;
  margin-bottom: 20px;
  font-weight: "800"
  font-size: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const BookItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
  justify-content: space-between;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #ccc;
    position: absolute;
    bottom: -10px;
    left: 0;
    border-top: 1px solid;
  }
`;

export const BookInfoText = styled.p`
  margin: 4px 10px;
  font-size: 14px;
`;
export const Image = styled.div`
  width: 180px;
  height: 280px;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const ScrollContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;
