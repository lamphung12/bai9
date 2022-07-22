import {Category} from "./Category";

export interface ProductsBe{
  id?: string;
  name?: string;
  price?: string;
  image?: string;
  category:Category;
}
