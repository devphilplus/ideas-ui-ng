import { environment } from "src/environments/environment";

export class User {

    private static _anonymous: User;

    constructor(
        private _email: string,
        private _name: string
    ) {
    }

    get email(): string {
        return this._email;
    }

    get name(): string {
        return this._name
    }

    get is_signed_in(): boolean {
        return (sessionStorage.getItem(environment.session_token_key) || '') != ''
            && this.email != '';
    }

    public static anonymous(): User {
        if (this._anonymous == null) {
            this._anonymous = new User('', 'anonymous');
        } 
        return this._anonymous;
    }
}
