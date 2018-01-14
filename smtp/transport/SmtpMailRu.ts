import {SmtpMessage} from "../message/SmtpMessage";
import {ISmtpTransport} from "./ISmtpTransport";
import {SmtpTransport} from "./SmtpTransport";

export class SmtpMailRu implements ISmtpTransport {
    private readonly origin: ISmtpTransport;

    constructor(user: string, pass: string) {
        this.origin = new SmtpTransport({
                host: "smtp.mail.ru",
                port: 465,
                auth: {
                    user,
                    pass
                },
                pool: true,
                secure: true
            }
        );
    }

    public async send(message: SmtpMessage): Promise<void> {
        await this.origin.send(message);
    }
}
