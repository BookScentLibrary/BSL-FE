import React, {useState ,range, useRef} from "react"
import DatePicker from "react-datepicker";
import styled from "styled-components";
import Input from "../../components/shared/elements/Input";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import "react-datepicker/dist/react-datepicker.module.css";
const ProgramForm = () => {

    

    const [userId, setUserId] = useState("");
    const [pro_postId, setPro_postId] = useState("");
    const [place, setPlace] = useState("");
    const [PostImageURL, setPostImageURL] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [target, setTarget] = useState("");
    const [charge, setCharge] = useState("");
    const [content, setContent] = useState("");
    const [phone, setPhone] = useState("");
    const [programGuests, setProgramGuests] = useState("");
    const [extraGuests, setextraGuests] = useState("");
    const [postImageURL, setPostImgURL] = useState("");
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [receiptStartDate, setReceiptStartDate] = useState(new Date());
    const [receiptEndDate, setReceiptEndDate] = useState(new Date());
    const [inputValue2, setInputValue2] = React.useState(null);

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
    
const saveImgFile = () => {
	const file = photoInput.current.files[0];
	const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setImgFile(reader.result);
   	};
};
const [imgFile, setImgFile] = useState("");
const [title, setTitle] = useState("");
const {photoInput} = useRef();
const {imgRef} = useRef();

const Button = (props) => {
    const { type, onClick, disabled, color, children, width } = props;
    const styles = {
      color,
      width,
      type,
    };
}

const handleClick = () => {
    photoInput.current.click();
};
const registerPost = () =>{
    navigator('/registerForm')
}


