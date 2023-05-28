import { PrismaClient } from "@prisma/client";
import { prisma } from "../lib/prismaclient";

async function getInterestRate(): Promise<number> {
  const interestRate = await prisma.data.findFirst({
    where: {
      name: "interestRate",
    },
  });

  if (!interestRate) {
    return 0;
  }

  return interestRate.value;
}

async function getOwedMoney(): Promise<number> {
  const owedMoney = await prisma.data.findFirst({
    where: {
      name: "owedMoney",
    },
  });

  if (!owedMoney) {
    return 0;
  }

  return Math.floor(owedMoney.value);
}

export { getInterestRate, getOwedMoney };
