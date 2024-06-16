interface IAuthorizationResult{
    accessToken: string | null
    refreshToken: string | null
    user: IUser | null
}

