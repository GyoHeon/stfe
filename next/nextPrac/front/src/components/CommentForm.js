import { Form, Input, Button } from "antd";
import { useCallback } from "react";
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, setCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    post.id;
  }, [commentText]);
  const onChangeCommentText = useCallback(() => {}, []);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button
          style={{ position: "absolute", right: 0, bottom: -40 }}
          type="primary"
          htmlType="submit"
        >
          SUBMIT
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
