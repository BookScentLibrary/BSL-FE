import React from "react";
import Button from "../components/shared/elements/Button";
import styled from "styled-components";
import Menu from "../components/shared/comp/menu/Menu";
import Input from "../components/shared/elements/Input";

const CompCatalog = (props) => {
  const optionData = ["option1", "option2", "option3"];
  const [optionValue, setOptionValue] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState(null);
  const [finalValue, setFinalValue] = React.useState(null);

  const [inputValue1, setInputValue1] = React.useState(null);
  const [inputValue2, setInputValue2] = React.useState(null);
  const [inputValue3, setInputValue3] = React.useState(null);

  const onClickSearch = () => {
    setFinalValue(searchValue);
    console.log("확정된 검색어 : " + searchValue);
  };

  return (
    <Container>
      <h1>Component Catalog</h1>
      <div className="catalog_button">
        <Button>button</Button>
        <p>{"<Button>value</Button>"}</p>
        <Button color="gray">button</Button>
        <p>{"<Button color='gray'>value</Button>"}</p>
        <Button color="red">button</Button>
        <p>{"<Button color='red'>value</Button>"}</p>
      </div>

      <div>
        <Button type="middle">button</Button>
        <p>{"<Button type='middle'>value</Button>"}</p>
        <Button type="middle" color="gray">
          button
        </Button>
        <p>{"<Button type='middle' color='gray'>value</Button>"}</p>
        <Button type="middle" color="red">
          button
        </Button>
        <p>{"<Button type='middle' color='red'>value</Button>"}</p>
      </div>

      <div>
        <Button type="small">button</Button>
        <p>{"<Button type='small'>value</Button>"}</p>
        <Button type="small" color="gray">
          button
        </Button>
        <p>{"<Button type='small' color='gray'>value</Button>"}</p>
        <Button type="small" color="red">
          button
        </Button>
        <p>{"<Button type='small' color='red'>value</Button>"}</p>
      </div>

      <div className="catalog_menu">
        <Menu>
          <p>menu 1</p>
          <p>menu 2</p>
          <p>menu 3</p>
          <p>menu 4</p>
        </Menu>
        <p>Menu.jsx 컴포넌트 참고</p>
      </div>

      <div>
        <p className="title">라벨 왼쪽 정렬(회원가입)</p>
        <Input
          label="라벨"
          onChange={(e) => setInputValue1(e.target.value)}
          placeholder="placeholder"
        />
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
          Input Value 1 : <span className="red">{inputValue1}</span>
        </p>
        <p>
          {
            '<Input label="라벨" onChange={(e) => setInputValue1(e.target.value)} placeholder="placeholder" />'
          }
        </p>
        <p className="title">라벨 중앙 정렬</p>
        <Input
          label="모집인원"
          inputType="post"
          onChange={(e) => setInputValue2(e.target.value)}
          placeholder="placeholder"
        />
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
          Input Value 2 : <span className="red">{inputValue2}</span>
        </p>
        <p>
          {'<Input label="모집인원"'}{" "}
          <span className="blue">{' inputType="post" '}</span>{" "}
          {
            ' onChange={(e) => setInputValue2(e.target.value)} placeholder="placeholder" />'
          }
        </p>
        <p className="title">라벨 중앙 정렬+width 조절</p>
        <Input
          label="모집인원"
          inputType="post"
          width="300px"
          onChange={(e) => setInputValue3(e.target.value)}
          placeholder="placeholder"
        />
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
          Input Value 3 : <span className="red">{inputValue3}</span>
        </p>
        <p>
          {'<Input label="모집인원"'}
          <span className="blue">{'inputType="post"'}</span>
          <span className="red">{' width="300px" '}</span>
          {
            'onChange={(e) => setInputValue3(e.target.value)} placeholder="placeholder" />'
          }
        </p>
        <p className="title">검색(default size)</p>
        <Input
          inputType="search"
          data={optionData}
          optionValue={optionValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onClick={onClickSearch}
          setOptionValue={setOptionValue}
        />
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
          Selected Value(idx) : <span className="red">{optionValue}</span>
        </p>
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
          Input Value : <span className="red">{searchValue}</span>
        </p>
        <p style={{ fontSize: "20px", fontWeight: "700" }}>
          Final Input Value : <span className="red">{finalValue}</span>
        </p>
        <p>
          <span className="disc">--- 셀렉트박스 옵션 리스트 배열</span>
          <span>{"const"}</span>
          <span className="green">{" optionData"}</span>
          <span>{' = ["option1", "option2", "option3"];'}</span>
        </p>
        <p>
          <span className="disc">--- 선택된 셀렉트박스 옵션 요소 저장</span>
          <span>{"const"}</span>
          <span className="blue">{" [optionValue, setOptionValue]"}</span>
          <span>{" = React.useState(0)"}</span>
        </p>
        <p>
          <span className="disc">--- 검색창에 입력한 값 저장</span>
          <span>{"const"}</span>
          <span className="blue">{"[searchValue, setSearchValue]"}</span>
          <span>{" = React.useState(null);"}</span>
        </p>
        <p>
          <span className="disc">--- 아이콘 클릭시 실행할 onClick 함수</span>
          <span>{"const"}</span>
          <span className="red">{" onClickSearch = () => {"}</span>
          <br />
          <span>
            {'　console.log("확정된 검색어 : " + searchValue);'}
            <br />
            {"　(여기서 dispatch 진행)"}
          </span>
          <br />
          <span className="red">{"};"}</span>
        </p>
        <p>
          <span className="disc">--- 실제 작성 예시</span>
          <span>{"<Input"}</span>
          <br />
          <span className="red">　inputType="search"</span>
          <br />
          <span className="green">{"　data={optionData}"}</span>
          <br />
          <span className="blue">{"　optionValue={optionValue}"}</span>
          <br />
          <span className="blue">{"　setOptionValue={setOptionValue}"}</span>
          <br />
          <span className="red">
            {"　onChange={(e) => {setSearchValue(e.target.value);}}"}
          </span>
          <br />
          <span className="red">{"　onClick={onClickSearch}"}</span>
          <span>{" />"}</span>
        </p>
        <p className="title">검색(small size)</p>
        <Input
          inputType="search"
          size="small"
          data={optionData}
          optionValue={optionValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onClick={onClickSearch}
          setOptionValue={setOptionValue}
        />
        <p>
          <span className="disc">--- 실제 작성 예시</span>
          <span>{"<Input"}</span>
          <br />
          <span className="red">　inputType="search"</span>
          <br />
          <span className="red">　size="small"</span>
          <br />
          <span>{"　data={optionData}"}</span>
          <br />
          <span>{"　optionValue={optionValue}"}</span>
          <br />
          <span>{"　setOptionValue={setOptionValue}"}</span>
          <br />
          <span>{"　onChange={(e) => {setSearchValue(e.target.value);}}"}</span>
          <br />
          <span>{"　onClick={onClickSearch}"}</span>
          <span>{" />"}</span>
        </p>
      </div>
    </Container>
  );
};

export const Container = styled.div`
  padding: 16px;
  width: 600px;

  & > h1 {
    margin: 24px 0;
  }

  & > div {
    display: grid;
    gap: 12px;
    margin: 60px 0;
  }

  & > div > .title {
    margin-top: 24px;
    font-weight: 800;
    font-size: 28px;
  }

  & > div > span {
    color: ${({ theme }) => theme.colors.darkgray};
  }

  & > div > p > .disc {
    margin: 12px 8px;
    display: block;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkgray};
  }

  & > div > p > span {
    color: ${({ theme }) => theme.colors.darkgray};
  }

  & > div > .green {
    color: ${({ theme }) => theme.colors.primary};
  }

  & > div > .blue {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  & > div > .red {
    color: ${({ theme }) => theme.colors.secondary};
  }

  & > div > p > .green {
    color: ${({ theme }) => theme.colors.primary};
  }

  & > div > p > .blue {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  & > div > p > .red {
    color: ${({ theme }) => theme.colors.secondary};
  }

  & > .catalog_button {
    display: fl;
  }
`;
export default CompCatalog;
