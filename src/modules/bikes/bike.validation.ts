import { z } from 'zod';

export const updateBikeDataValidation = z.object({
  name: z.string().trim().optional(), // Optional field
  brand: z.string().trim().optional(),
  price: z
    .number()
    .min(0, { message: 'Price cannot be less than 0' })
    .optional(),
  category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']).optional(),
  description: z.string().trim().optional(),
  quantity: z
    .number()
    .min(0, { message: 'Quantity cannot be less than 0' })
    .optional(),
});

const bikeValidationSchema = z.object({
  name: z.string(),
  brand: z.string(),
  price: z.number().min(0),
  category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']),
  description: z.string(),
  quantity: z.number().int().min(0),
  inStock: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default bikeValidationSchema;
