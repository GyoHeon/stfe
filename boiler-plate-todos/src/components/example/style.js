import styled from "@emotion/styled";

// 큰 단위를 styled.div로 만들고 내부의 요소들은 css 선택자로 관리해주시면 좋을 것 같습니다.
// 필요에 따라 여러개의 css-in-js 요소를 선언하여 사용하셔도 좋을 것 같습니다.

export const ExampleWrapper = styled.div`
  background-color: #dff9fb;
`;
export const Input = styled.input`
  background-color: #686de0;
  height: 100px;
  width: 500px;
  margin: 0 auto;
  font-size: 32px;
`;
export const Ul = styled.ul`
  background-color: #ff7979;
  height: 100px;
  width: 500px;
`;
export const Li = styled.li`
  background-color: #ffbe76;
  height: 50px;
  width: 100%;
`;
