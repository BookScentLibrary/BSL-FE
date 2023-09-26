import React, { useState } from "react";
import styled from "styled-components";

const StyledItemBoxDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
`;

const ReviewListPage = () => {
  const [post, setPost] = useState({
    id: "",
    title: "",
    content: "",
  }); //상태를 가질거임

  const [posts, setPosts] = useState([
    //이 페이지가 호출이 되면 뜰 최초 데이터를 만들어주자
    { id: 1, title: "제목1", content: "내용1" },
    { id: 2, title: "제목2", content: "내용2" },
    { id: 3, title: "제목3", content: "내용3" },
    { id: 4, title: "제목4", content: "내용4" },
    { id: 5, title: "제목5", content: "내용5" },
  ]);

  // const handleChangeTitle =(e)=>{
  //   console.log(e.target.value);
  //   setPost({title: e.target.value});
  // };
  // const handleChangeContent =(e)=>{
  //   console.log(e.target.value);
  //   setPost({content: e.target.value});
  // };//그런데 이런 방법은 input개수만큼 함수를 만들어줘야하기 때문에 매우 번거롭

  const handleForm = (e) => {
    //그래서 함수를 하나 만들어주고 그 함수를 title과 content input onChange에 둘다 적용
    //그러고 나서 각각 input에 name추가해줌
    console.log(e.target.name);
    console.log(e.target.value);

    setPost({ [e.target.name]: e.target.value });
    //어떨때는 컨텐트가 어떨때는 타이틀이 들어와야함 그걸 동적으로 키값을 바꿔줘야함
    //[e.target.name] : computed properties names(키값동적할당) => 대괄호로 감싸면 얘가 key값으로 할당이됨
    //변수를 동적으로 만들어줌 자바스크립트 문법임
    //key값에 변수로 값을 넣어줄수있음
    //let a = "name"; 이라고 하고 ({[a] : e.target.value}) 이렇게 하면
    //key 값이 name이 되는것
    console.log(post.title);
    console.log(post.content);
  };

  const handleWrite = () => {
    /* ReviewListPage의 setPosts에 무엇을 담아야할까 */

    setPosts([...posts, post]);

    const handleWrite = async (e) => {
      e.preventDefault();
      const data = {
        postTitle: post.postTitle,
        content: post.content,
        email: user.email,
        nickname: user.nickname,
        gender: user.gender,
        phone: user.phone,
        userBirth: user.userBirth,
        userAge: user.userAge,
      };
      dispatch(signupApi(data));

      console.log(user.userAge);
     
      try {
        const response = await axios.post(
          "http://localhost:8080/user/signup",
          data
        );
        API 요청이 성공하면 Redux의 signupApi 액션을 호출
        성공 처리
        console.log("회원가입 성공:", response.data);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          const errorData = error.response.data;
          setErrorMessage({
            ...errorMessage,
            ...errorData,
          });
        } else {
          console.error("알 수 없는 오류:", error);
        }
      }
    };


    // let post = { id: 6, title: "인풋값" }; //이 값을 setPosts()안에 집어넣어야함
  };

  return (
    <div>
      <h1>리뷰게시판</h1>
      <form onSubmit={handleWrite}>
        <input
          type="text"
          placeholder="제목을 여기에 작성"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 여기에 작성"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        {/* input에 적은 값을 캐치하려면  input태그에 접근해야함
        접근해서 값을 가져와야함 => input의 상태를 달아놓으면 됨
        버튼이 클릭될때 두개의 input 값을 들고 handleWrite에서 처리해야하니까
        여기서 value 값은 상태값
        value={post.title}, value={post.content} 이렇게까지 했을 때 인풋에 아예 입력이 안됨
        */}
        <button type="button">
          리뷰등록
        </button>
        {/* 글쓰기버튼을 누르면 ReviewListPage의
         const [posts, setPosts] 상태값에 접근해서 값을 넣으려고함  : 불가능
         굳이 하려면 방법이 있긴함 상태를 App.js가 가지고있으면됨
          <Route path="/" exact={true} component={ReviewListPage} />에서
          <Route path="/" exact={true} component={() => ReviewListPage()} />바꿔서
          상태를 전달하면됨
         */}
      </form>
      <hr />
      {/* 원래는 api에서 다운받아서 뿌려줘야함 */}
      {posts.map((post) => (
        <StyledItemBoxDiv>
          {/* 간단한 네모박스를 리턴 */}
          <div>번호 : {post.id} / 제목 : {post.title} / 내용 : {post.content}</div>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ReviewListPage;