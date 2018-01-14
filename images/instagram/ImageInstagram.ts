import {IImage} from "../IImage";

export class ImageInstagram implements IImage {
    private readonly imgId: string;
    private readonly imgHref: string;
    private readonly imgResolution: string;
    private readonly apiImagesJson: any;

    constructor(id: string, href: string, resolution: string, apiImagesJson: any) {
        this.imgId = id;
        this.imgHref = href;
        this.imgResolution = resolution;
        this.apiImagesJson = apiImagesJson;
    }

    public id(): string {
        return this.imgId;
    }

    public src(): string {
        return this.apiImagesJson[this.imgResolution].url;
    }

    public href(): string {
        return this.imgHref;
    }
}
