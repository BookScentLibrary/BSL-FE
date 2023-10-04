
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React,{useState} from "react";
import { setSearchResults, incrementPage } from '/springMVC_STS/projectSTS4/fe/bsl/src/components/search/action';
import Grid from "./Grid";
 

//무한 스크롤과 검색 기능 분리하기 


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

const SearchMain = () => {
 
    const[searchTerm, setSearchTerm] = useState(""); //검색어의 상태
    const dispatch = useDispatch(); 
    const currentPage = useSelector((state) => state.currentPage);
    const totalPages = useSelector((state) => state.totalPages);
    //searchBooks 액션을 디스패치하여 검색 요청을 서버로 보내고, Redux 상태를 업데이트

    const searchBookForm = () => {
       
        dispatch(searchBooks(searchTerm));
        //searchBooks액션을 사용하려면, Redux에서 사용할 액션과 액션생성자 함수가 필요,
        //이 액션은 서버로 요청을 보내고 응답처리해야함.
    };

    // InfiniteScroll 컴포넌트에 전달할 콜백 함수 정의
  const handleInfiniteScroll = (entries) => {
    const intersection = entries[0];
    if (intersection.isIntersecting && currentPage < totalPages) {
      dispatch(incrementPage());
    // entries 배열에 대한 처리를 수행하는 코드를 작성하세요.
    // 예를 들어, 스크롤이 끝에 도달하면 새로운 데이터를 불러올 수 있도록 액션을 디스패치할 수 있습니다.
  };

  return (
    <div>
    <form>
    <div className='search'>
    <input type='text' name='b_name' placeholder='Enter the name of the book you are looking for.'
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)} //검색어 입력값을 업데이트 
    ></input>
   <input type='button' value='search' onClick={searchBookForm}></input></div>
    </form>
       
        <InfiniteScroll
        page={currentPage}
        callback={handleInfiniteScroll}
        isLoading={isLoading}
        totalPage={totalPages}
      >
        <div className="book-list">
          {books.map((book) => (
          <div key={book.bookNo} className="book-item">
         <img src={book.bookImageUrl} alt={book.bookname} />
        <h3>{book.booknaem}</h3>
        <p>{book.author}</p>
        <p>{book.publisher}</p>
        <p>{book.publicationYear}</p>
        <p>{book.callNum}</p>
        <p>{book.bookStatus}</p>
        <p>{book.rentCnt}</p>
        <p>{book.isbn}</p>


      </div>
    ))}
  </div>
      </InfiniteScroll>

    </div>
  );
};

};

export default SearchMain;




