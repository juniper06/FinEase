import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateCategoryDto{
    @IsNotEmpty()
    @IsString()
    @Length(1,30)
    categoryName: string