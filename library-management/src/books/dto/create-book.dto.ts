import { IsInt, IsString, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title!: string;

  @IsString()
  author!: string;

  @IsString()
  category!: string;

  @IsInt()
  @Min(1)
  stock!: number;
}
