# Programming Hero N L W D Assignment-2

# Product and Order Management API

### Objective :

Develop a Express application with TypeScript as the programming language, integrating MongoDB with Mongoose for effective data management. Ensuring data integrity through validation using Zod.
This API allows you to manage products and orders, including creating, retrieving, updating, and deleting products, as well as creating orders and updating inventory accordingly.

## API end-points :

### Product Management APIs

#### Create a Product

- **URL:** `https://ph-assignment-2-pi.vercel.app/api/products`
- **Method:** `POST`
- **Description:** Creates a new product.
- **Request Body:**

```json
{
  "name": "iPhone 12",
  "description": "Latest model ios based smartphone with 128GB storage and dual cameras. cutting-edge features.",
  "price": 999,
  "category": "Electronics",
  "tags": ["smartphone", "Apple", "iOS"],
  "variants": [
    {
      "type": "Color",
      "value": "Midnight Blue"
    },
    {
      "type": "Storage Capacity",
      "value": "256GB"
    }
  ],
  "inventory": {
    "quantity": 10,
    "inStock": true
  }
}
```

- **Response Body:**

```json
{
  "success": true,
  "message": "Product created successfully!",
  "data": {
    "name": "iPhone 12",
    "description": "Latest model ios based smartphone with 128GB storage and dual cameras. cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue",
        "_id": "664ce0b02f5be468b50726d4"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB",
        "_id": "664ce0b02f5be468b50726d5"
      }
    ],
    "inventory": {
      "quantity": 10,
      "inStock": true,
      "_id": "664ce0b02f5be468b50726d6"
    },
    "_id": "664ce0b02f5be468b50726d3",
    "__v": 0
  }
}
// 400 Bad Request
{
  "success": false,
  "message": "Invalid request or validation errors"
}
```

#### Get all Products

- **URL:** `https://ph-assignment-2-pi.vercel.app/api/products`
- **Method:** `GET`
- **Description:** Retrieves all products.
- **Response Body:**

```json
{
  "success": true,
  "message": "Products fetched successfully",
  "data": [
    /* array of products */
  ]
}
// 401 Unauthorized
{
  "success": false,
  "message": "Invalid request"
}
// 404 Not Found
{
  "success": false,
  "message": "Products not found"
  "data": null
}

```

#### Get a Product

- **URL:** `https://ph-assignment-2-pi.vercel.app/api/products/:productId`
- **Method:** `GET`
- **Description:** Retrieves a specific product by its ID..
- **Response Body:**

```json
{
  "success": true,
  "message": "Product fetched successfully",
  "data": {
    /* product object */
  }
}
// 404 Not Found
{
  "success": false,
  "message": "Product not found"
}

```

#### Delete a Product

- **URL:** `https://ph-assignment-2-pi.vercel.app/api/products/:productId`
- **Method:** `DELETE`
- **Description:** Deletes a specific product by its ID.
- **Response Body:**

```json
{
  "success": true,
  "message": "Product deleted successfully",
  "data": null
}
// 404 Not Found
{
  "success": false,
  "message": "Product not found"
}

```

#### Update a Product

- **URL:** `https://ph-assignment-2-pi.vercel.app//api/products/:productId`
- **Method:** `PUT`
- **Description:** Updates a specific product by its ID.
- **Request Body:**

```json
{
  "name": "iPhone 12",
  "description": "Latest model ios based smartphone with 128GB storage and dual cameras. cutting-edge features.",
  "price": 999,
  "category": "Electronics",
  "tags": ["smartphone", "Apple", "iOS", "updated"],
  "variants": [
    {
      "type": "Color",
      "value": "Midnight Blue"
    },
    {
      "type": "Storage Capacity",
      "value": "256GB"
    }
  ],
  "inventory": {
    "quantity": 10,
    "inStock": true
  }
}
```

- **Response Body:**

```json
// Update product response
{
    "success": true,
    "message": "Product updated successfully!",
    "data": {
        "_id": "664c6fce229d82afe12bdd41",
        "name": "iPhone 12",
        "description": "Latest model ios based smartphone with 128GB storage and dual cameras. cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": [
            "smartphone",
            "Apple",
            "iOS",
            "updated"
        ],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue",
                "_id": "664ce30a2f5be468b50726d8"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB",
                "_id": "664ce30a2f5be468b50726d9"
            }
        ],
        "inventory": {
            "quantity": 10,
            "inStock": true,
            "_id": "664ce30a2f5be468b50726da"
        }
    }
}
//400 Bad Request
{
  "success": false,
  "message": "Validation error message"
}

// 404 Not Found
{
  "success": false,
  "message": "Product not found"
}

```

#### Search Products

- **URL:** `https://ph-assignment-2-pi.vercel.app/api/products?searchTerm=coffee`
- **Method:** `GET`
- **Description:** Search item from products.
- **Response Body:**

```json
{
  "success": true,
  "message": "Products fetched successfully",
  "data": [
    /* array of products */
  ]
}
// 404 Not Found
{
  "success": false,
  "message": "Product not found"
}
```

### Order Management APIs

#### Create an Order

- **URL:** `https://ph-assignment-2-pi.vercel.app/api/orders`
- **Method:** `POST`
- **Description:** creates a new order with products.
- **Request Body:**

```json
{
  "email": "mihadkhadem@gmail.com",
  "productId": "664c6fce229d82afe12bdd42",
  "price": 1600,
  "quantity": 2
}
// 201 Created
{
    "success": true,
    "message": "Order created successfully!",
    "data": {
        "email": "mihadkhadem@gmail.com",
        "productId": "664c6fce229d82afe12bdd42",
        "price": 999,
        "quantity": 1
    }
}

// 400 Bad Request
{
  "success": false,
  "message": "Validation error message"
}
// 404 Not Found
{
  "success": false,
  "message": "Product not found"
}
```

#### Get All Orders

- **URL:** `https://ph-assignment-2-pi.vercel.app/api/orders`
- **Method:** `GET`
- **Description:** Retrieves all orders.
- **Response Body:**

```json
// 200 OK
{
  "success": true,
  "message": "Order created successfully!",
  "data": [
    {
      "email": "mihadkhadem@gmail.com",
      "productId": "664c6fce229d82afe12bdd42",
      "price": 999,
      "quantity": 1
    }
    //   more orders here
  ]
}
```

#### Get an Order by email

- **URL:** `https://ph-assignment-2-pi.vercel.app/api/orders?email=mihadkhadem@gmail.com`
- **Method:** `GET`
- **Description:** Retrieves orders by email.
- **Response Body:**

```json
// 200 OK
{
  "success": true,
  "message": "Order created successfully!",
  "data": {
    "email": "mihadkhadem@gmail.com",
    "productId": "664c6fce229d82afe12bdd42",
    "price": 999,
    "quantity": 1
  }
  //   more orders here
}
```
