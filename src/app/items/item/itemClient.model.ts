import { Item } from "./item.interface";

export class ItemClient implements Item{
 constructor(
  public name: string,
  public type?: string,
  public size?: string,
  public color?: string,
  public typeList?: string[],
  public sizeList?: string[],
  public colorList?: string[]
  ){}


}
