
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if(!req.body) {
      return res.status(400).json({ error: 'Missing body payload' });
    }
    if(!req.query.reportId) {
      return res.status(400).json({ error: 'Empty reportId param' });
    }
    const reportId = req.query.reportId.toString();

    const { ticketState } = req.body;

    await prisma.report.update({
      where: {
        id: reportId
      },
      data: {
        status: ticketState
      }
    });

    const reports = await prisma.report.findMany({
      where: {
        status: 'OPEN'
      }
    });

    res.status(200).json({ reports });
    res.end();
  } catch(err) {
    throw new Error(err);
  };
};


export default handler;
