import { Controller, Get } from '@nestjs/common';
import { List } from '@shopping-list/shared';
import {ListService} from "./list.service";

@Controller('list')
export class ListController {

  constructor(private listService: ListService) {
  }

  @Get()
  getLists(): Promise<List[]> {
    return this.listService.getLists()
  }
}
