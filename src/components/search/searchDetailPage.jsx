const SearchDetailPage = () => {
  return (
    <form>
      <html>
        <head>
          <title>도서 검색 상세 페이지</title>
          {/* 폼 정도만 참고하고, 나머지는 리액트 식으로 바꿔야함
  그리구 data.title 이런 부분들도 수정해야 함.  */}
        </head>
        <body>
          <h1>도서 상세</h1>

          <p>제목 : ${} </p>

          <p>저자 : ${}</p>
          <p>발행처 : ${}</p>
          <p>발행년월 : ${}</p>
          <p>청구기호 : ${}</p>
          <p>자료실 : ${}</p>
          <p>형태사항 : ${}</p>
          <p>주제분류 : ${}</p>
          <p>대출상태 : ${}</p>
          <p>대출카운트 : ${}</p>
          <p>isbn: ${}</p>
          <p>상세정보 : ${}</p>

          {/* 예시 */}
          {/* <p>입력일 : <fmt:formatDate value="${data.insert_date}" pattern="yyyy.MM.dd HH:mm:ss" /></p> 
    <p>카테고리 : ${ data.category }</p>*/}

          <p>
            <a href="/list">목록으로</a>
          </p>
        </body>
      </html>
    </form>
  );
};

export default SearchDetailPage;
