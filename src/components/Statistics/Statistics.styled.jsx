import styled from '@emotion/styled';

export const Section = styled.section`
  width: 350px;
  margin: 0px auto;
  margin-bottom: 60px;
  box-shadow: 0px 5px 14px -2px rgba(0, 0, 0, 0.99);
  border-radius: 10px;
  background-color: #d8e4e6;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 22px;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  padding: 10px;

  &:first-of-type {
    border-bottom-left-radius: inherit;
  }

  &:last-child {
    border-bottom-right-radius: inherit;
  }

`;

export const Label = styled.span`
  font-size: 16px;
  padding-top: 5px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  padding-bottom: 5px;
`;
