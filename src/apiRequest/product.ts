import http from "@/libs/http";
import { CreateProductBodyType, ProductListResType, ProductResType } from "@/schema/product.schema";


const productApiRequest = {
     getList: (page: string, size: string, sortBy: string, sortOrder: string) => (
          http.get(`/api/v1/products/pagination?page=${page}&size=${size}&sort_by=${sortBy}&sort_order=${sortOrder}`)
     ),
     create: (body: CreateProductBodyType, access_token:string | null) => (
          http.post<ProductResType>(`/api/v1/products`, body, {
               headers: {
                    'Authorization': `${access_token}`
               }
          })
     ),
     uploadImage: (body: FormData) =>
          http.post<{
            message: string
            data: string
          }>('api/v1/uploads', body, {
               headers: {
                    'Content-Type': ''
               },
               mode: 'no-cors'
          }),
}

export default productApiRequest