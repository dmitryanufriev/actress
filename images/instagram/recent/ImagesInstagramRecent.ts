import * as axios from "axios";

import {IImage} from "../../IImage";
import {IImages} from "../../IImages";
import {IInstagramConfiguration} from "../IInstagramConfiguration";
import {ImageInstagram} from "../ImageInstagram";

export class ImagesInstagramRecent implements IImages {
    private readonly URL = "https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN";
    private readonly axiosInstance: axios.AxiosStatic;
    private readonly configuration: IInstagramConfiguration;
    private readonly resolution: string;

    constructor(configuration: IInstagramConfiguration, resolution: string) {
        this.axiosInstance = axios.default;
        this.configuration = configuration;
        this.resolution = resolution;
    }

    public async all(): Promise<IImage[]> {
        const response = await this.axiosInstance.get(
            this.URL.replace("access_token=ACCESS-TOKEN", `access_token=${this.configuration.accessToken()}`)
        );
        return response
            .data
            .data
            .filter(
                (json: any) => json.type === "image"
            )
            .map(
                (json: any) => new ImageInstagram(
                    json.id,
                    json.link,
                    this.resolution,
                    json.images
                )
            );
    }
}
