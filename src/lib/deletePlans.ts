import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function markPlansAsDeletedForUser(userSub: string): Promise<void> {
  try {
    await prisma.plan.updateMany({
      where: { user_sub: userSub },
      data: { deleted: true },
    });
    console.log(`Successfully marked plans as deleted for user ${userSub}`);
  } catch (error) {
    console.error(`Error marking plans as deleted: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}

const specificUserSub = 'specific_user_sub'; // Replace with the actual user_sub
markPlansAsDeletedForUser(specificUserSub);