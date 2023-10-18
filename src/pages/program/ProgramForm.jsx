import React, {useState ,range, useRef} from "react"
import DatePicker from "react-datepicker";
import styled from "styled-components";
import Input from "../../components/shared/elements/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import photo from "../../asset/images/photo.svg"
import { getProgramListAPI } from "../../core/redux/postSlice";
import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/dist/react-datepicker.module.css";
const ProgramForm = (props) => {

    
    

    const [userId, setUserId] = useState("");
    const [pro_postId, setPro_postId] = useState("");
    const [place, setPlace] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [target, setTarget] = useState("");
    const [charge, setCharge] = useState("");
    const [content, setContent] = useState("");
    const [phone, setPhone] = useState("");
    const [programGuests, setProgramGuests] = useState("");
    const [extraGuests, setextraGuests] = useState("");
    const navigate = useNavigate();
    const dateNow = new Date();
    const today = dateNow.toISOString().slice(0, 10);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [receiptStartDate, setReceiptStartDate] = useState(new Date());
    const [receiptEndDate, setReceiptEndDate] = useState(new Date());

    
    const handleProgramSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post("http://localhost:8080/news//registerForm", {
            
            postTitle,
            userId,
            content,
            pro_postId,
            place,
            target,
            charge,
            extraGuests,
            phone,
            programGuests,
            startDate,
            endDate,
            receiptStartDate,
            receiptEndDate,
            // programImageURL,
          });
    
          if (response.status === 201) {
            navigate("/news/programList");
          }
        } catch (error) {
          console.error("Error submitting program:", error);
        }
      };

const [imgFile, setImgFile] = useState("");
const imgRef = useRef();
const saveImgFile = () => {
	const file = imgRef.current.files[0];
	const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImgFile(reader.result);
   	};
};

const [title, setTitle] = useState("");
// const {photoInput} = useRef();


const handleClick = () => {
    imgRef.current.click();
};
const registerPost = () =>{
    navigator('/registerForm')
}


