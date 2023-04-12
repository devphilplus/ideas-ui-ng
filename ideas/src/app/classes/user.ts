import { environment } from "src/environments/environment";
// import { empty } from "uuidv4";

export class User {

    private static _anonymous: User;

    constructor(
        private _email: string,
        private _name: string,
        private _tenant_id: string,
        private _tenants: Array<{
            id: string,
            active: boolean,
            name: string,
            slug: string
        }>
    ) {
    }

    get email(): string {
        return this._email;
    }

    get name(): string {
        return this._name == '' ? environment.default_user : this._name;
    }

    get is_signed_in(): boolean {
        return (sessionStorage.getItem(environment.session_token_key) || '') != ''
            && this.email != '';
    }

    public static anonymous(): User {
        if (this._anonymous == null) {
            this._anonymous = new User('', 'anonymous', '', []);
        } 
        return this._anonymous;
    }

    get tenant_id(): string {
        return this._tenant_id;
    }

    get tenants(): Array<{
        id: string,
        active: boolean,
        name: string,
        slug: string
    }> {
        return this._tenants;
    }
}
