import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
        },
        message: '{VALUE} is not a valid email',
      },

    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Bike',
      required: [true, 'product id  is required'],
    },
    quantity: {
      type: Number,
      min: [1, 'quantity can not be less than 1 '],
      required: [true, 'quantity is required'],
    },
    totalPrice: {
      type: Number,
      min: [1, 'total price can not be less than 1 '],
      required: [true, 'total price is required'],
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
