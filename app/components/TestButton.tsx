"use client";

import { getInterestRate, getOwedMoney } from "../helpers/helpers";

export default function TestButton({
  owedMoney,
  interestRate,
}: {
  owedMoney: number;
  interestRate: number;
}) {
  async function triggerInterestEffect() {
    await fetch("/api/make-transaction", {
      method: "POST",
      body: JSON.stringify({
        type: "Interest Effect",
        value: owedMoney + (owedMoney * interestRate) / 100 - owedMoney,
        oldBalance: owedMoney,
        newBalance: owedMoney + (owedMoney * interestRate) / 100,
      }),
    });

    await fetch("/api/trigger-interest-effect", {
      method: "PUT",
    });

    window.location.reload();
  }

  return <button onClick={() => triggerInterestEffect()}>Click me</button>;
}
