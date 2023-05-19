import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d8e4e6;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0px 5px 14px -2px rgba(0, 0, 0, 0.99);
  margin: 20px auto 60px;
  padding: 15px 0px 0px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const ProfileImg = styled.img`
  display: block;
  width: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UserName = styled.p`
  font-family: 'Segoe UI';
  font-size: 22px;
  line-height: 1.62;
  font-weight: bold;
  color: #000000;
  margin-top: 0px;
  margin-bottom: 10px;
`;

export const UserInfo = styled.p`
  font-family: 'Segoe UI';
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 1.58;
`;

export const StatsList = styled.ul`
  font-family: 'Segoe UI';
  list-style: none;
  background-color: #b4d4d6;
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-top: 1px solid #101030;
  :not(:last-child) {
    border-right: 1px solid #101030;
  }
  :not(:last-child) span {
    border-right: none;
  }
`;

export const Label = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  justify-content: center;
`;

export const Quantity = styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: bold;
  margin: 10px auto;
`;
