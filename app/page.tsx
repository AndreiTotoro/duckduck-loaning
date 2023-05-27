import { PrismaClient } from "@prisma/client";
import TestButton from "./components/TestButton";
import { getInterestRate, getOwedMoney } from "./helpers/helpers";

const prisma = new PrismaClient();

export const revalidate = 0;

export default async function Home() {
  const owedMoney = await getOwedMoney();
  const interestRate = await getInterestRate();
  const transactions = await prisma.transactions.findMany({});

  return (
    <div className="text-red-500">
      <h1>
        Current owed sum: <b>{owedMoney} lei</b>
      </h1>
      <h1>
        Current daily interest rate: <b>{interestRate}%</b>
      </h1>
      <TestButton
        interestRate={interestRate}
        owedMoney={owedMoney}
      />
      <div>
        {transactions.map((transaction) => {
          return (
            <div
              className="flex gap-2"
              key={transaction.id}>
              <h1>{transaction.type}</h1>
              <h1>{transaction.value}</h1>
              <h1>{transaction.oldBalance}</h1>
              <h1>{transaction.newBalance}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
