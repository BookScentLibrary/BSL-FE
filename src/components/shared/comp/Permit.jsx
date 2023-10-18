import React from "react";
import { ReactComponent as FaceIcon } from "../../../asset/icons/f/face.svg";
import styled from "styled-components";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";

const Permit = (props) => {
  const is_login = sessionStorage.getItem("token") ? true : false;
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/signin");
  };

  const goToMain = () => {
    navigate("/");
  };

  if (props.element && !is_login) {
    return null;
  }
  if (props.element) {
    <React.Fragment>{props.children}</React.Fragment>;
  }
  if (!is_login) {
    return (
      <Container>
        <FaceIcon width="100px" height="100px" />
        <div class="text">
          <Text>로그인이 필요한</Text>
          <Text>서비스입니다</Text>
        </div>
        <div>
          <Button type="middle" width="180px" onClick={goToLogin}>
            로그인 하러 가기
          </Button>
        </div>
        <div>
          <Button type="middle" width="180px" color="gray" onClick={goToMain}>
            도서관 홈으로
          </Button>
        </div>
      </Container>
    );
  }
  return <React.Fragment>{props.children}</React.Fragment>;
};

const Container = styled.div`
  width: 400px;
  height: 60vh;
  text-align: center;
  margin: auto;
  & > div {
    margin: 8px 0;
  }
  & > .text {
    margin: 0 0 32px 0;
  }
`;

const Text = styled.p`
  margin: 8px 0;
  font-size: 32px;
  font-weight: 800;
`;

export default Permit;
