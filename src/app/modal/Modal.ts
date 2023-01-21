export class User {
  id: number;
  username: string;
  password: string;
  address: string;
  admin: boolean;
  cardNumber: string;
  cvv: any;
  email: string;
  nameOnCard: string

}
export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  pictureUrl: string;
}
export interface Category {
  id: number,
  name: string
}

export class Proprety {
  public idProprety : number ; // Clé primaire
public nom: string;
public surface : number;
public type: string;
public adresse: string;
public region: string;
public image: string;
public prix: number;

}


export class Report {
  public id: any;
  public description: any;
  public reason: any;
  public confirmation: any;

}


export class Visite {
  public idViste : number ; // Clé primaire
public confirmation : boolean;
public dateVisite: Date ;
}

export class Aide {
  public idUser: any;
  public monatnt: any;
  public periode: any; 
  public type_aide: any;
  
  }
  

export interface Comment {
  id: number,
  addedAt: any,
  addedBy: string,
  message: string,
  title: string
}
export interface ReplayComment {
  id: number,
  addedAt: any,
  addedBy: string,
  messageReplay: string
}
export interface Order {
  id: number,
  dateCreated: any,
  status: any
}
export class ProductOrder {
  id: number;
  product: Product;
  quantity: number = 1;
  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity = 1;
  }
}
export class ProductOrders {
  productOrders: ProductOrder[] = [];
}
export interface Product {
  id: number,
  description: string,
  name: string,
  pictureUrl: string,
  price: number
}
export interface Tag {
  id: number,
  name: string,
  products: any
}
export class Item {
  name: string;
  value: string;
  price: number;
}
export class UpdateProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
}
export const ITEMS: Item[] = [
  {
    name: 'TakAway delivery ',
    value: 'item_1',
    price: 1.99
  },
  {
    name: 'Relay delivery ',
    value: 'item_2',
    price: 2.99
  },
  {
    name: 'Express delivery ',
    value: 'item_3',
    price: 3.99
  },
  {
    name: 'Direct  delivery',
    value: 'item_4',
    price: 4.99
  }
];
