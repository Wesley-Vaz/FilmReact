import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;

  h1 {
    text-align: center;
    margin: 4rem 0;
  }

  .filtro-genero {
    display: flex;
    align-items: center;
    gap: 12px;
    width: fit-content;
    margin: 60px 10%;
    padding: 12px 16px;
    background: #151923;
    border: 1px solid #343b4a;
    border-radius: 12px;
  }

  .filtro-genero label {
    color: #f4f6fb;
    font-size: 1rem;
    font-weight: 600;
  }

  .filtro-genero select {
    min-width: 180px;
    padding: 10px 36px 10px 12px;
    color: #f4f6fb;
    background-color: #242b38;
    border: 1px solid #4b5568;
    border-radius: 8px;
    font: inherit;
    cursor: pointer;
  }

  .filtro-genero select:focus {
    outline: 2px solid #6c8cff;
    outline-offset: 2px;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }
  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }
  a {
    transition: all 0.3s;
  }
  a:hover {
    transform: scale(1.1);
  }
`;

export const Btn = styled.button`
  margin-top: 5px;
  padding: 0.7rem 3rem;
  border: none;
  border-radius: 15px;
  color: #212121;
  background-color: #ffffff;
  font-weight: 1000;
  font-size: 12 px;
  cursor: pointer;
  transition: all 250ms;
`;
