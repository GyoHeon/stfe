import { List, Button, Card } from "antd";
import { StopOutlined } from "@ant-design/icons";
import styled from "styled-components";

const FollowList = ({ header, data }) => {
  return (
    <ListWrapper>
      <List
        grid={{ gutter: 4, ws: 2, md: 3 }}
        size="small"
        header={<div>{header}</div>}
        loadMore={
          <div style={{ textAlign: "center", margin: "10px 0" }}>
            <Button>더보기</Button>
          </div>
        }
        boradered
        datasource={data}
        renderItem={(item) => (
          <List.Item style={{ marginTop: 20 }}>
            <Card actions={[<StopOutlined key="stop" />]}>
              <Card.Meta description={item.nickname} />
            </Card>
          </List.Item>
        )}
      />
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  margin-bottom: 20px;
`;

export default FollowList;
