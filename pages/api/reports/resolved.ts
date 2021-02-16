
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

const handler = async ({}: NextApiRequest, res: NextApiResponse) => {
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
