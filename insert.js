db.products.insertMany([
  {
    name: "Elite Riding Saddle",
    price: 1599.99,
    category: "Equestrian",
    stock: 30,
    specs: {
      material: "Leather",
      size: "Full",
      weight: "5kg"
    },
    tags: ["saddle", "riding", "equine"]
  },
  {
    name: "EquiPro Riding Boots",
    price: 249.99,
    category: "Equestrian",
    stock: 100,
    specs: {
      material: "Leather",
      size: "EU 42",
      waterproof: true
    },
    tags: ["boots", "riding", "footwear"]
  },
  {
    name: "Comfort Bridle",
    price: 189.99,
    category: "Equestrian",
    stock: 75,
    specs: {
      material: "Leather",
      adjustable: true
    },
    tags: ["bridle", "equipment", "riding"]
  },
  {
    name: "Horse Grooming Kit",
    price: 79.99,
    category: "Equestrian",
    stock: 60,
    specs: {
      contents: "Brush, comb, hoof pick",
      material: "Plastic, metal"
    },
    tags: ["grooming", "horse", "care"]
  },
  {
    name: "Equestrian Helmet",
    price: 129.99,
    category: "Equestrian",
    stock: 45,
    specs: {
      material: "Polycarbonate",
      size: "Medium"
    },
    tags: ["helmet", "safety", "riding"]
  },
  {
    name: "Riding Gloves",
    price: 49.99,
    category: "Equestrian",
    stock: 80,
    specs: {
      material: "Leather",
      size: "L"
    },
    tags: ["gloves", "riding", "gear"]
  },
  {
    name: "EquiTack Saddle Pad",
    price: 89.99,
    category: "Equestrian",
    stock: 50,
    specs: {
      material: "Cotton",
      size: "Full"
    },
    tags: ["saddle pad", "comfort", "riding"]
  },
  {
    name: "Horse Fly Mask",
    price: 39.99,
    category: "Equestrian",
    stock: 40,
    specs: {
      material: "Mesh",
      size: "Standard"
    },
    tags: ["mask", "horse", "protection"]
  },
  {
    name: "Equine Fleece Cooler",
    price: 99.99,
    category: "Equestrian",
    stock: 35,
    specs: {
      material: "Fleece",
      size: "Standard"
    },
    tags: ["cooler", "horse", "fleece"]
  },
  {
    name: "Stirrup Irons",
    price: 89.99,
    category: "Equestrian",
    stock: 60,
    specs: {
      material: "Stainless Steel",
      size: "Medium"
    },
    tags: ["stirrup", "riding", "equine"]
  }
]);
