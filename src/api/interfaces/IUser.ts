interface IUser {
    id: number;
    login: string;
    name: string;
    surname: string;
    patronymic: string;
    role: IRole
}