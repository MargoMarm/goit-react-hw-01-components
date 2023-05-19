import styled from '@emotion/styled';

export const List = styled.ul`
  font-family: 'Segoe UI';
  list-style: none;
  background-color: #d8e4e6;
  width: 350px;
  margin: 0px auto;
  margin-bottom: 60px;
  padding: 30px 0;
  border-radius: 10px;
  box-shadow: 0px 5px 14px -2px rgba(0, 0, 0, 0.99);
`;

export const ListItem = styled.li`
  display: flex;
  width: 300px;
  background-color: #b4d4d6;
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  padding: 7px;
  margin-right: 20px;
  background-color: #d8e4e6;
  border-radius: 8px;
  box-shadow: 1px 2px 1px rgb(0 0 0 / 12%), 1px 2px 2px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 20%);
`;

export const Name = styled.p`
  font-size: 19px;
  line-height: 1.54;
  margin-left: 20px;
`;
