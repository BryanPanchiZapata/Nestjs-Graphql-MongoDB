import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Automobile {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field({ nullable: true })
  model?: string;

  @Field({ nullable: true })
  brand?: string;

  @Field({ nullable: true })
  type?: string;

  @Field((type) => Float, { nullable: true })
  price?: number;
}
