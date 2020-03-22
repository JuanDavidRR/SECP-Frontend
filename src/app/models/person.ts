export interface Person{
    auto_person?: number;
    first_name?: string;
    second_name?: string;
    first_lastname?: string;
    second_lastname?: string;
    cedula?: number;
    email?: string;
    password?: string;
    username?: string;
    image?: string;
    user_modific?: string;
    date_row?: Date
}
export interface personSignIn{
    username?: string;
    password?: string
}