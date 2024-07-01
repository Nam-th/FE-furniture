import { z } from 'zod'

export const CreateProductBody = z.object({
     name: z.string().min(1, "Name is required"),
     description: z.string().optional(),
     price: z.coerce.number().positive("Price must be a positive number"),
     imageUrl: z.string().url("Image is required"),
     stockQuantity: z.coerce.number().int().positive("Quantity must be a positive number"),
     categoryId: z.number().optional(),
     sold: z.number(),
     isAvailable: z.boolean(),
     isBestSeller: z.boolean(),
     isRemoved: z.boolean(),
})

export type CreateProductBodyType = z.TypeOf<typeof CreateProductBody>

export const ProductSchema = z.object({
     id: z.number(),
     name: z.string(),
     description: z.string(),
     price: z.number(),
     imageUrl: z.array(z.string()),
     stockQuantity: z.number(),
     sold: z.number(),
     isAvailable: z.boolean(),
     isBestSeller: z.boolean(),
     isRemoved: z.boolean(),
     createdAt: z.string(),
     updatedAt: z.string(),
     categoryId: z.number(),
})


export const ProductRes = z.object({
  data: ProductSchema,
  message: z.string()
})

export type ProductResType = z.TypeOf<typeof ProductRes>

export const ProductListRes = z.object({
  data: z.array(ProductSchema),
  message: z.string()
})

export type ProductListResType = z.TypeOf<typeof ProductListRes>

export const UpdateProductBody = CreateProductBody
export type UpdateProductBodyType = CreateProductBodyType
export const ProductParams = z.object({
  id: z.coerce.number()
})
export type ProductParamsType = z.TypeOf<typeof ProductParams>