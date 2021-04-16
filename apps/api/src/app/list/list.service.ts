import { Injectable } from '@nestjs/common';
import { List } from '@shopping-list/shared';

@Injectable()
export class ListService {

  public getLists(): List[] {
    return [
      {
        name: 'list1',
      },
      {
        name: 'list2',
      },
      {
        name: 'list3',
      },
    ]

  }
}
