import Tokens = require("csrf");
import {ICsrfTokensConfiguration} from "./ICsrfTokensConfiguration";

export class CsrfTokens {
    private tokens: Tokens;
    private configuration: ICsrfTokensConfiguration;

    constructor(configuration: ICsrfTokensConfiguration) {
        this.tokens = new Tokens();
        this.configuration = configuration;
    }

    public token(): string {
        return this.tokens.create(
            this.configuration.secret()
        );
    }

    public valid(token: string): boolean {
        return this.tokens.verify(
            this.configuration.secret(),
            token
        );
    }
}
