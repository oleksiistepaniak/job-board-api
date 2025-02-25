export class AppConf {
    constructor(private readonly _PORT: string,
                private readonly _DB_URL: string,
                private readonly _JWT_SECRET: string) {
    }

    get PORT() {
        return this._PORT;
    }

    get DB_URL() {
        return this._DB_URL;
    }

    get JWT_SECRET() {
        return this._JWT_SECRET;
    }
}