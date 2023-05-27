"use client";

async function triggerInterestEffect() {
  await fetch("/api/trigger-interest-effect", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
  window.location.reload();
}

export default function TestButton() {
  return <button onClick={() => triggerInterestEffect()}>Click me</button>;
}