return (

<div>
	<div>
		<h3>프로그램 안내 작성</h3>
        <hr/>		
	</div>
	<div>
        <Input label="제 목" inputType="post" onChange={(e) => (e.target.value)} placeholder="제목을 입력해주세요!" />
                <br/>
                <br/>
                
                {/* width값 디자인에 맞춰서 지정 */}
            <div style={{width:"1200px", border:"2px solid", display:"flex"}}>
                <div style={{width:"20%", marginRight:"50px"}}>
                    <div
                        style={{
                            width:"250px",
                            height:"300px",
                            border: "dashed",
                            // lineHeight:"300px", 추후에 이미지 가운데로 조정하세요
                            borderWidth:"1.5px",
                            borderRadius:"3px",
                            borderColor:"gray"
                        }}>
                           
                        <img
                        src={imgFile ? imgFile :`/images/icon/user.png`}
                        // 이미지 없을 때 예외처리를 다른 경로로 해주세욤 
                        // 이렇게 저 경로로만 하면 엑박으로 뜹니다요
                        alt="image"
                        />
                    </div>
                </div>
                    
                <div style={{width:"70%"}}>
                    {/* </form>
                    <form action="<c:url value='/program/admin/registerBookConfirm' />" name="register_program_form" method="post" enctype="multipart/form-data"> */}
                    <DateTable>
                    <div style={{width:"150px", height:"50px", display:"flex"}}>
                        <Span>진행기간</Span>
                        <Datediv>
                            <DatePicker 
                                selected={startDate}
                                placeholderText="0000.00.00"
                                onChange={(e) => setStartDate(e.target.value)}
                                dateFormat="yyyy.MM.dd(eee)"
                                value={startDate}
                                // showIcon
                                style={{
                                    width:"30px",
                                    display:"flex"
                                }}
                            />
                        </Datediv>
                        <MiddleSpan>~</MiddleSpan>
                        <DateEnddiv style={{
                                    width:"30px",
                                    display:"flex"
                                }}>
                            <DatePicker
                            selected={endDate}
                            placeholderText="0000.00.00" 
                            onChange={(e) => setEndDate(e.target.value)}
                            dateFormat="yyyy.MM.dd(eee)"
                            value={endDate}
                            // showIcon
                            
                            />
                        </DateEnddiv>
                   </div>
                   </DateTable>
                   <DateTable>
                    <div style={{width:"150px", height:"50px", display:"flex"}}>
                        <Span>진행시간</Span>
                        <Datediv1>
                            <DatePicker 
                                selected={startDate}
                                placeholderText="0000.00.00"
                                onChange={(e) => setStartDate(e.target.value)}
                                dateFormat="yyyy.MM.dd(eee)"
                                value={startDate}
                                // showIcon
                                style={{
                                    width:"30px"
                                    
                                }}
                            />
                        </Datediv1>
                        <MiddleSpan>~</MiddleSpan>
                        <DateEnddiv1>
                            <DatePicker
                            selected={endDate}
                            placeholderText="0000.00.00" 
                            onChange={(e) => setEndDate(e.target.value)}
                            dateFormat="yyyy.MM.dd(eee)"
                            value={endDate}
                            // showIcon
                            />
                        </DateEnddiv1>
                   </div>
                   </DateTable>
                   <DateTable>
                    <div style={{width:"150px", height:"50px", display:"flex"}}>
                        <Span>접수기간</Span>
                        <Datediv2>
                            <DatePicker 
                                selected={startDate}
                                placeholderText="0000.00.00"
                                onChange={(e) => setStartDate(e.target.value)}
                                dateFormat="yyyy.MM.dd(eee)"
                                value={startDate}
                                // showIcon
                                style={{
                                    position: "absolute",
                                    top:"100px",
                                }}
                            />
                        </Datediv2>
                        <MiddleSpan>~</MiddleSpan>
                        <DateEnddiv2>
                            <DatePicker
                            selected={endDate}
                            placeholderText="0000.00.00" 
                            onChange={(e) => setEndDate(e.target.value)}
                            dateFormat="yyyy.MM.dd(eee)"
                            value={endDate}
                            // showIcon
                            />
                        </DateEnddiv2>
                   </div>
                   </DateTable>
                   <Input
          label="대 상"
          inputType="post"
          width="300px"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="placeholder"
        />
        <Input
          label="이 용 료"
          inputType="post"
          width="300px"
          value={charge}
          onChange={(e) => setCharge(e.target.value)}
          placeholder="placeholder"
        />
        <Input
          label="모집인원"
          inputType="post"
          width="100px"
          value={programGuests}
          onChange={(e) => setextraGuests(e.target.value)}
          placeholder="placeholder"
        />
        <Input
          label="동반인원"
          inputType="post"
          width="100px"
          display = "flex"
          value={extraGuests}
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="placeholder"
        />
        <Input
          label="문의전화"
          inputType="post"
          width="300px"
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="placeholder"
        />
        <div>
        <Input
          label={PostImageURL}
          inputType="ImgURL"
          width="300px"
          onChange={(e) => setPostImgURL(e.target.value)}
          placeholder="program_ing_jpg"
        />
            <div>
        <Btn1 onClick={handleClick}> 
                            <ImgInput type="file"
                                accept="image/*"
                                  id="profileImg"
                                // accept ="image/jpg, image/jpeg, image/png"
                                ref={imgRef}/>
                            이미지 등록
                        </Btn1>
            </div>
        </div>
                </div>
            </div>
                 
                <table>
                    <td><ContentInput type="text" name="b_author" placeholder="내용을 입력해주세요!"/></td>
                </table>
                    <Btn  onclick={registerPost}>게시물 등록</Btn>
                
                    
                  
			{/* </form> */}
    </div>
</div>
            

                );
                

                

				};
                const Span = styled.span`
                // position: absolute;
                margin: 15px;
                display:flex;
                padding: 0 10px;
                width: 70px;
                font-size: 16px;
                font-weight: 600;
                `;
                const MiddleSpan = styled.span`
                position: absolute;
                right: 265px;
                top:260x;
                margin-top : 12px;
                display:flex;
                width: 50px;
                border:none;
                font-size: 16px;
                font-weight: 600;
                `;
                const Datediv = styled.div`
                position: absolute;
                right: 460px;
                top:177px;
                display:flex;
                width: 50px;
                border:none;
                font-size: 16px;
                font-weight: 600;
                `;

                const DateEnddiv = styled.div`
                position: absolute;
                right: 270px;
                top:176px;
                display:flex;
                padding: 0 px;
                width: 50px;
                height:40px;
                font-size: 16px;
                font-weight: 600;
                `;
                const Datediv1 = styled.div`
                position: absolute;
                right: 460px;
                top:227px;
                display:flex;
                width: 50px;
                border:none;
                font-size: 16px;
                font-weight: 600;
                `;

                const DateEnddiv1 = styled.div`
                position: absolute;
                right: 250px;
                top:227px;
                display:flex;
                padding: 0 px;
                width: 50px;
                height:40px;
                font-size: 16px;
                font-weight: 600;
                `;
                const Datediv2 = styled.div`
                position: absolute;
                right: 460px;
                top:277px;
                display:flex;
                width: 50px;
                border:none;
                font-size: 16px;
                font-weight: 600;
                `;

                const DateEnddiv2 = styled.div`
                position: absolute;
                right: 250px;
                top:276px;
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
                margin-top:1px;
                border:solid;
                border-Width: 0.05px;
                border-Radius: 4px; 
                text-align: center;
                border-color:gray;
                width:500px;
                `;

                const datePicker = styled.div`
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


                // const Input = styled.input`
                // border :none;
                // text-align: center;
                // width:300px;
                // `;

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
                border :border;
                padding : 16px;
                border-Radius : 6px;
                width : 985px;
                height : 450px;
                border-color : gray;
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
                    position: absolute;
                    top: 569px;
                    right: 7px;
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
