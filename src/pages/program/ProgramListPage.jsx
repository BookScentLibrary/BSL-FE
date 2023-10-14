import React, { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Search from "./Search";
import axios from "axios";
import { getProgramListAPI } from "../../core/redux/postSlice";



const ProgramListPage = () => {

  const pro_postId = <match className="params pro_postId"></match>;
  console.log('pro_postId :: ', pro_postId)

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProgramListAPI());
  })

// 데이터를 호출해 오는 동안 대기할 수 있도록 async, await 사용
  // useEffect(async() => {
  //     try{
  //       // '/api/BoardContent' 라는 uri 로 DB를 불러온다.
  //         const res = await axios.get('http://localhost:8080/news/programList', {
  //           // param 으로 idx 값을 넘겨준다.
  //             params: {
  //                 'pro_postId': pro_postId
  //             }
  //         })
  //     } catch(e) {
  //         console.error(e.message)
  //     }
  // },[])

  const [programList, setProgramList] = useState([]);

  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("all");

  const getProgramList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/news/programList'); 
      console.log(response.data);
      setProgramList(response.data); 
    } catch (error) {
      console.error('ERROR', error);
    }
  }


  useEffect(() => {
    getProgramList();
  }, []);

const useFetch = () => {
  
  const [data, setData] = useState([]);
  
  async function fetchUrl() {
    const response = await fetch("/listupProgram");
    const json = await response.json();

    setData(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return data;
}
const SelectData = ["전체검색", "제목"];
const [programData, setProgramData] = React.useState(0);
const [searchProgram, setSearchProgram] =React.useState(null);
const [imgFile, setImgFile] = useState("");
const onClickSearch = () => {
  　console.log("확정된 검색어 : " + searchProgram);
  };
const data = useFetch("/listupProgram");
return (
    <div>
    <h1>프로그램 안내</h1><br/>
    <hr/><br/>
    <h3>책향기 도서관의 다양한 프로그램을 만나보세요</h3>
    <hr/><br/>
    
    <Search/>
    <hr/>

    
    {programList.map((post_program, index) => (
            
            <button onclick="/ProgramForm" key={index} style={{ display: "flex" }}>
          <Image src={post_program.postImageURL} />
          <div>
            <div>{post_program.postTitle}</div> <div>({post_program.target})</div>
            <p>접수기간</p>
            <div>{post_program.startDate}</div>{post_program.endDate}</div>
          </button>
        
           ))}
 </div>
    
  );
};



const Image = styled.div`
  width: 200px;
  height: 320px;d
  flex-shrink: 0;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
`;



export default ProgramListPage;