import React from "react";
import styled from "styled-components";
import { ReactComponent as RadioCheck } from "../../../asset/icons/radio_check.svg";
import { ReactComponent as RadioUnCheck } from "../../../asset/icons/radio_uncheck.svg";

const Radio = (props) => {
  const { check, checkhandler } = props;

  return (
    <Container>
      {check === 1 ? (
        <RadioCheck
          onClick={() => checkhandler(0)}
          width="32px"
          height="32px"
          fill="#A1E092"
        />
      ) : (
        <RadioUnCheck onClick={() => checkhandler(1)} width="32px" height="32px" />
      )}
    </Container>
  );
};

const Container = styled.div``;
export default Radio;
