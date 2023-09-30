import { seedAdmin } from "./seed-admin";
import { seedPriorities } from "./seed-priorities";

async function main() {
  await seedAdmin();
  await seedPriorities();
}

main();