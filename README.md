### **Live Project Link:**
 [Backend Live link](https://bike-store-gamma.vercel.app/)

### **Objective:**

Develop an Express application with TypeScript, integrating MongoDB with Mongoose to manage a Bike Store. Ensure data integrity using Mongoose schema validation.

---

### **Locally Project Setup:**

```
git clone https://github.com/mdrakibmia99/bike-store-backend.git
cd bike-store-backend
npm install
```
---



#### Next:

create .env file in root dir (bike-store-backend is root dir) and set database uri

```
DATABASE_URL=YOUR_MONGODB_URI
PORT=5000
```
---
#### Run Project:
```
npm run start:dev 
```

## **Check API**


### **1. Create a Bike**

- **Endpoint:** **`/api/products`**
- **Method:** `POST`
- **Request Body:**

```json
{
  "name": "Xtreme Mountain Bike",
  "brand": "Giant",
  "price": 1200,
  "category": "Mountain",
  "description": "A high-performance bike built for tough terrains.",
  "quantity": 50,
  "inStock": true
}
```

- **Response:** Success message and created bike details.

```json
{
  "message": "Bike created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1200,
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

---

### **2. Get All Bikes**

- **Endpoint:** **`/api/products`**
- **Method:** `GET`
- **Response:** A list of all bikes with details like name, brand, price, category, etc.
- Query: A list of all bikes from the same category, accessed via `/api/products?searchTerm=category`. `searchTerm` can be `name`, `brand`, or `category`.

```json
{
  "message": "Bikes retrieved successfully",
  "status": true,
  "data": [
    {
      "_id": "648a45e5f0123c45678d9012",
      "name": "Xtreme Mountain Bike",
      "brand": "Giant",
      "price": 1200,
      "category": "Mountain",
      "description": "A high-performance bike built for tough terrains.",
      "quantity": 50,
      "inStock": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z"
    }
    // ... rest data
  ]
}
```

---

### **3. Get a Specific Bike**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `GET`
- **Response:** The details of a specific bike by ID.

```json
{
  "message": "Bike retrieved successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1200,
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

---

### **4. Update a Bike**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `PUT`
- **Request Body:** (Bike details to update)

```json
{
  "price": 1300,
  "quantity": 30
}
```

- **Response:** Success message and updated bike details.

```json
{
  "message": "Bike updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1300, // Price updated
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 30, // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z" // Updated timestamp
  }
}
```

---

### **5. Delete a Bike**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `DELETE`
- **Response:** Success message confirming the bike has been deleted.

```json
{
  "message": "Bike deleted successfully",
  "status": true,
  "data": {}
}
```

---

### **6. Order a Bike**

- **Endpoint:** **`/api/orders`**
- **Method:** `POST`
- **Inventory Management Logic:**
  - When an order is placed, reduce the **quantity** in the product model.
  - If the inventory quantity goes to zero, set **inStock** to `false`.
  - Handle **insufficient stock** cases by returning an appropriate error message.
- **Request Body:**

```json
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 2400
}
```

- **Response:** Success message confirming the order.

```json
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 2400,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}
```

---

### **7. Calculate Revenue from Orders (Aggregation)**

- **Endpoint:** **`/api/orders/revenue`**
- **Method:** `GET`
- **Aggregation Suggestion:**
  - Use MongoDB aggregation pipeline to calculate the total revenue from `all orders`.
  - Calculate the total price by multiplying the price of each bike by the quantity ordered.
- **Response:** The total revenue from all orders.

```json
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 3600 // Total revenue calculated from all orders
  }
}
```

---

If you need to know more details:
[More](https://github.com/mdrakibmia99/bike-store-backend/blob/main/bike_store_requirement.md)