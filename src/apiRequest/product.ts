import http from "@/libs/http";
import { CreateProductBodyType, ProductListResType, ProductResType } from "@/schema/product.schema";


const productApiRequest = {
     getList: (page: string, size: string, sortBy: string, sortOrder: string) => (
          http.get(`/api/v1/products/pagination?page=${page}&size=${size}&sort_by=${sortBy}&sort_order=${sortOrder}`)
     ),
     create: (body: CreateProductBodyType) => (
          http.post<ProductResType>(``, body)
     ),
}

export default productApiRequest