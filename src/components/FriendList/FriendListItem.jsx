import PropTypes from 'prop-types';
import { Avatar, ListItem, Name, Status } from './FriendList.styled';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <ListItem>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar"></Avatar>
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
