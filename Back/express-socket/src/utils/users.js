export const users = [];

export const addUser = ({ id, username, room }) => {
  username = username.trim();
  room = room.trim();

  if (!(username && room)) {
    return { error: "Username and room are required!" };
  }

  const isExistingUser = users.find(
    (user) => user.username === username && user.room === room
  );

  if (isExistingUser) {
    return { error: "Username is in use!" };
  }

  const user = { id, username, room };
  users.push(user);

  return { user };
};

export const getUsersInRoom = (room) => {
  room = room.trim();
  return users.filter((user) => user.room === room);
};
