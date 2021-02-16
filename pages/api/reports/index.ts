
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  req;
  try {
    let reports: any = await prisma.report.findMany({
      where: {
        status: 'OPEN'
      }
    });

    return res.status(200).json({ reports });
  } catch(err) {
    throw new Error(err);
  };
};

export default handler;
