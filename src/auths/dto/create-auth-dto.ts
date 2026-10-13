import { IsNotEmpty } from "class-validator";

export class CreateAuthDto {
    @IsNotEmpty({message: "Username harus diisi"})
    readonly username: string;

    @IsNotEmpty({message: "Email harus diisi"})
    readonly email: string;

    @IsNotEmpty({message: "Password harus diisi"})
    readonly password: string;
}