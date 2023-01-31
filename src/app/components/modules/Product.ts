export class Product{
    //precio, la marca, el modelo ,código del artículo ,nombre, descripción y fecha de registro.
    name:string="";
    code:number=0;
    characteristic:string="";
    price:number=0;
    type?:boolean;
    status:boolean=false;

    constructor(name:string, price:number){
        this.name=name;
        this.price=price;
    }
}