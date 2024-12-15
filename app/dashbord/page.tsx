'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { products as staticProducts, Product } from "../staticData";
import * as XLSX from "xlsx";

// Read data from an Excel file located in the public folder
const readDataFromExcel = (file: File): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(worksheet);
        resolve(json as Product[]);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};

const saveDataToExcel = (products: Product[], fileName: string): void => {
  const worksheet = XLSX.utils.json_to_sheet(products);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
  XLSX.writeFile(workbook, fileName);  // This will trigger a download for the user
};

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(staticProducts);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    productName: "",
    category: "",
    subCategory: "",
    mrp: 0,
    actualPrice: 0,
    discount: 0,
    image: "/default-image.jpg",
    imageAlt: "",
  });

  // Fetch products from Excel file on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Load Excel file from the public directory
        const file = new File([await fetch('/products/DATA.xls').then(res => res.blob())], "DATA.xls");
        const productsFromExcel = await readDataFromExcel(file);
        setProducts(productsFromExcel);
      } catch (error) {
        console.error("Error reading data from Excel:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const updatedValue = name === "mrp" || name === "actualPrice" || name === "discount"
      ? parseFloat(value) || 0
      : value;

    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: updatedValue,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prevProduct) => ({
          ...prevProduct,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct = { ...newProduct, id: products.length + 1 };
    const updatedProducts = [...products, updatedProduct];
    setProducts(updatedProducts);

    // Save data to Excel after adding the product
    saveDataToExcel(updatedProducts, "/Data.xls");

    setNewProduct({
      id: 0,
      productName: "",
      category: "",
      subCategory: "",
      mrp: 0,
      actualPrice: 0,
      discount: 0,
      image: "/default-image.jpg",
      imageAlt: "",
    });
  };

  const handleDelete = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);

    // Save data to Excel after deleting the product
    saveDataToExcel(updatedProducts, "/products/UpdatedData.xls");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Product Dashboard</h1>

      {/* Product Entry Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={newProduct.productName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={newProduct.category}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700">Sub-Category</label>
            <input
              type="text"
              id="subCategory"
              name="subCategory"
              value={newProduct.subCategory}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="mrp" className="block text-sm font-medium text-gray-700">MRP</label>
            <input
              type="number"
              id="mrp"
              name="mrp"
              value={newProduct.mrp}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="actualPrice" className="block text-sm font-medium text-gray-700">Actual Price</label>
            <input
              type="number"
              id="actualPrice"
              name="actualPrice"
              value={newProduct.actualPrice}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Discount (%)</label>
            <input
              type="number"
              id="discount"
              name="discount"
              value={newProduct.discount}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg">
          Add Product
        </button>
      </form>

      {/* Display Products by Category */}
      <div className="space-y-8">
        {Array.from(new Set(products.map((product) => product.category))).map((category) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <div key={product.id} className="border p-4 rounded-lg shadow-md">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      width={200}
                      height={200}
                      className="mb-4"
                    />
                    <h3 className="text-lg font-semibold">{product.productName}</h3>
                    <p>{product.subCategory}</p>
                    <p>Price: ₹{product.actualPrice}</p>
                    <p>Discount: {product.discount}%</p>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
