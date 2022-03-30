import { IComic } from "./comic.model";
import { IImage } from "./image.model";
import { IUrl } from "./url.model";

export interface ICharacter {
    id?: number;
    name?: string;
    description?: string;
    modified?: Date;
    resourceURI?: string;
    urls?: IUrl[];
    thumbnail?: IImage;
    comics?: IComic[]; 
   /*  stories?: Story[];
    events?: Event[];
    series?: Serie[]; */

}