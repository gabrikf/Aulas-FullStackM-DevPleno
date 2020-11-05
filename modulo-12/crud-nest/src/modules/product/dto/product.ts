import { Field, ObjectType } from "@nestjs/graphql";

// dto = data transfer object
@ObjectType()
export class Product {

  @Field({ nullable: true })
  id: number
  
  @Field({ nullable: true })
  product: string

  @Field({ nullable: true })
  price: number
}