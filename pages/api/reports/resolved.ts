
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
prisma;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  req;
  try {
    let resolved: any = await prisma.report.findMany({
      where: {
        status: 'RESOLVED'
      }
    });

    return res.status(200).json({ resolved });
  } catch(err) {
    throw new Error(err);
  };
};

export default handler;
