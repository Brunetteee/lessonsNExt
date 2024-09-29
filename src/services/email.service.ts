import path from "node:path";

import nodemailer, { Transporter } from "nodemailer";
import hbs from "nodemailer-express-handlebars";

import { configs } from "../config/config";
import { emailConstants } from "../constants/email.constants";
import { EmailTypeEnum } from "../enums/email-type.enum";
import { EmailTypeToPayload } from "../types/email-type-to-payload";

class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      from: "No reply",
      auth: {
        user: configs.SMTP_EMAIL,
        pass: configs.SMTP_PASSWORD,
      },
    });
    const hbsOptions = {
      viewEngine: {
        extname: ".hbs",
        partialsDir: path.join(process.cwd(), "src", "templates", "partials"),
        layoutsDir: path.join(process.cwd(), "src", "templates", "layouts"),
      },
      viewPath: path.join(process.cwd(), "src", "templates", "views"),
      extName: ".hbs",
    };

    this.transporter.use("compile", hbs(hbsOptions));
  }

  public async sendMail<T extends EmailTypeEnum>(
    type: T,
    to: string,
    context: EmailTypeToPayload[T],
  ): Promise<void> {
    const { subject, template } = emailConstants[type];

    context["frontUrl"] = configs.APP_FRONT_URL;
    const options = { to, subject, template, context };
    await this.transporter.sendMail(options);
  }
}

export const emailService = new EmailService();
