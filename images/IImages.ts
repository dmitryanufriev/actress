import {IImage} from "./IImage";

export interface IImages {
    all(): Promise<IImage[]>;
}
