import { ICharacter } from "./character.model";
import { IImage } from "./image.model";

export interface IComic{
    id?: number;
    title?: string;
    description?: string;
    pageCount?: number;
    thumbnail?: IImage;
    characters?: ICharacter[];
}