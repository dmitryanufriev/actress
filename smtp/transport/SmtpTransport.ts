import * as nodemailer from "nodemailer";

import {SmtpMessage} from "../message/SmtpMessage";
import {ISmtpTransport} from "./ISmtpTransport";

export class SmtpTransport implements ISmtpTransport {
    private readonly configuration: any;

    constructor(configuration: any) {
        this.configuration = configuration;
    }

    public async send(message: SmtpMessage): Promise<void> {
        const transport = nodemailer.createTransport(this.configuration);
        const ready = await transport.verify();
        if (ready) {
            await transport.sendMail(
                message.message()
            );
        } else {
            console.log("SMTP transport fail.");
        }
    }
}
