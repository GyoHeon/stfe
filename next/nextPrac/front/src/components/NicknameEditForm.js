import { Form, Input } from "antd";
import styled from "styled-components";

const NicknameEditForm = () => {
  return (
    <FormWrapper>
      <Form>
        <Input.Search addonBefore="NICKNAME" enterButton="EDIT" />
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

export default NicknameEditForm;
