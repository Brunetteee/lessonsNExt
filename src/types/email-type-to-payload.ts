import { EmailTypeEnum } from "../enums/email-type.enum";
import { EmailPayloadType } from "./email-payload.type";
import { PickRequired } from "./pick-required.type";

export type EmailTypeToPayload = {
  [EmailTypeEnum.WELCOME]: PickRequired<EmailPayloadType, "name">;

  [EmailTypeEnum.FORGOT_PASSWORD]: PickRequired<
    EmailPayloadType,
    "name" | "email"
  >;

  [EmailTypeEnum.OLD_VISIT]: PickRequired<EmailPayloadType, "email">;
};
