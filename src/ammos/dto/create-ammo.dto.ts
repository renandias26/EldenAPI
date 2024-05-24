import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator"
import { IsArray, IsString } from "class-validator"

export class CreateAmmoDto {
    @IsString()
    @ApiProperty()
    id?: string

    @IsString()
    @ApiProperty()
    name: string

    @IsString()
    @ApiProperty()
    image?: string

    @IsString()
    @ApiProperty()
    description?: string

    @IsString()
    @ApiProperty()
    type?: string

    @IsString()
    @ApiProperty()
    passive?: string

    @IsArray()
    @ApiProperty()
    attackPower?: {
        name: string,
        amount: number
    }[]
}
