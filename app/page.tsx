import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getOwedMoney(): Promise<number> {
  const owedMoney = await prisma.data.findFirst({
    where: {
      name: "owedMoney",
    },
  });

  if (!owedMoney) {
    return 0;
  }

  return owedMoney?.value;
}

export default async function Home() {
  const owedMoney = await getOwedMoney();

  return <div className="text-red-500">{owedMoney}</div>;
}
