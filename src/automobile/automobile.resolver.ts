import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { AutomobileService } from './automobile.service';
import { AutomobileInput } from './model/automobile.input';
import { Automobile } from './model/automobile.model';

@Resolver((of) => Automobile)
export class AutomobileResolver {
  constructor(private automobileService: AutomobileService) {}

  @Query((returns) => [Automobile])
  async Automobiles() {
    return await this.automobileService.getAutomobiles();
  }

  @Query((returns) => Automobile)
  async automobile(@Args('id') id: string) {
    return await this.automobileService.getAutomobileByID(id);
  }

  @Mutation((returns) => Automobile)
  async createAutomobile(@Args('automobile') automobile: AutomobileInput) {
    return await this.automobileService.createAutomobile(automobile);
  }

  @Mutation((returns) => Automobile)
  async editAutomobile(
    @Args('id') id: string,
    @Args('automobile') automobile: AutomobileInput,
  ) {
    return await this.automobileService.updateAutomobile(id, automobile);
  }

  @Mutation((returns) => Automobile)
  async deleteAutomobile(@Args('id') id: string) {
    return await this.automobileService.deleteAutomobile(id);
  }
}
