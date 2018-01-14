import {Response} from "express";
import {IOutput} from "./IOutput";
import {OutStatus} from "./OutStatus";
import {OutText} from "./OutText";

export class OutStatusForbidden implements IOutput {
    private statusCode: number = 403;
    private origin: IOutput;

    constructor(origin: IOutput) {
        this.origin = new OutStatus(
            this.statusCode,
            origin
        );
    }

    public with(values: any): IOutput {
        return new OutStatusForbidden(
            this.origin.with(values)
        );
    }

    public write(res: Response): void {
        this.origin.write(res);
    }
}
