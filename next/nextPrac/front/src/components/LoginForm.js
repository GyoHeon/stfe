import { Button, Form, Input } from "antd";
import { useState, useCallback } from "react";
import useInput from "../hooks/useInput";
import Link from "next/link";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../reducers";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">PASSWORD</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          LOGIN
        </Button>
        <Link href="/signup">
          <a>
            <Button>SIGNUP</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
const FormWrapper = styled(Form)`
  padding: 10px;
`;

export default LoginForm;
