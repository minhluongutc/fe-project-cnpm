export class Watch {
  public name: string;
  public description: string;
  public price: number;
  public isWishList: boolean;
  public img: string;
  public imgDetails: string[];

  constructor(name: string, description: string, price: number, isWishList: boolean, img: string, imgDetails: string[]) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.isWishList = isWishList;
    this.img = img;
    this.imgDetails = imgDetails;
  }
}
