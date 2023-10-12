import React from "react";
import * as S from "./BookRentData.style";
import ProgressBar from "../../shared/comp/graph/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getRatingDataAPI,
  getReaderDataAPI,
} from "../../../core/redux/bookSlice";
import { ReactComponent as Flower } from "../../../asset/icons/flower.svg";
import FlowerRate from "./BookFlowerRate";

const RentData = () => {
  const dispatch = useDispatch();
  const distdata = useSelector((state) => state.book.reader);
  const ratedata = useSelector((state) => state.book.rate);

  const arr = [0, 0, 0, 0, 0];
  const rate = [
    ratedata?.p5,
    ratedata?.p4,
    ratedata?.p3,
    ratedata?.p2,
    ratedata?.p1,
  ];
  React.useEffect(() => {
    dispatch(getReaderDataAPI(""));
    dispatch(getRatingDataAPI(""));
  }, []);

  return (
    <S.Container>
      <S.RentDistrib>
        <S.SubTitle>대출 분포</S.SubTitle>
        <S.DistGraphContainer>
          {distdata &&
            distdata.map((data, i) => {
              return (
                <S.DistGraphSection key={i}>
                  <p>{data.m}</p>
                  <ProgressBar m percent={data.m} />
                  <p className="age">
                    {i === 5 ? i + 1 + "0대↑" : i + 1 + "0대"}
                  </p>
                  <ProgressBar f percent={data.f} />
                  <p className="f">{data.f}</p>
                </S.DistGraphSection>
              );
            })}
          <div className="gender_title">
            <p>남성</p>
            <p>여성</p>
          </div>
        </S.DistGraphContainer>
      </S.RentDistrib>
      <S.RatingDistrib>
        <S.SubTitle>평점 분포</S.SubTitle>
        <S.Average>
          {ratedata &&
            arr.map((item, i) => {
              if (i + 1 <= ratedata.avg) {
                return <Flower key={i} fill="#A1E092" />;
              } else {
                return <Flower key={i} fill="#fff" />;
              }
            })}
          <p>{ratedata?.avg}</p>
        </S.Average>
        <S.RateGraphContainer>
          {rate &&
            rate.map((data, i) => {
              return (
                <S.RateGraphSection>
                  <FlowerRate count={Math.abs(i - 5)} />
                  <div>
                    <ProgressBar f width="160px" height="12px" percent={data} />
                  </div>
                  <p>{data}</p>
                </S.RateGraphSection>
              );
            })}
        </S.RateGraphContainer>
      </S.RatingDistrib>
    </S.Container>
  );
};

export default RentData;
