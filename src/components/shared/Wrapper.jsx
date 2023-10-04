import styled from "styled-components";

const Wrapper = (props) => {
  const { children } = props;
  return (
    <Wrap>
      <InnerWrapper>
        {children}
      </InnerWrapper>
    </Wrap>
  );
};

export default Wrapper;

const Wrap = styled.div`
  width: 100%;
  min-width: 1232px;
  height: 100%;
  margin: 60px auto;
  padding-bottom: 280px;
  position: relative;
  @media ${({ theme }) => theme.device.web} {
    width: 100%;
  }
`;

const InnerWrapper = styled.div`
  background-color: #fff;
  width: 1232px;
  min-width: 1200px;
  margin: auto;
  padding: 0 30px 120px 30px;
  z-index: 100;
  height: 100%;
`;

