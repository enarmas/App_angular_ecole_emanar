export class User {
    email?: string;
    password: string;
    inscription_id:string;

    hasEmail() {
        return this.email != '';
    }
}