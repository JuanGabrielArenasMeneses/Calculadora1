export class Product{

    
}
export class Article{
    constructor(
        public codeArticle: number,
        public price: number,
        public brand: string,
        public model: string,
        public name: string,
        public description:string,
        public registerDate:string,
        public category:string,
        public status:boolean,
        public image:string
    ){
    }
}
export class ArticleRepair{
    constructor(
        public codeArticle: number,
        public price: number,
        public name: string,
        public description:string,
        public registerDate:string,
        public mesureUnit: string,
        public frecuency:string,
        public category:string,
        public status:boolean,
        public image:string
    ){
    }    
}
