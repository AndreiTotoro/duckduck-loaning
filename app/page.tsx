import { PrismaClient } from "@prisma/client";
import TestButton from "./components/TestButton";
import { getInterestRate, getOwedMoney } from "./helpers/helpers";

const prisma = new PrismaClient();

export const revalidate = 0;

export default async function Home() {
  const owedMoney = await getOwedMoney();
  const interestRate = await getInterestRate();

  return (
    <div className="text-red-500">
      <h1>
        Current owed sum: <b>{owedMoney} lei</b>
      </h1>
      <h1>
        Current daily interest rate: <b>{interestRate}%</b>
      </h1>
      <TestButton />
    </div>
  );
}
