import { Item } from "../items/item/item.interface";

export class ItemAdmin implements Item{
 constructor(
  public name: string,
  public typeList?: string[],
  public sizeList?: string[],
  public colorList?: string[]
  ){}


}
