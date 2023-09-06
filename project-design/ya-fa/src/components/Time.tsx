import { Button } from "antd";
import { useEffect, useState } from "react";
import { diffTime } from "../utils/diffTime";

interface TimeProps {
  initialDate: Date;
}

export function Time({ initialDate }: TimeProps) {
  const [date, setDate] = useState(new Date());
  const [initialTime, setInitialTime] = useState(initialDate);
  const [isOn, setIsOn] = useState(false);

  const startWork = () => {
    setInitialTime(new Date());
    setIsOn(!isOn);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      style={{
        width: "380px",
        padding: "2em 4em",
        margin: "2em auto",
        border: "1px solid gray",
        borderRadius: "2em",
        backgroundColor: "white",
      }}
    >
      <span style={{ fontSize: "5em", fontWeight: "bolder" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isOn && (
            <>
              <div
                style={{
                  fontSize: "1rem",
                  backgroundColor: "lime",
                  padding: "0.2em 0.5em",
                  lineHeight: "1em",
                  borderRadius: "0.5em",
                  position: "absolute",
                  left: "-30px",
                  top: "50px",
                }}
              >
                on
              </div>
            </>
          )}
          {date.getHours()} : {date.getMinutes().toString().padStart(2, "0")} :{" "}
          {date.getSeconds().toString().padStart(2, "0")}
        </div>
      </span>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "380px",
        }}
      >
        <Button size="large" disabled style={{ width: "200px" }}>
          {isOn ? diffTime(initialTime) + "동안 일하는 중" : "출근 전"}
        </Button>

        <Button
          type={isOn ? "primary" : "default"}
          size="large"
          onClick={startWork}
          style={{ width: "160px" }}
        >
          {isOn ? "퇴근" : "출근"}
        </Button>
      </div>
    </section>
  );
}
