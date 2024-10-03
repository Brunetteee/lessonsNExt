import { removeOldTokenCronJob } from "./remove-old-tokens.cron";
import { testCronJob } from "./test.cron";

export const cronRunner = () => {
  testCronJob.start();
  removeOldTokenCronJob.start();
};
