db.products.insertMany([
  {
    name: "Laptop Pro",
    price: 1299.99,
    category: "Electronics",
    stock: 50,
    specs: {
      cpu: "Intel i7",
      ram: "16GB",
      storage: "512GB SSD"
    },
    tags: ["laptop", "electronics", "portable"]
  },
  {
    name: "Smartphone X",
    price: 899.99,
    category: "Electronics",
    stock: 100,
    specs: {
      screen: "6.5\" AMOLED",
      storage: "128GB",
      battery: "4000mAh"
    },
    tags: ["phone", "mobile", "electronics"]
  },
  {
    name: "Wireless Headphones",
    price: 199.99,
    category: "Electronics",
    stock: 75,
    specs: {
      batteryLife: "30 hours",
      noiseCancelling: true
    },
    tags: ["audio", "headphones", "wireless"]
  },
  {
    name: "Coffee Maker",
    price: 89.99,
    category: "Home",
    stock: 30,
    specs: {
      capacity: "12 cups",
      programmable: true
    },
    tags: ["kitchen", "appliance"]
  },
  {
    name: "Running Shoes",
    price: 120.00,
    category: "Sports",
    stock: 60,
    specs: {
      size: "US 9",
      color: "Black/Red"
    },
    tags: ["footwear", "running", "sports"]
  },
  {
    name: "Desk Chair",
    price: 249.99,
    category: "Furniture",
    stock: 20,
    specs: {
      material: "Mesh",
      adjustable: true
    },
    tags: ["office", "furniture"]
  },
  {
    name: "Backpack",
    price: 59.99,
    category: "Accessories",
    stock: 45,
    specs: {
      capacity: "30L",
      waterproof: true
    },
    tags: ["bag", "travel"]
  },
  {
    name: "Smart Watch",
    price: 249.99,
    category: "Electronics",
    stock: 40,
    specs: {
      screen: "1.4\" AMOLED",
      batteryLife: "7 days"
    },
    tags: ["wearable", "electronics"]
  },
  {
    name: "Blender",
    price: 79.99,
    category: "Home",
    stock: 35,
    specs: {
      power: "800W",
      capacity: "1.5L"
    },
    tags: ["kitchen", "appliance"]
  },
  {
    name: "Yoga Mat",
    price: 29.99,
    category: "Sports",
    stock: 80,
    specs: {
      thickness: "6mm",
      material: "PVC"
    },
    tags: ["fitness", "yoga"]
  }
]);


db.customers.insertMany([
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "555-0101",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "90210"
    },
    joinDate: new Date("2020-01-15"),
    loyaltyPoints: 250
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "555-0102",
    address: {
      street: "456 Oak Ave",
      city: "Somewhere",
      state: "NY",
      zip: "10001"
    },
    joinDate: new Date("2019-11-20"),
    loyaltyPoints: 500
  },
  {
    firstName: "Robert",
    lastName: "Johnson",
    email: "robert.j@example.com",
    phone: "555-0103",
    address: {
      street: "789 Pine Rd",
      city: "Nowhere",
      state: "TX",
      zip: "75001"
    },
    joinDate: new Date("2021-03-10"),
    loyaltyPoints: 100
  },
  {
    firstName: "Emily",
    lastName: "Williams",
    email: "emily.w@example.com",
    phone: "555-0104",
    address: {
      street: "321 Elm St",
      city: "Anycity",
      state: "FL",
      zip: "33101"
    },
    joinDate: new Date("2020-07-22"),
    loyaltyPoints: 350
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.b@example.com",
    phone: "555-0105",
    address: {
      street: "654 Maple Dr",
      city: "Yourtown",
      state: "IL",
      zip: "60007"
    },
    joinDate: new Date("2022-01-05"),
    loyaltyPoints: 50
  },
  {
    firstName: "Sarah",
    lastName: "Davis",
    email: "sarah.d@example.com",
    phone: "555-0106",
    address: {
      street: "987 Cedar Ln",
      city: "Theirtown",
      state: "WA",
      zip: "98101"
    },
    joinDate: new Date("2021-09-15"),
    loyaltyPoints: 200
  },
  {
    firstName: "David",
    lastName: "Miller",
    email: "david.m@example.com",
    phone: "555-0107",
    address: {
      street: "147 Birch Blvd",
      city: "Mytown",
      state: "GA",
      zip: "30301"
    },
    joinDate: new Date("2020-05-30"),
    loyaltyPoints: 400
  },
  {
    firstName: "Jessica",
    lastName: "Wilson",
    email: "jessica.w@example.com",
    phone: "555-0108",
    address: {
      street: "258 Spruce Way",
      city: "Hometown",
      state: "OH",
      zip: "44101"
    },
    joinDate: new Date("2019-12-12"),
    loyaltyPoints: 600
  },
  {
    firstName: "Thomas",
    lastName: "Moore",
    email: "thomas.m@example.com",
    phone: "555-0109",
    address: {
      street: "369 Aspen Ct",
      city: "Yourcity",
      state: "MI",
      zip: "48201"
    },
    joinDate: new Date("2022-02-18"),
    loyaltyPoints: 75
  },
  {
    firstName: "Jennifer",
    lastName: "Taylor",
    email: "jennifer.t@example.com",
    phone: "555-0110",
    address: {
      street: "159 Willow Rd",
      city: "Ourcity",
      state: "CO",
      zip: "80201"
    },
    joinDate: new Date("2021-06-25"),
    loyaltyPoints: 300
  }
]);


