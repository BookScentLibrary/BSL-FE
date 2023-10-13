import React, {useState ,range, useRef} from "react"
import DatePicker from "react-datepicker";
import styled from "styled-components";
import Input from "../../components/shared/elements/Input";

import "react-datepicker/dist/react-datepicker.module.css";
const ProgramForm = () => {

const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [startTime, setStartTime] = useState(new Date());
const [endTime, setEndTime] = useState(new Date());
const [receiptStartDate, setReceiptStartDate] = useState(new Date());
const [receiptEndDate, setReceiptEndDate] = useState(new Date());
const [inputValue2, setInputValue2] = React.useState(null);
const ExampleCustomTimeInput = ({ date, value, onChange }) => (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ border: "solid 1px" }}
    />
);
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
                    <div style={{width:"300px", display:"flex"}}>
                        <span>진행기간</span>
                        <div>
                            <DatePicker 
                                selected={startDate}
                                placeholderText="0000.00.00"
                                onChange={(date) => setStartDate(date)}
                                dateFormat="yyyy.MM.dd(eee)"
                                showIcon
                            />
                        </div>
                        <span>~</span>
                        <div>
                            <DatePicker
                            selected={endDate}
                            placeholderText="0000.00.00" 
                            onChange={(date) => setEndDate(date)}
                            dateFormat="yyyy.MM.dd(eee)"
                            showIcon
                            />
                        </div>
                   </div>
                   </DateTable>
                   <DateTable >
                   <div>
                    <div><span>진행시간</span><DatePicker
                    selected={startTime}
                    placeholderText="0000.00.00"
                    onChange={(date) => setStartTime(date)}
                    dateFormat="yyyy.MM.dd(eee)"
                    showIcon
                    />
                    </div>
                    <div>
                    <span>~</span>
                    <DatePicker
                    selected={endTime}
                    placeholderText="0000.00.00"
                    onChange={(date) => setEndTime(date)}
                    dateFormat="yyyy.MM.dd(eee)"
                    showIcon
                    /></div>
                   </div>
                   </DateTable>
                   <DateTable>
                   <div>
                    <div><span>접수기간</span><DatePicker
                    selected={receiptStartDate}
                    onChange={(date) => setReceiptStartDate(date)}
                    dateFormat="yyyy.MM.dd(eee)"
                    showIcon
                    />
                    </div>
                    <div>
                    <span>~</span>
                    <DatePicker
                    selected={receiptEndDate}
                    placeholderText="0000.00.00"
                    onChange={(date) => setReceiptEndDate(date)}
                    dateFormat="yyyy.MM.dd(eee)"
                    showIcon
                    /></div>
                   </div>
                   </DateTable>
                   <Input
          label="대 상"
          inputType="post"
          width="300px"
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="placeholder"
        />
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
          <span className="red">{inputValue2}</span>
        </p>
        <Input
          label="이 용 료"
          inputType="post"
          width="300px"
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="placeholder"
        />
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
          <span className="red">{inputValue2}</span>
        </p>
        <Input
          label="모집인원"
          inputType="post"
          width="300px"
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="placeholder"
        />
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
         <span className="red">{inputValue2}</span>
        </p>
        <Input
          label="동반인원"
          inputType="post"
          width="300px"
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="placeholder"
        />
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
         <span className="red">{inputValue2}</span>
        </p>
        <Input
          label="문의전화"
          inputType="post"
          width="300px"
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="placeholder"
        />
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
          <span className="red">{inputValue2}</span>
        </p>
        <div>
        <Input
          label=""
          inputType="post"
          width="300px"
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="placeholder"
        />
            <div>
        <Btn1 onClick={handleClick}> 
                            <ImgInput type="file"
                                accept="image/*"
                                  id="profileImg"
                                // accept ="image/jpg, image/jpeg, image/png"
                                multiple 
                                ref={photoInput}/>
                            이미지 등록
                        </Btn1>
            </div>
        </div>
                </div>
            </div>
                 
                <table>
                    <td><ContentInput type="text" name="b_author" placeholder="내용을 입력해주세요!"/></td>
                </table>
                    <Btn onclick={registerPost}>게시물 등록</Btn>
                
                    
                  
			{/* </form> */}
    </div>
</div>
            

                );
                

                

				};
                
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
                    : "40px"};
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
