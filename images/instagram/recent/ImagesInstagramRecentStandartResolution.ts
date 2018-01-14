import {IImage} from "../../IImage";
import {IImages} from "../../IImages";
import {IInstagramConfiguration} from "../IInstagramConfiguration";
import {ImagesInstagramRecent} from "./ImagesInstagramRecent";

export class ImagesInstagramRecentStandartResolution implements IImages {
    private readonly origin: IImages;

    constructor(configuration: IInstagramConfiguration) {
        this.origin = new ImagesInstagramRecent(
            configuration,
            "standard_resolution"
        );
    }

    public all(): Promise<IImage[]> {
        return this.origin.all();
    }
}
