"use client";
import React from "react";

export default function TestInput() {
  const [value, setValue] = React.useState("");

  async function handleFormSubmission() {
    await fetch("/api/update-balance", {
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
