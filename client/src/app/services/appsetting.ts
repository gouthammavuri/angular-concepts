export class AppSettings {
    version: string;
    variable: string;
    value: string;
    userId: string;

    constructor(version: string, variable: string, value: string, userId: string) {
        this.version = version;
        this.variable = variable;
        this.value = value;
        this.userId = userId;
    }
}