import { useNavigate } from "react-router-dom";

const popularBook = (props) => {
    const { img, bookname, author, publisher, isbn,format  } = props;
    const navigate = useNavigate();
  
    const goToDetail = () => {
      navigate(`/book/detail/${bookNo}`);
    };
    return (
      <S.Best onClick={goToDetail}>
        <S.Image width="120px" height="176px" src={img} />
        {/* <S.Info rank={rank}> */}
          <p className="rank">{rank}</p>
          <div>
            <p className="book_temp__bookname">{bookname}</p>
            <p className="book_temp__author">{author}</p>
            <p className="book_temp__pubisher">{publisher}</p>
            <p className="book_temp__isbn">{isbn}</p>
            <p className="book_temp__format">{format}</p>
          </div>
        {/* </S.Info> */}
      </S.Best>
    );
};

export {popularBook};