db.orders.insertMany([
  {
    customerId: ObjectId(db.customers.findOne({email: "john.doe@example.com"})._id),
    orderDate: new Date("2023-01-10"),
    items: [
      {
        productId: ObjectId(db.products.findOne({name: "Laptop Pro"})._id),
        quantity: 1,
        price: 1299.99
      },
      {
        productId: ObjectId(db.products.findOne({name: "Wireless Headphones"})._id),
        quantity: 1,
        price: 199.99
      }
    ],
    totalAmount: 1499.98,
    status: "Delivered",
    shippingAddress: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "90210"
    }
  },
  {
    customerId: ObjectId(db.customers.findOne({email: "jane.smith@example.com"})._id),
    orderDate: new Date("2023-01-15"),
    items: [
      {
        productId: ObjectId(db.products.findOne({name: "Smartphone X"})._id),
        quantity: 1,
        price: 899.99
      }
    ],
    totalAmount: 899.99,
    status: "Shipped",
    shippingAddress: {
      street: "456 Oak Ave",
      city: "Somewhere",
      state: "NY",
      zip: "10001"
    }
  },
  {
    customerId: ObjectId(db.customers.findOne({email: "robert.j@example.com"})._id),
    orderDate: new Date("2023-02-05"),
    items: [
      {
        productId: ObjectId(db.products.findOne({name: "Running Shoes"})._id),
        quantity: 1,
        price: 120.00
      },
      {
        productId: ObjectId(db.products.findOne({name: "Yoga Mat"})._id),
        quantity: 1,
        price: 29.99
      }
    ],
    totalAmount: 149.99,
    status: "Processing",
    shippingAddress: {
      street: "789 Pine Rd",
      city: "Nowhere",
      state: "TX",
      zip: "75001"
    }
  },
  {
    customerId: ObjectId(db.customers.findOne({email: "emily.w@example.com"})._id),
    orderDate: new Date("2023-02-12"),
    items: [
      {
        productId: ObjectId(db.products.findOne({name: "Coffee Maker"})._id),
        quantity: 1,
        price: 89.99
      },
      {
        productId: ObjectId(db.products.findOne({name: "Blender"})._id),
        quantity: 1,
        price: 79.99
      }
    ],
    totalAmount: 169.98,
    status: "Delivered",
    shippingAddress: {
      street: "321 Elm St",
      city: "Anycity",
      state: "FL",
      zip: "33101"
    }
  },
  {
    customerId: ObjectId(db.customers.findOne({email: "michael.b@example.com"})._id),
    orderDate: new Date("2023-02-18"),
    items: [
      {
        productId: ObjectId(db.products.findOne({name: "Desk Chair"})._id),
        quantity: 1,
        price: 249.99
      }
    ],
    totalAmount: 249.99,
    status: "Shipped",
    shippingAddress: {
      street: "654 Maple Dr",
      city: "Yourtown",
      state: "IL",
      zip: "60007"
    }
  },
  {
    customerId: ObjectId(db.customers.findOne({email: "sarah.d@example.com"})._id),
    orderDate: new Date("2023-03-01"),
    items: [
      {
        productId: ObjectId(db.products.findOne({name: "Backpack"})._id),
        quantity: 1,
        price: 59.99
      },
      {
        productId: ObjectId(db.products.findOne({name: "Smart Watch"})._id),
        quantity: 1,
        price: 249.99
      }
    ],
    totalAmount: 309.98,
    status: "Processing",
    shippingAddress: {
      street: "987 Cedar Ln",
      city: "Theirtown",
      state: "WA",
      zip: "98101"
    }
  },
  {
    customerId: ObjectId(db.customers.findOne({email: "david.m@example.com"})._id),
    orderDate: new Date("2023-03-05"),
    items: [
      {
        productId: ObjectId(db.products.findOne({name: "Wireless Headphones"})._id),
        quantity: 2,
        price: 199.99
      }
    ],
    totalAmount: 399.98,
    status: "Delivered",
    shippingAddress: {
      street: "147 Birch Blvd",
      city: "Mytown",
      state: "GA",
      zip: "30301"
    }
  },
  {
    customerId: ObjectId(db.customers.findOne({email: "jessica.w@example.com"})._id),
    orderDate: new Date("2023-03-10"),
    items: [
      {
        productId: ObjectId(db.products.findOne({name: "Laptop Pro"})._id),
        quantity: 1,
        price: 1299.99
      },
      {
        productId: ObjectId(db.products.findOne({name: "Desk Chair"})._id),
        quantity: 1,
        price: 249.99
      }
    ],
    totalAmount: 1549.98,
    status: "Shipped",
    shippingAddress: {
      street: "258 Spruce Way",
      city: "Hometown",
      state: "OH",
      zip: "44101"
    }
  },
  {
    customerId: ObjectId(db.customers.findOne({email: "thomas.m@example.com"})._id),
    orderDate: new Date("2023-03-15"),
    items: [
      {
        productId: ObjectId(db.products.findOne({name: "Smartphone X"})._id),
        quantity: 1,
        price: 899.99
      },
      {
        productId: ObjectId(db.products.findOne({name: "Wireless Headphones"})._id),
        quantity: 1,
        price: 199.99
      }
    ],
    totalAmount: 1099.98,
    status: "Processing",
    shippingAddress: {
      street: "369 Aspen Ct",
      city: "Yourcity",
      state: "MI",
      zip: "48201"
    }
  },
  {
    customerId: ObjectId(db.customers.findOne({email: "jennifer.t@example.com"})._id),
    orderDate: new Date("2023-03-20"),
    items: [
      {
        productId: ObjectId(db.products.findOne({name: "Yoga Mat"})._id),
        quantity: 2,
        price: 29.99
      },
      {
        productId: ObjectId(db.products.findOne({name: "Running Shoes"})._id),
        quantity: 1,
        price: 120.00
      }
    ],
    totalAmount: 179.98,
    status: "Delivered",
    shippingAddress: {
      street: "159 Willow Rd",
      city: "Ourcity",
      state: "CO",
      zip: "80201"
    }
  }
]);


