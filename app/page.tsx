import { PrismaClient } from "@prisma/client";
import TestButton from "./components/TestButton";
import { getInterestRate, getOwedMoney } from "./helpers/helpers";
import TestInput from "./components/TestInput";

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
      <TestInput />
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>Type</th>
            <th>Value</th>
            <th>Old Balance</th>
            <th>New Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.value}</td>
                <td>{transaction.oldBalance}</td>
                <td>{transaction.newBalance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
