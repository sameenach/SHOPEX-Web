const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getProducts() {
    const response = await fetch(`${API_URL}/api/product`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data;
}

export async function getProductById(id) {
    const products = await getProducts();

    for (let product of products) {
        if (product.id === Number(id)) {
            return product;
        }
    }

    return null;
}