return (

<div style={{position:"relative",left:"40px"}}>
	<div>
		<h1>프로그램 안내 작성</h1>
        <hr style={{position:"relative",right:"97px",width:"1300x",borderColor:"black"}}/>		
	</div>
	<div>
    <form onSubmit={handleProgramSubmit}> 
        <Input label="제 목" inputType="post" width="890px" value={postTitle} onChange={(e) => (e.target.value)} placeholder="제목을 입력해주세요!" />
                <br/>
                

                {/* width값 디자인에 맞춰서 지정 */}
            <div style={{width:"1200px", border:"none", display:"flex"}}>
                <div style={{width:"20%", marginRight:"50px"}}>
                    <div
                        style={{
                            marginTop:"12px",
                            width:"300px",
                            height:"370px",
                            border: "dashed",
                            // lineHeight:"300px", 추후에 이미지 가운데로 조정하세요
                            borderWidth:"1.5px",
                            borderRadius:"3px",
                            borderColor:"gray"
                        }}>
                           
                        <img
                        src={imgFile ? imgFile :`{photo}`}
                        // 이미지 없을 때 예외처리를 다른 경로로 해주세욤 
                        // 이렇게 저 경로로만 하면 엑박으로 뜹니다요
                        // alt="image"
                        />
                    </div>
                </div>
                <div style={{width:"830px",height:"400px",marginLeft:"30px",display:"flex"}}>
                <div style={{width:"40%",marginLeft:"20px"}}>
                    {/* </form>
                    <form action="<c:url value='/program/admin/registerBookConfirm' />" name="register_program_form" method="post" enctype="multipart/form-data"> */}
                    <DateTable>
                    <div style={{width:"20%", height:"35px", display:"flex",marginTop:"18px",marginLeft:"10px"}}>
                    <div style={{width:"200px", height:"50px", display:"flex",position:"relative",bottom:"0px"}}>
                        <Span>진행기간</Span>
                        <Datediv>
                            <DatePicker 
                                type="date"
                                defaultValue={today}
                                selected={startDate}
                                placeholderText="0000.00.00"
                                onChange={(date) => setStartDate(date)}
                                dateFormat="yyyy.MM.dd(eee)"
                                value={startDate}
                                startDate={new Date(props.startDate)}
                                endDate={new Date(props.Date)}
                                border="none"
                                // showIcon
                                style={{
                                    width:"30px",
                                    display:"flex",
                                    
                                }}
                            />
                        </Datediv>
                        <MiddleSpan>~</MiddleSpan>
                        <DateEnddiv style={{
                                    width:"30px",
                                    display:"flex"
                                }}>
                            <DatePicker
                            type="date"
                            defaultValue={today}
                            selected={endDate}
                            placeholderText="0000.00.00" 
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy.MM.dd(eee)"
                            // value={endDate}
                            // showIcon
                            
                            />
                        </DateEnddiv>
                   </div>
                   </div>
                   </DateTable>
                   
                   <DateTable>
                    <div style={{width:"20%", height:"35px", display:"flex",marginTop:"18px",marginLeft:"10px"}}>
                    <div style={{width:"20%", marginRight:"50px",position:"relative",top:"0px"}}>
                        <Span>접수기간</Span>
                        <Datediv1>
                            <DatePicker 
                                type="date"
                                defaultValue={today}
                                selected={receiptStartDate}
                                placeholderText="0000.00.00"
                                onChange={(date) => setReceiptStartDate(date)}
                                dateFormat="yyyy.MM.dd(eee)"
                                value={startDate}
                                // showIcon
                                
                            />
                        </Datediv1>
                        <MiddleSpan style={{position:"relative",bottom:"42px", left:"186px"}}>~</MiddleSpan>
                        <DateEnddiv1>
                            <DatePicker
                            type="date"
                            defaultValue={today}
                            selected={receiptEndDate}
                            placeholderText="0000.00.00" 
                            onChange={(date) => setReceiptEndDate(date)}
                            dateFormat="yyyy.MM.dd(eee)"
                            // value={endDate}
                            // showIcon
                            />
                        </DateEnddiv1>
                   </div>
                   </div>
                   </DateTable>
                   
        <MarginDiv>
         <Input
          label="대 상"
          inputType="post"
          width="190px"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="프로그램 진행 대상"
        />
        </MarginDiv>
        <MarginDiv>
        </MarginDiv>
        <MarginDiv>
        <Input 
          label="모집인원"
          inputType="post"
          width="25px"
          value={programGuests}
          onChange={(e) => setProgramGuests(e.target.value)}
          placeholder="0"
        />
        </MarginDiv>
        <MarginDiv>
        <Input
          label="문의전화"
          inputType="post"
          width="190px"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="000-0000-0000"
        />
        </MarginDiv>
        <MarginDiv>
        
        <Input
          inputType="file"
          width="190px"
          value={imgFile}
          onChange={(e) => setImgFile(e.target.value)}
          placeholder="program_ing_jpg"
        />
        </MarginDiv>
        <MarginDiv1>
                        <Input
                        label="동반인원"
                        inputType="post"
                        width="25px"
                        display = "flex"
                        value={extraGuests}
                        onChange={(e) => setextraGuests(e.target.value)}
                        placeholder="0"
                        />
                     </MarginDiv1>
            <div>
                        
                        <Btn1>
                            <label htmlFor="profileImg">파일 선택</label>
                            <div style={{display:"none"}}>
                            <input
                            type="file"
                            accept="image/*"
                            id="profileImg"
                            />
                            </div>
                        </Btn1>
            
        </div>
        <div style={{width:"20%",position: "relative",left:"360px",bottom:"499px"}}>
        <DateTable style={{width:"325px", height:"52px", display:"flex",marginTop:"25px",marginBottom:"6px",marginLeft:"1px"}}>
        <div style={{width:"200px", height:"50px", display:"flex",position:"relative",left:"0px",top:"17px",left:"13px"}}>
                        <Span>진행시간</Span>
                        <Datediv2>
                            <DatePicker
                                type="date"
                                defaultValue={today}
                                selected={startDate}
                                placeholderText="0000.00.00"
                                onChange={(date) => setStartDate(date)}
                                dateFormat="yyyy.MM.dd(eee)"
                                // value={startDate}
                                // showIcon
                                style={{
                                    width:"30px"
                                    
                                }}
                            />
                        </Datediv2>
                        <MiddleSpan1>~</MiddleSpan1>
                        <DateEnddiv2>
                            <DatePicker
                            type="date"
                            defaultValue={today}
                            selected={endDate}
                            placeholderText="0000.00.00" 
                            onChange={(date) => setEndDate(date)}
                            dateFormat="yyyy.MM.dd(eee)"
                            // value={endDate}
                            // showIcon
                            />
                        </DateEnddiv2>
                        </div>
                   </DateTable>
                   <br/>
                   <br/>
                   <br/>
                   <br/>

                   <Input
                    label="이 용 료"
                    inputType="post"
                    width="190px"
                    value={place}
                    onChange={(e) => setTarget(e.target.value)}
                    placeholder="placeholder"
                    />
                    <MarginDiv>
                    <Input
                    label="장 소"
                    inputType="post"
                    width="190px"
                    value={place}
                    onChange={(e) => setTarget(e.target.value)}
                    placeholder="placeholder"
                    />
                    </MarginDiv>
                    
        </div>
        </div>
                </div>
            </div>
                 
                <table>
                    <td><ContentInput type="text" name="content" placeholder="내용을 입력해주세요!"/></td>
                </table>
                    <Btn type="submit" >게시물 등록</Btn>
                </form>
                    
                  
    </div>
</div>
            

                );
                

                

				};
                const MarginDiv = styled.div`
                margin-top: 14px;
                `;

                const MarginDiv1 = styled.div`
                position: relative;
                left:166px;
                bottom:178px;
                right:585px;
                `;

                const Span = styled.span`
                display:flex;
                padding: 0 10px;
                width:300px;
                font-size: 16px;
                font-weight: 600;
                `;
                const MiddleSpan = styled.span`
                position: relative;
                left: 30px;
                bottom:290x;
                display:flex;
                width: 50px;
                border:none;
                font-size: 16px;
                font-weight: 600;
                `;

                const MiddleSpan1 = styled.span`
                position: relative;
                left: 45px;
                top: 0px;
                display:flex;
                width: 50px;
                border:none;
                font-size: 16px;
                font-weight: 600;
                `;
                const Datediv = styled.div`
                position: relative;
                right: 25px;
                bottom:0px;
                display:flex;
                width: 50px;
                border:none;
                font-size: 16px;
                font-weight: 600;
                `;

                const DateEnddiv = styled.div`
                position: relative;
                left: 28px;
                top:0px;
                display:flex;
                padding: 0 px;
                width: 50px;
                height:40px;
                font-size: 16px;
                font-weight: 600;
                `;
                const Datediv1 = styled.div`
                position: relative;
                left: 82px;
                bottom:21px;
                display:flex;
                width: 50px;
                font-size: 16px;
                font-weight: 600;
                `;

                const DateEnddiv1 = styled.div`
                position: relative;
                left:200px;
                bottom:62px;
                display:flex;
                padding: 0 px;
                width: 50px;
                height:40px;
                font-size: 16px;
                font-weight: 600;
                `;
                const Datediv2 = styled.div`
                position: relative;
                right: 10px;
                top:0px;
                display:flex;
                width: 50px;
                border:none;
                font-size: 16px;
                font-weight: 600;
                `;

                const DateEnddiv2 = styled.div`
                position: relative;
                left: 50px;
                top:0px;
                display:flex;
                padding: 0 px;
                width: 50px;
                height:40px;
                font-size: 16px;
                font-weight: 600;
                `;
                
                const Table = styled.table`
                margin-top:1px;
                border:solid;
                border-Width: 0.05px;
                border-Radius: 4px; 
                width:270px; 
                height: 40px;
                text-align: center;
                border-color:gray;
                `;

                const DateTable = styled.div`
                margin-top:10px;
                border:solid;
                border-Width: 0.05px;
                border-Radius: 4px; 
                text-align: center;
                width:325px;
                `;

                const datePicker = styled.input`
                type:DatePicker;
                margin-top:1px;
                border:none;
                width:70px;
                `;

                const TitleTable = styled.table`
                border:solid;
                border-Width: 0.05px;
                border-Radius: 4px; 
                text-align: center;
                border-color:gray;
                `;

                const Td = styled.td`
                width:70px;
                text-align: center;
                border: none;
                `; 
                
                 const ImgTd = styled.td`
                 width:250px;
                 height:300px;
                 border: dashed;
                 border-width:6px;
                 border-Radius:3px;
                 border-Color:gray;
                `;



                const Label = styled.label`
                    position: absolute;
                    top: 16px;
                    padding: 0 18px;
                    width: 84px;
                    text-align: ${({ inputtype }) => (inputtype === "post" ? "center" : "left")};
                    font-size: 16px;
                    font-weight: 600;
                `;


              

                const TitleInput = styled.input`
                    width:940px;
                    height:30px;
                    border :none;
                `;

                const ContentInput = styled.input`
                border :solid 1px;
                padding : 16px;
                border-Radius : 6px;
                width : 985px;
                height : 450px;
                border-color : gray;
                margin-top:30px;
                `;

                const ImgInput = styled.input`
                display:none;
                `;

                const Btn1 = styled.button`
                box-sizing: border-box;
                background: ${({ color, theme }) =>
                    color
                    ? color === "red"
                        ? theme.colors.secondary
                        : color === "gray"
                        ? theme.colors.gray
                        : theme.colors.primary
                    : theme.colors.primary};
                border-radius: 4px;
                width: ${({ width }) => (width ? width : "160px")};
                height: ${({ type }) =>
                    type
                    ? type === "small"
                        ? "28px"
                        : type === "middle"
                        ? "48px"
                        : "60px"
                    : "48px"};
                font-size: ${({ type }) =>
                    type ? (type === "small" ? "14px" : "20px") : "20px"};
                color: #fff;
                border: none;

                &:hover {
                    background: ${({ color, theme }) =>
                    color
                        ? color === "red"
                        ? theme.colors.darkred5
                        : color === "gray"
                        ? theme.colors.grayhover
                        : theme.colors.darkgreen5
                        : theme.colors.darkgreen5};
                        
                }
                    position: relative;
                    bottom: 98px;
                    left: 341px;
                `;

                const Btn = styled.button`
                    margin : 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    background: ${({ color, theme }) =>
                        color
                        ? color === "red"
                            ? theme.colors.secondary
                            : color === "gray"
                            ? theme.colors.gray
                            : theme.colors.primary
                        : theme.colors.primary};
                    border-radius: 4px;
                    width: ${({ width }) => (width ? width : "160px")};
                    height: ${({ type }) =>
                        type
                        ? type === "small"
                            ? "28px"
                            : type === "middle"
                            ? "48px"
                            : "60px"
                        : "60px"};
                    font-size: ${({ type }) =>
                        type ? (type === "small" ? "14px" : "20px") : "20px"};
                    color: #fff;
                    border: none;

                    &:hover {
                        background: ${({ color, theme }) =>
                        color
                            ? color === "red"
                            ? theme.colors.darkred5
                            : color === "gray"
                            ? theme.colors.grayhover
                            : theme.colors.darkgreen5
                            : theme.colors.darkgreen5};
                    }

                    
                    

                    
                    `;
                
                

                
export default ProgramForm;