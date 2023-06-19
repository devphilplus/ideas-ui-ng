import { Item } from "./item";

export interface ItemService {

    fetch(
        filter: string
    ): Array<Item>;
}
