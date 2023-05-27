import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getOwedMoney() {
  const owedMoney = await prisma.data.findFirst({
    where: {
      name: "owedMoney",
    },
  });
  return owedMoney?.value;
}

export default async function Home() {
  const owedMoney = await getOwedMoney();

  return <div className="text-red-500">{owedMoney}</div>;
}
