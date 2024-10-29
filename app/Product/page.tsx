"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoStar } from "react-icons/io5";
import AddToCart from "../components/AddToCart";
import { useSearchParams } from "next/navigation";
import { findProductById, getRelatedProducts } from "../staticData";

interface Product {
  image: StaticImageData;
  imageAlt: string;
  discount: number;
  id: string;
  category: string;
  subCategory: string;
  productName: string;
  mrp: number;
  actualPrice: number;
  description: string;
  specs: string[];
}

const ProductPage = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (productId) {
      const fetchedProduct = findProductById(productId);
      if (fetchedProduct) {
        setProduct(fetchedProduct);
        const related = getRelatedProducts(fetchedProduct.category);
        setRelatedProducts(related);
      }
    }
  }, [productId]);

  // Fallback for loading state
  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <SingleProductCard {...product} />
      <RelatedProducts relatedProducts={relatedProducts} />
    </div>
  );
};

const SingleProductCard: React.FC<Product> = ({
  image,
  imageAlt,
  discount,
  category,
  id,
  subCategory,
  productName,
  mrp,
  actualPrice,
  description,
  specs,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 relative">
          <Image
            width={500}
            height={500}
            src={image}
            alt={imageAlt}
            className="rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-lg">
            {discount}% OFF
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0">
          <h3 className="text-3xl font-semibold mb-2">{productName}</h3>
          <div className="flex items-center text-yellow-400 space-x-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <IoStar key={index} />
            ))}
            <span className="ml-2 text-gray-500">4.5 (100 reviews)</span>
          </div>
          <div className="text-lg text-gray-500 mb-2">
            <Link href={`/app/products?category=${category}`}>
              {category}
            </Link>{" "}
            /{" "}
            <Link href={`/app/products?subcategory=${subCategory}`}>
              {subCategory}
            </Link>
          </div>
          <div className="text-2xl text-red-500 font-bold mb-2">
            ${actualPrice}{" "}
            <span className="line-through text-gray-400 ml-2">${mrp}</span>
          </div>
          <AddToCart
            product={{ id, productName, actualPrice, mrp, image: image.src }}
          />
          <div className="mt-6">
            <h4 className="text-xl font-semibold mb-2">Product Description</h4>
            <p className="text-gray-700 mb-4">{description}</p>
            <h4 className="text-xl font-semibold mb-2">Specifications</h4>
            <ul className="list-disc list-inside text-gray-700">
              {specs && specs.length > 0 ? (
                specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))
              ) : (
                <li>No specifications available</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedProducts: React.FC<{ relatedProducts: Product[] }> = ({
  relatedProducts,
}) => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-4">Related Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg hover:shadow-lg transition">
              <Link href={`/app/singleproduct/${product.id}`} passHref>
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={200}
                  height={200}
                  className="rounded-md"
                />
              </Link>
              <h4 className="mt-2 font-semibold">{product.productName}</h4>
              <div className="flex items-center justify-between mt-1">
                <span className="text-red-500 font-bold">${product.actualPrice}</span>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <IoStar key={index} />
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No related products found.</div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
