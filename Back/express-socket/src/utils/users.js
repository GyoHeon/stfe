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

export const getUser = (id) => {
  return users.find((user) => user.id === id);
};

export const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return { error: "User not found!" };
  }

  return { user: users.splice(index, 1)[0] };
};
