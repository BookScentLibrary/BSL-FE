import React from "react";
import styled from "styled-components";
import Radio from "../../shared/elements/Radio";
import Button from "../../shared/elements/Button";
import Flex from "../../shared/elements/Flex";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as RentOK } from "../../../asset/icons/rent_ok.svg";
import { ReactComponent as RentNO } from "../../../asset/icons/rent_no.svg";

const Book = (props) => {
  const {
    book,
    noRadio,
    rentedDate,
    returnedDate,
    addRentBookList,
    bookStatus,
    expireDate,
    returnBook,
  } = props;

  const now = new Date();
  const navigate = useNavigate();
  const param = useLocation().pathname.split("/")[3];

  const [check, setCheck] = React.useState(0);

  const [rentDate, setRentDate] = React.useState(null);
  const [returnDate, setReturnDate] = React.useState(null);
  const [exDate, setExDate] = React.useState(null);

  const [expire, setExpire] = React.useState(false);

  React.useEffect(() => {
    if (rentedDate) {
      const rented = new Date(rentedDate);
      const returned = returnedDate ? new Date(returnedDate) : null;
      setRentDate(
        "대출일자 " +
          rented.getFullYear() +
          "." +
          rented.getMonth() +
          "." +
          rented.getDate()
      );
      if (returned != null) {
        setReturnDate(
          "반납일자 " +
            returned.getFullYear() +
            "." +
            returned.getMonth() +
            "." +
            returned.getDate()
        );
        return;
      } else {
        setReturnDate("대출중");
        return;
      }
      return;
    }
  }, []);

  React.useEffect(() => {
    if (expireDate) {
      if (new Date(expireDate) < now) {
        setExpire(true);
      } else {
        setExpire(false);
      }
      const expire = expireDate ? new Date(expireDate) : null;
      setExDate(
        expire.getFullYear() + "." + expire.getMonth() + "." + expire.getDate()
      );
      return;
    }
  }, []);

  const checkHandler = (bookNo, cancel) => {
    if (book.bookStatus === 1) {
      return window.alert("이미 대출중인 도서입니다.");
    }
    setCheck((prev) => (prev === 1 ? 0 : 1));
    addRentBookList(bookNo, cancel);
  };

  const goToDetail = (bookNo) => {
    navigate(`/book/detail/${bookNo}`);
  };

  return (
    <Container>
      {!noRadio && (
        <Radio check={check} checkhandler={checkHandler} bookNo={book.bookNo} />
      )}
      <BookData>
        <Image src={book.bookImageURL} />
        <BookInfoText>
          <TitleSection
            status={bookStatus}
            rentedDate={rentedDate}
            exDate={exDate}
            expire={expire}
          >
            <p className="title">{book.bookname}</p>

            {exDate !== null ? (
              <p className="date">
                {"반납예정일자 "}
                <span>{exDate}</span>
              </p>
            ) : rentedDate ? (
              <p className="date">
                {rentDate} | {returnDate}
              </p>
            ) : bookStatus === 0 ? (
              <Flex center gap="12px">
                <RentOK width="20px" height="20px" />
                <p className="status">대출 가능</p>
              </Flex>
            ) : (
              <Flex center gap="12px">
                <RentNO width="20px" height="20px" />
                <p className="status">대출 불가</p>
              </Flex>
            )}
          </TitleSection>
          <FlexContainer $noRadio={noRadio}>
            <div className="columns">
              <p>저자사항</p>
              <p>발행처</p>
              <p>청구기호</p>
              <p>자료실</p>
            </div>
            <div className="data">
              <p>
                {book.author &&
                  book.author.split(";").map((cur, idx) => {
                    if (book.author.split(";").length - 1 === idx) {
                      return <span key={idx}>{cur}</span>;
                    }
                    return <span key={idx}>{cur} · </span>;
                  })}
              </p>
              <p>
                {book.publisher} | {book.publicationYear}
              </p>
              <p>{book.classNo ? book.classNo : "-"}</p>
              <p>{book.shelfArea}</p>
            </div>
            <div className="buttons">
              {param === "rent" ? (
                <>
                  <Button
                    type="small"
                    color="gray"
                    onClick={() => returnBook(book.bookNo)}
                  >
                    반납하기
                  </Button>
                  <Button type="small" onClick={() => goToDetail(book.bookNo)}>
                    책 정보 확인하기
                  </Button>
                </>
              ) : (
                <Button type="middle" onClick={() => goToDetail(book.bookNo)}>
                  책 정보 확인하기
                </Button>
              )}
            </div>
          </FlexContainer>
        </BookInfoText>
      </BookData>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 0;
  margin: auto;
  display: flex;
  width: 990px;
  gap: 24px;
  align-items: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray200}`};
`;

const BookData = styled.div`
  display: flex;
  gap: 40px;
`;

const BookInfoText = styled.div`
  flex-shrink: 0;
  width: 100%;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ rentedDate, exDate }) =>
    rentedDate ? "830px" : exDate ? "830px" : "776px"};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray100}`};
  & > .title {
    font-size: 20px;
    font-weight: 700;
    width: 580px;
    height: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > .date {
    font-size: 14px;
    width: fit-content;
    margin-right: 8px;
    margin-top: 2px;
    & > span {
      color: ${({ expire, theme }) =>
        expire ? theme.colors.darkred30 : "#000"};
    }
  }

  & > div {
    margin-top: -24px;
  }

  & > div > .status {
    width: fit-content;
    margin-right: 10px;
    font-size: 16px;
    color: ${({ status, theme }) =>
      status === 0 ? theme.colors.darkgreen30 : theme.colors.darkred35};
  }
`;

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  gap: 32px;
  margin-top: 28px;
  width: 830px;

  & > div {
    display: grid;
    gap: 8px;
    font-size: 15px;
  }

  & > .columns {
    font-weight: 600;
  }

  & > .data {
    font-weight: 500;
  }

  & > .buttons {
    position: absolute;
    right: ${({ $noRadio }) => ($noRadio === undefined ? "56px" : 0)};
    bottom: 0;
  }
`;

const Image = styled.div`
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.gray200};
  width: 120px;
  height: 176px;
  border-radius: 8px;
  background-image: ${({ src }) => (src ? `url(${src})` : "")};
  background-size: cover;
  background-position: center;
`;
export default Book;
