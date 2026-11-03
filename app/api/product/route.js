
import { products } from "../../../Data/product";
export async function GET() {
    return Response.json(products);
}