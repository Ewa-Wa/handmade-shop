export class Item {
 constructor(
  public name: string,
  public type?: string,
  public size?: string,
  public color?: string
  ){}
  
setType(type: string){
     this.type = type;
 }

setSize(size: string){
     this.size = size;
 }

setColor(color: string){
    this.color = color;
 }
}
