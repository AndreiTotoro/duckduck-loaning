"use client";
import React from "react";

export default function TestInput({ owedMoney }: { owedMoney: number }) {
  const [value, setValue] = React.useState("");

  async function handleFormSubmission() {
    await fetch("api/make-transaction", {
      method: "POST",
      body: JSON.stringify({
        type: "Blance Change",
        value: Number(value),
        oldBalance: owedMoney,
        newBalance: owedMoney + Number(value),
      }),
    });

    await fetch("api/update-balance", {
      method: "PUT",
      body: JSON.stringify({ value: Number(value) }),
    });
    setValue("");
    window.location.reload();
  }

  return (
    <div className="flex gap-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleFormSubmission()}>Click me</button>
    </div>
  );
}
