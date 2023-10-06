const InfiniteScroll = (props) => {
  const { children, page, callback, isLoading, totalPage } = props;

  const [target, setTarget] = React.useState(null);

  React.useEffect(() => {
    //특정 종속성에 대한 관찰실시.
    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 0.7 });
      observer.observe(target);
      // Intersection Observer의 콜백 함수는 화면에 나타남 여부를 감지.
      //따라서 콜백 함수는 요소의 상태 변화를 감지하고 대응하기 위해 호출되어야 함
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <React.Fragment>
      {children}
      {totalPage - 1 > page ? <Box ref={setTarget}> </Box> : null}
      {isLoading ? (
        <Grid margin="auto">
          <Spinner />
        </Grid>
      ) : null}
    </React.Fragment>
  );
};

const Box = styled.div`
  width: 100%;
  height: 20px;
`;

