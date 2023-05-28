import { getOwedMoney } from "@/app/helpers/helpers";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req: Request) {
  const value = await req.json();
  const owedMoney = await getOwedMoney();
  const newOwedMoney = owedMoney + Number(value.value);
  await prisma.data.update({
    where: {
      id: 1,
    },
    data: {
      value: newOwedMoney,
    },
  });
}
