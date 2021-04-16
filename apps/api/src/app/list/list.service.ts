import { Injectable } from '@nestjs/common';
import { List } from '@shopping-list/shared';

@Injectable()
export class ListService {

  public getLists(): List[] {
    return [
      {
        name: 'list1',
        date: '2021-04-21',
      },
      {
        name: 'list2',
        date: '2021-04-22',
      },
      {
        name: 'list3',
        date: '2021-04-23',
      },
    ]

  }
}
