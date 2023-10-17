import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProgramListAPI } from "../../core/redux/postSlice";
import { useNavigate,Link } from "react-router-dom";
import Button from "../../components/shared/elements/Button";
import poster from "../../asset/images/poster.png"


const ReviewListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 아래의 useEffect 훅이 1회 실행되어 리덕스로 요청 전달 후,
  // 리덕스에서 응답을 제대로 받았을 경우 리듀서를 통해 해당 데이터를
  // state의 program에 저장합니다.
  // useSelector는 상태관리툴을 통해 state로 저장된 데이터를 가져올 때 사용하는 훅입니다.
  // 지금은 program 데이터가 필요하기 때문에 postReducer에서 저장한 program을 가져오기 위해
  // state.post.program 경로에서 데이터를 가져오는 것입니다.
  const list = useSelector((state) => state.post.program);

  // 해당 페이지 렌더링시 실행되는 훅입니다.
  // 뒤의 [] 빈 배열은 의존성 배열로, 해당 배열에 넣은 변수값이 변경될때마다 훅이 재실행됩니다.
  // 의존성 배열에 아무런 값을 넣지 않았기 때문에 해당 훅은 최초 렌더링 1회시 한 번 실행되고, 이후 실행되지 않습니다.
  React.useEffect(() => {
    // redux의 미들웨어로 프로그램 리스트를 받아오기 위한 요청을 보냅니다.
    dispatch(getProgramListAPI());
  }, []);

  return (
    <div>
    <h1>프로그램 안내</h1>
    <hr />
    <div
      style={{ backgroundColor: "#F2F2F2", width: "1000px", height: "100px" }}
    >
      <h3 style={{ transform: "translate(0, 120%)",marginLeft:"30px"}}>
      프랑스어 체험 아뜰리에 (만 6~8세) {/* {item.title} 과 {item.target} */}
      </h3>
      <p style={{transform: "translate(0, 70%)",marginLeft:"30px", fontSize:"13px",color:"#BDBDBD"}}>
        2023.09.03 19:20
      </p>
  </div>
  <div style={{position:"relative", left:"900px",top:"5px"}}>
    <td>
  <Button type="small" width="50px">
          수정
  </Button>
    </td>
    <td>
  <Button type="small" width="50px" marginLeft="10px" color="gray">
          삭제
  </Button>
  </td>
  </div>
  <br />
    <div style={{width:"1000px", height:"500px", border:"solid 1px"}}>
      <div style={{width:"40%", height:"500px", border:"solid 1px",display:"flex"}}>
        <Img src={poster} width="300px" height="400px" margin="20px"/>
      </div>
      <div style={{width:"50%", height:"400px", border:"solid 1px",position:"relative",bottom:"450px",left:"430px", display:"flex"}}>
        <th style={{border:"solid 1px", width:"300x"}}>
        <td style={{border:"solid 1px", width:"50x"}}><label style={{width:"250x"}}>대상</label></td>
        </th>
      </div>
    </div>
  </div>
  );
};


export default ReviewListPage;

const H3 = styled.h3`
  transform: translate(0, 1203%);
  margin-left:30px;

`;

const Img = styled.img`
  transform: translate(0, 12%);
  margin-left:50px;


`;