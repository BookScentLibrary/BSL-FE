import React from "react";
import styled from "styled-components";
import Button from "../../shared/elements/Button";

const LibraryInfo = ({ book }) => {
  const bookNo = "BSL" + String(book.bookNo).padStart(8, "0");
  return (
    <Table>
      <thead>
        <tr>
          <th className="info_bookNo">구분</th>
          <th className="info_callNo">청구기호</th>
          <th className="info_bookStatus">자료상태</th>
          <th className="info_returnDate">반납예정일</th>
          <th className="info_reserv">예약</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="info_bookNo">{bookNo}</td>
          <td className="info_callNo">{book.callNum}</td>
          <td className="info_bookStatus">
            {book.bookStatus === 0 ? "대출가능" : "대출중"}
          </td>
          <td className="info_returnDate">-</td>
          <td className="info_reserv">
            <Button type="small" width="100px" color="gray">
              예약불가
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  border-collapse: collapse;

  & > thead > tr {
    & > .info_bookNo {
      width: 212px;
    }
    & > .info_callNo {
      width: 208px;
    }
    & > .info_bookStatus {
      width: 180px;
    }
    & > .info_returnDate {
      width: 180px;
    }
    & > .info_reserv {
      width: 180px;
    }
  }

  & > thead > tr > th {
    padding: 20px 0;
    border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  }

  & > tbody > tr > td {
    padding: 16px 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkgray};
    border: ${({ theme }) => `1px solid ${theme.colors.gray}`};
  }
`;

export default LibraryInfo;
