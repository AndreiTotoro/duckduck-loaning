import { PrismaClient } from "@prisma/client";

async function getInterestRate(): Promise<number> {
  const prisma = new PrismaClient();
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
  const prisma = new PrismaClient();
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