db.categories.insertMany([
  {
    name: "Electronics",
    description: "Electronic devices and gadgets",
    createdAt: new Date("2020-01-01"),
    isActive: true
  },
  {
    name: "Home",
    description: "Home appliances and furniture",
    createdAt: new Date("2020-01-01"),
    isActive: true
  },
  {
    name: "Sports",
    description: "Sports equipment and apparel",
    createdAt: new Date("2020-01-15"),
    isActive: true
  },
  {
    name: "Furniture",
    description: "Home and office furniture",
    createdAt: new Date("2020-02-01"),
    isActive: true
  },
  {
    name: "Accessories",
    description: "Various accessories",
    createdAt: new Date("2020-02-15"),
    isActive: true
  }
]);


db.reviews.insertMany([
  {
    productId: ObjectId(db.products.findOne({name: "Laptop Pro"})._id),
    customerId: ObjectId(db.customers.findOne({email: "john.doe@example.com"})._id),
    rating: 5,
    comment: "Excellent laptop, fast and reliable",
    reviewDate: new Date("2023-01-20")
  },
  {
    productId: ObjectId(db.products.findOne({name: "Smartphone X"})._id),
    customerId: ObjectId(db.customers.findOne({email: "jane.smith@example.com"})._id),
    rating: 4,
    comment: "Great phone but battery could be better",
    reviewDate: new Date("2023-01-25")
  },
  {
    productId: ObjectId(db.products.findOne({name: "Wireless Headphones"})._id),
    customerId: ObjectId(db.customers.findOne({email: "david.m@example.com"})._id),
    rating: 5,
    comment: "Amazing sound quality and battery life",
    reviewDate: new Date("2023-03-10")
  },
  {
    productId: ObjectId(db.products.findOne({name: "Coffee Maker"})._id),
    customerId: ObjectId(db.customers.findOne({email: "emily.w@example.com"})._id),
    rating: 3,
    comment: "Works well but a bit noisy",
    reviewDate: new Date("2023-02-20")
  },
  {
    productId: ObjectId(db.products.findOne({name: "Running Shoes"})._id),
    customerId: ObjectId(db.customers.findOne({email: "robert.j@example.com"})._id),
    rating: 4,
    comment: "Comfortable and lightweight",
    reviewDate: new Date("2023-02-15")
  },
  {
    productId: ObjectId(db.products.findOne({name: "Desk Chair"})._id),
    customerId: ObjectId(db.customers.findOne({email: "michael.b@example.com"})._id),
    rating: 5,
    comment: "Very comfortable for long work sessions",
    reviewDate: new Date("2023-03-01")
  },
  {
    productId: ObjectId(db.products.findOne({name: "Backpack"})._id),
    customerId: ObjectId(db.customers.findOne({email: "sarah.d@example.com"})._id),
    rating: 4,
    comment: "Durable and spacious",
    reviewDate: new Date("2023-03-10")
  },
  {
    productId: ObjectId(db.products.findOne({name: "Smart Watch"})._id),
    customerId: ObjectId(db.customers.findOne({email: "sarah.d@example.com"})._id),
    rating: 3,
    comment: "Good features but battery drains quickly",
    reviewDate: new Date("2023-03-15")
  },
  {
    productId: ObjectId(db.products.findOne({name: "Blender"})._id),
    customerId: ObjectId(db.customers.findOne({email: "emily.w@example.com"})._id),
    rating: 4,
    comment: "Powerful and easy to clean",
    reviewDate: new Date("2023-02-25")
  },
  {
    productId: ObjectId(db.products.findOne({name: "Yoga Mat"})._id),
    customerId: ObjectId(db.customers.findOne({email: "jennifer.t@example.com"})._id),
    rating: 5,
    comment: "Perfect thickness and grip",
    reviewDate: new Date("2023-03-25")
  }
]);
