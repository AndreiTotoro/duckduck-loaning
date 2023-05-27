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
      value: Math.floor(transactionData.value),
      oldBalance: Math.floor(transactionData.oldBalance),
      newBalance: Math.floor(transactionData.newBalance),
    },
  });
}
