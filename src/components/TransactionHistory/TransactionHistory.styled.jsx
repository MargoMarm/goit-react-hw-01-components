import styled from '@emotion/styled';

export const TabelHistory = styled.table`
  font-family: 'Segoe UI';

  background-color: #d8e4e6;
  width: 600px;
  margin: 0px auto;
  margin-bottom: 100px;
  border-collapse: collapse;
  box-shadow: 0px 5px 14px -2px rgba(0, 0, 0, 0.99);
`;

export const TableHeader = styled.th`
  height: 50px;
  text-align: center;
  background-color: #87bdc1;
  border-bottom: 1px solid #8ba1a5;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #fff;
  }
  &:hover {
    cursor: pointer;
    background-color: #1b6f7e8f;
  }
`;

export const TableData = styled.td`
  height: 50px;
  text-align: center;
  border-bottom: 1px solid #8ba1a5;
  border-radius: inherit;
`;
