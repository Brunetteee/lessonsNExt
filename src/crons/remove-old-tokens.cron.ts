import { CronJob } from "cron";

import { configs } from "../config/config";
import { timeHelper } from "../helpers/time.helper";
import { tokenRepository } from "../repositories/token.repository";

const handler = async () => {
  try {
    const { value, unit } = timeHelper.parsConfigString(
      configs.JWT_REFRESH_EXPIRATION,
    );

    const date = timeHelper.subtractByParams(value, unit);
    const deletedCount = await tokenRepository.deleteBeforeDate(date);
    console.log(`Deleted ${deletedCount} old tokens`);
  } catch (error) {
    console.error(error);
  }
};
export const removeOldTokenCronJob = new CronJob(" * * * * *", handler);
// export const removeOldTokenCronJob = new CronJob("0,20,40 * * * * *", handler);
