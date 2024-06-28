import { z } from 'zod'

export const CreateProductBody = z.object({
     name: z.string().min(1, "Name is required"),
     description: z.string().optional(),
     price: z.number().positive("Price must be a positive number"),
     thumbnail: z.array(z.string()).optional(),
     quantity: z.number().int().nonnegative("Quantity must be a non-negative integer"),
     categoryId: z.number().optional()
})

export type CreateProductBodyType = z.TypeOf<typeof CreateProductBody>

export const ProductSchema = z.object({
     id: z.number(),
     name: z.string(),
     description: z.string(),
     price: z.number(),
     thumbnail: z.array(z.string()),
     quantity: z.number(),
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