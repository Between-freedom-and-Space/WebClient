import { injectable } from "inversify";
import { AuthenticateApi } from "../auth-api";
import { RegisterUserRequest, RegisterUserResponse, AuthenticateUserRequest, AuthenticateUserResponse, DeleteUserRequest, VerifyTokenRequest, VerifyTokenResponse, RefreshAccessTokenRequest, RefreshAccessTokenResponse } from "../types";

@injectable()
export class AuthenticateApiImpl implements AuthenticateApi {
    
    public registerUser(data: RegisterUserRequest): RegisterUserResponse {
        throw new Error("Method not implemented.");
    }
    
    public authenticateUser(data: AuthenticateUserRequest): AuthenticateUserResponse {
        throw new Error("Method not implemented.");
    }
    
    public deleteUser(data: DeleteUserRequest): void {
        throw new Error("Method not implemented.");
    }
    
    public verifyAccessToken(data: VerifyTokenRequest): VerifyTokenResponse {
        throw new Error("Method not implemented.");
    }
    
    public verifyRefreshToken(data: VerifyTokenRequest): VerifyTokenResponse {
        throw new Error("Method not implemented.");
    }
    
    public refreshAccessToken(data: RefreshAccessTokenRequest): RefreshAccessTokenResponse {
        throw new Error("Method not implemented.");
    }
    
}