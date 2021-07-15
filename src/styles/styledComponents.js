import styled from 'styled-components';

export const PageHeader = styled.header` /* stylelint-disable */
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 50px;
  img {
    height: 150%;
  }

  div {
    display: flex;
    height: 100%;

    button {
      border: transparent;
      background-color: transparent;
      font-size: 28px;
      height: 36px;
      width: 36px;
    }
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CategoryList = styled.ul`
  align-items: stretch;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: whitesmoke;
  box-shadow: 2px 2px 5px gray;
  padding: 20px 10px;
  margin-bottom: 16px;
  margin-top: 64px;
`;

export const CategoryItem = styled.li`
  border: none;
  margin: 5px;
  padding: 0;
  border-radius: 5px;

  button {
    background-color: #51A470;
    border-radius: 5px;
    border: none;
    color: white;
    width: 100%;
    padding: 5px;
    transition: background-color 0.1s, color 0.1s;

    :hover {
      color: yellow;
      box-shadow: 1px 1px 5px gray;
      background-color: #41823B;
    }
  }
`;

export const CardItem = styled.li`
  
`;
