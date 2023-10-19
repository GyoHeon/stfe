import messageModel from "../models/messages.model.js";

export const getToken = (sender, receiver) =>
  [sender, receiver].sort().join("_");

export const saveMessages = async ({ from, to, message, time }) => {
  const token = getToken(from, to);

  const data = {
    from,
    to,
    message,
    time,
    token,
  };

  messageModel.updateOne(
    { userToken: token },
    {
      $push: { messages: data },
    },
    (err, res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res);
      }
    }
  );
};
