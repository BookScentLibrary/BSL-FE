import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import React, { useState } from "react";
import { searchBookAPI } from "../../core/redux/bookSlice.jsx";
import { ReactComponent as Spinner } from "../../asset/images/spinner.svg";
import Grid from "../../components/search/Grid.jsx";
import SearchBar from "./component/Searchbar.jsx";

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

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(""); //검색어의 상태
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);

  const searchBookForm = () => {
    dispatch(searchBookAPI(searchTerm));
  };

  const SelectData = ["전체검색", "제목"];
  const [programData, setProgramData] = React.useState(0);
  const [searchProgram, setSearchProgram] =React.useState(null);
  const [imgFile, setImgFile] = useState("");
  const onClickSearch = () => {
  　console.log("확정된 검색어 : " + searchProgram);
  };


  const programs = [];
  
    return (
      <div>
          <div className="search">
            <SearchBar inputType="search"
            data={programData}
            optionValue={searchProgram}
            setOptionValue={setSearchProgram}
            onChange={(e)=>{setSearchTerm(e.target.value);}}
            onClick={searchBookForm}></SearchBar>
          
          </div>
        
          <div className="program-list">
            {programs.map((post_program) => (
              <div key={post_program.pro_postId} className="program-item">
                <img src={post_program.postImgUrl} alt={post_program.postTitle} />
                <p>{post_program.postTitle}</p>
                <p>{post_program.startDate}</p>
                <p>{post_program.endDate}</p>
                <p>{post_program.target}</p>
                <p>{post_program.chrage}</p>
                <p>{post_program.extraGuests}</p>
                <p>{post_program.programStatus}</p>
                <p>{post_program.phone}</p>
              </div>
            ))}
          </div>
      </div>
    );
  };


export default Search;
