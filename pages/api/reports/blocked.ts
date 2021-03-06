
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

const handler = async ({}: NextApiRequest, res: NextApiResponse) => {
  try {
    let blocked: any = await prisma.report.findMany({
      where: {
        status: 'BLOCKED'
      }
    });

    return res.status(200).json({ blocked });
  } catch(err) {
    throw new Error(err);
  };
};

export default handler;