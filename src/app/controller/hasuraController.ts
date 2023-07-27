import { Request, Response, NextFunction  } from "express";
import { getProductList } from "../../graphql/functions";

  async function getProducts(req: Request, res: Response, next: NextFunction) {
    const products = await getProductList();
    console.log(products);
    if (products)
        res.json(products);
    else
        res.sendStatus(404);
}

export default {
  getProducts
}