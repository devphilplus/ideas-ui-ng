export class Tenant {

    constructor(
        private _id: string,
        private _active: boolean,
        private _name: string,
        private _slug: string
    ) {}

    get id(): string {
        return this._id;
    }

    get active(): boolean {
        return this._active;
    }

    get name(): string {
        return this._name;
    }

    get slug(): string {
        return this._slug;
    }
}
