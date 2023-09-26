import React from "react";
import Button from "../components/shared/elements/Button";
import styled from "styled-components";
import Menu from "../components/shared/menu/Menu";

const CompCatalog = (props) => {
  return (
    <Container>
      <h1>Component Catalog</h1>
      <div className="catalog_button">
        <Button>button</Button>
        <p>{"<Button>value</Button>"}</p>
        <Button disabled>button</Button>
        <p>{"<Button disabled>value</Button>"}</p>
        <Button color="red">button</Button>
        <p>{"<Button color='red'>value</Button>"}</p>
      </div>
      <div className="catalog_menu">
        <Menu />
        <p>
          {
            "<Menu title='Title' menuArr={['menu1', 'menu2', 'menu3', 'menu4']} setPageIdx={setPageIdx} />"
          }
        </p>
      </div>
    </Container>
  );
};

export const Container = styled.div`
  padding: 16px;

  & > h1 {
    margin: 24px 0;
  }

  & > div {
    margin: 60px 0;
  }

  & > .catalog_button {
    display: fl;
  }
`;
export default CompCatalog;
