import {ISpecification} from "../specifications/ISpecification";
import {IImage} from "./IImage";
import {IImages} from "./IImages";

export class ImagesBySpec implements IImages {
    private specification: ISpecification<IImage>;
    private origin: IImages;

    constructor(specification: ISpecification<IImage>, origin: IImages) {
        this.specification = specification;
        this.origin = origin;
    }

    public async all(): Promise<IImage[]> {
        const images = await this.origin.all();
        return images.filter(
            (x: IImage) => this.specification.satisfiedBy(x)
        );
    }
}
