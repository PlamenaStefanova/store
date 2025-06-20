
db.products.find();

db.products.find({ category: "Electronics" });

db.products.find({ 
  price: { $gt: 100 },
  stock: { $gt: 0 }
});

db.products.updateOne(
  { name: "Laptop Pro" },
  { $set: { price: 1399.99 } }
);

db.products.deleteOne({ name: "Yoga Mat" });

db.products.aggregate([
  {
    $group: {
      _id: "$category",
      averagePrice: { $avg: "$price" },
      count: { $sum: 1 }
    }
  },
  { $sort: { averagePrice: -1 } }
]);


db.customers.find();

db.customers.find({ "address.state": "CA" });

db.customers.find({ 
  loyaltyPoints: { $gte: 200, $lte: 500 }
});

db.customers.updateOne(
  { email: "jennifer.t@example.com" },
  { $set: { loyaltyPoints: 350 } }
);

db.customers.deleteOne({ email: "thomas.m@example.com" });

db.customers.aggregate([
  {
    $group: {
      _id: "$address.state",
      customerCount: { $sum: 1 }
    }
  },
  { $sort: { customerCount: -1 } }
]);

db.orders.find();

db.orders.find({ status: "Delivered" });

db.orders.find({ totalAmount: { $gt: 500 } });

db.orders.updateMany(
  { status: "Processing" },
  { $set: { status: "Shipped" } }
);

db.orders.deleteMany({ totalAmount: { $lt: 100 } });

db.orders.aggregate([
  {
    $project: {
      month: { $month: "$orderDate" },
      year: { $year: "$orderDate" },
      totalAmount: 1
    }
  },
  {
    $group: {
      _id: { month: "$month", year: "$year" },
      totalSales: { $sum: "$totalAmount" },
      orderCount: { $sum: 1 }
    }
  },
  { $sort: { "_id.year": 1, "_id.month": 1 } }
]);

db.categories.find();

db.categories.find({ isActive: true });

db.categories.find({ 
  createdAt: { $gt: new Date("2020-01-15") }
});

db.categories.updateOne(
  { name: "Furniture" },
  { $set: { description: "Home and office furniture and decor" } }
);

db.categories.deleteOne({ name: "Accessories" });

db.products.aggregate([
  {
    $group: {
      _id: "$category",
      productCount: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "categories",
      localField: "_id",
      foreignField: "name",
      as: "categoryInfo"
    }
  },
  { $unwind: "$categoryInfo" },
  {
    $project: {
      categoryName: "$_id",
      productCount: 1,
      description: "$categoryInfo.description"
    }
  }
]);


db.reviews.find();

db.reviews.find({ rating: 5 });

db.reviews.find({
  productId: { 
    $in: db.products.find({ category: "Electronics" }).map(p => p._id) 
  }
});

db.reviews.updateOne(
  { 
    productId: ObjectId(db.products.findOne({name: "Smart Watch"})._id),
    customerId: ObjectId(db.customers.findOne({email: "sarah.d@example.com"})._id)
  },
  { $set: { comment: "Good features but needs better battery optimization" } }
);

db.reviews.deleteMany({ rating: { $lt: 3 } });


db.reviews.aggregate([
  {
    $group: {
      _id: "$productId",
      averageRating: { $avg: "$rating" },
      reviewCount: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "products",
      localField: "_id",
      foreignField: "_id",
      as: "product"
    }
  },
  { $unwind: "$product" },
  {
    $project: {
      productName: "$product.name",
      averageRating: 1,
      reviewCount: 1
    }
  },
  { $sort: { averageRating: -1 } }
]);
