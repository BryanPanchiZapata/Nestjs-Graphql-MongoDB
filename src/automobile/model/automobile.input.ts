import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class AutomobileInput {
  @Field({ nullable: true })
  model?: string;

  @Field({ nullable: true })
  brand?: string;

  @Field({ nullable: true })
  type?: string;

  @Field((type) => Int, { nullable: true })
  price?: number;
}
