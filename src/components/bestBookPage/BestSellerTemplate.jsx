import { useNavigate } from "react-router-dom";
import style from "styled-components";

const BestSellerTemplate = (props) => {
  const { img, bookname, author, publisher, isbn,bookNo } = props;
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/book/detail/${bookNo}`);
  };
  return (
    <Best>
      <Image width="120px" height="176px" src={props.img} />

      
      <div>
        <p className="book_temp__bookname">{props.bookname}</p>
        <p className="book_temp__author">{props.author}</p>
        <p className="book_temp__pubisher">{props.publisher}</p>
        <p className="book_temp__isbn">{props.isbn}</p>
      </div>

    </Best>
  );
};




const Best = style.div`
width: fit-content;
height: fit-content;
`;

const Image = style.div`
width: 120px;
height: 176px;
border-radius: 8px;
background-color: ${({ theme }) => theme.colors.gray50};
background-image: ${({ src }) => `url(${src})`};
background-size: cover;
background-position: center;
`

export default BestSellerTemplate;
