import React from "react";
import styled from "styled-components";
import Grid from "./Grid";



const InfiniteScroll = (props) => {
  const { children, page, callback, isLoading, totalPage } = props;

  const [target, setTarget] = React.useState(null);

  React.useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 0.7 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <React.Fragment>
      {children}
      {totalPage - 1 > page ? <Box ref={setTarget}> </Box> : null}
      {isLoading ? (
        <Grid margin="auto">
          
        </Grid>
      ) : null}
    </React.Fragment>
  );
};

const Box = styled.div`
  width: 100%;
  height: 20px;
`;




export default InfiniteScroll;

