import { IsInt, IsNotEmpty, Min, IsOptional, IsBoolean, IsNumber, IsPositive, IsUUID } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty({message: "Judul buku harus diisi"})
    readonly title: string;

    // @IsNotEmpty({message: "Author harus diisi"})
    // readonly author: string;

    @IsNotEmpty({message: "ISBN harus diisi"})
    readonly isbn: string;

    @IsNotEmpty({message: "Published year harus diisi"})
    @IsInt({message: "Published year harus berupa angka"})
    @Min(0)
    readonly publishedYear: number;

    @IsOptional()
    @IsBoolean({ message: 'Status ketersediaan harus berupa true atau false' })
    readonly isAvailable?: boolean;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    readonly price?: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    readonly stock?: number;

    @IsOptional()
    @IsUUID()
    readonly categoryId?: string;

    @IsOptional()
    @IsUUID()
    readonly publisherId?: string;
}