import { useState } from "react";

export function Commute() {
  const [date, setDate] = useState(new Date());

  return (
    <main>
      <h1>Commute</h1>
      <section>
        {date.getFullYear()}
        <br />
        {date.getMonth() + 1}
        <br />
        {date.getDate()}
      </section>
      <section
        style={{
          width: "fit-content",
          padding: "2em 4em",
          border: "1px solid gray",
          borderRadius: "2em",
          backgroundColor: "white",
        }}
      >
        <span style={{ fontSize: "6em", fontWeight: "bolder" }}>
          {date.getHours()} : {date.getMinutes().toString().padStart(2, "0")}
        </span>
        <div>
          <button>출근</button>
        </div>
      </section>
    </main>
  );
}
