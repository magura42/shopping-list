import {Module} from "@nestjs/common";
import {ListController} from "./list.controller";
import {ListService} from "./list.service";
import {MongooseModule} from "@nestjs/mongoose";
import {ListSchema} from "./list.schema";

@Module({
  controllers: [ListController],
  providers: [ListService],
  imports: [ MongooseModule.forFeature([{ name: 'List', schema: ListSchema }]) ]
})
export class ListModule { }
