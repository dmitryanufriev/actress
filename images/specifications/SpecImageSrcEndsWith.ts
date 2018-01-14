import {ISpecification} from "../../specifications/ISpecification";
import {IImage} from "../IImage";

export class SpecImageSrcEndsWith implements ISpecification<IImage> {
    private substring: string;

    constructor(substring: string) {
        this.substring = substring;
    }

    public satisfiedBy(instance: IImage): boolean {
        return instance.src().endsWith(this.substring);
    }
}
