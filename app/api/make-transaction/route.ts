import { NextResponse } from "next/server";
import { getInterestRate, getOwedMoney } from "../../helpers/helpers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const transactionData = await req.json();
  console.log(transactionData);
  await prisma.transactions.create({
    data: {
      type: transactionData.type,
      value: transactionData.value,
      oldBalance: transactionData.oldBalance,
      newBalance: transactionData.newBalance,
    },
  });
}
