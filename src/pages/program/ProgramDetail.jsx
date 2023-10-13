import React from 'react';
import { useParams } from 'react-router-dom';

const ProgramDetail =({programs})=> {

    const { pro_postId } = useParams();
    const program = programs.find((p) => p.pro_postId === parseInt(pro_postId, 10));
  
    if (!program) {
      return <div>NOT FOUND</div>;
    }

return(
        <div>
        <h3>프로그램 안내</h3>
        <hr/>
        <div style={{backgroundColor:"#F2F2F2", width:"1000px", height:"100px"}}> 
        {program.postTitle}
        </div>
        <div>
            <div style={{width:"20%"}}>
            {program.postImgURL}
            </div>
            <div>
            <span>대 상</span><div>{program.target}</div>
            <span>장 소</span><div>{program.charge}</div>
            <span>진행기간</span><div>{program.startDate}</div><span>~</span><div>{program.endDate}</div>
            <span>모집기간</span><div>{program.endDate}</div>
            <span>이용료</span><div>{program.postTitle}</div>
            <span>문의전화</span><div>{program.postTitle}</div>
            <span>동반인원</span><div>{program.postTitle}</div>
            </div>
        </div>

        
        </div>
)
}

export default ProgramDetail;