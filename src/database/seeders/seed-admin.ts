import * as bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma/client";
import EnvVars from "../../constantes/EnvVars";

async function seedAdmin() {
  try {
    const adminAlreadyExists = await prisma.user.findFirst({
      where: {
        isSuperAdmin: true,
      },
    });

    console.log(EnvVars.AdminPassword);

    if (!adminAlreadyExists) {
      const hashedPassword = await bcrypt.hash(
        EnvVars.AdminPassword,
        EnvVars.Bcrypt.Salt
      );

      await prisma.user.create({
        data: {
          firstName: "admin",
          lastName: "admin",
          username: "admin",
          email: "admin@taskmanager.com",
          isSuperAdmin: true,
          password: hashedPassword,
        },
      });
    }
  } catch (error) {}
}

export { seedAdmin };
