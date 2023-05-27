import { NextResponse } from "next/server";
import { getInterestRate, getOwedMoney } from "../../helpers/helpers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT() {
  const owedMoney = await getOwedMoney();
  const interestRate = await getInterestRate();

  const newOwedMoney = owedMoney + (owedMoney * interestRate) / 100;

  await prisma.data.update({
    where: {
      id: 1,
    },
    data: {
      value: newOwedMoney,
    },
  });
}
