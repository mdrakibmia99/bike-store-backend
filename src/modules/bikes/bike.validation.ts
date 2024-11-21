import { z } from 'zod';

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
