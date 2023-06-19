import { Item } from "./item";

export interface SelectionClient {

    selected(
        items: Array<Item>
    ): void;
}
