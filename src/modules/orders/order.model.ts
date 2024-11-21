import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
        },
        message: '{VALUE} is not a valid email',
      },
      immutable: true,
    },
    product: { type: Schema.Types.ObjectId, ref: 'Bike', required: true },
    quantity: {
      type: Number,
      min: [0, 't can not be less than 0 '],
      required: true,
    },
    totalPrice: {
      type: Number,
      min: [0, 'total price can not be less than 0 '],
      required: true,
    },
  },
  {
    // it automatic add two field 1.updatedAt 2.createdAt
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        // Exclude the __v field
        delete ret.__v;
      },
    },
  },
);

const Order = model<IOrder>('Order', orderSchema);
export default Order;