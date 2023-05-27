"use client";

async function triggerInterestEffect() {
  await fetch("/api/trigger-interest-effect", {
    method: "PUT",
  });

  await fetch("/api/make-transaction", {
    method: "POST",
    body: JSON.stringify({
      type: "interest effect",
      value: 0,
      oldBalance: 0,
      newBalance: 0,
    }),
  });
  window.location.reload();
}

export default function TestButton() {
  return <button onClick={() => triggerInterestEffect()}>Click me</button>;
}
