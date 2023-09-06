import { useState } from "react";
import { Time } from "./Time";

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

export const TimeModal = () => {
  const [date] = useState(new Date());

  return (
    <main>
      <h1>출퇴근</h1>
      <span style={{ color: "gray" }}>
        {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}{" "}
        {DAYS[date.getDay()]}
      </span>
      <Time initialDate={date} />
    </main>
  );
};
