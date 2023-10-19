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

export const fetchMessages = async (io, sender, receiver) => {
  const token = getToken(sender, receiver);
  const foundToken = await messageModel.findOne({ userToken: token });
  if (foundToken) {
    io.to(sender).emit("stored-messages", { messages: foundToken.messages });
  } else {
    const data = {
      userToken: token,
      messages: [],
    };

    const message = new messageModel(data);
    const savedMessage = message.save();
    if (savedMessage) {
      console.log("saved");
    } else {
      console.error("error");
    }
  }
};
