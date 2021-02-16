
import { PrismaClient } from '@prisma/client';
import reports from './data/reports.json';

const prisma = new PrismaClient();

async function main() {
  for await (let report of reports.elements) {
    const { id, state, payload } = report;
    await prisma.report.create({
      data: {
        id,
        status: state,
        type: payload?.reportType,
        message: payload?.message ?? ''
      },
    });
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
