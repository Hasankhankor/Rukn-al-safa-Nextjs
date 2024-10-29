"use client"; // Declare the component as a client component

// app/blogs/[index]/page.tsx
import React from "react";
import Image from "next/image";
import { blogData } from "../../staticData"; // Adjust the path if necessary

const BlogPage = async ({ params }) => {
  const { index } = params;
  const blogIndex = Array.isArray(index) ? Number(index[0]) : Number(index);
  const blogPost = blogData[blogIndex] || null; // Access the specific blog post or return null

  // Handle loading state if the blogPost is null
  if (!blogPost) {
    return <p>Blog not found.</p>; // Handle case where blog does not exist
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{blogPost.topic}</h1>
      <div className="relative mb-6">
        <Image
          src={blogPost.image}
          alt={blogPost.topic}
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
      <p className="text-gray-600 text-sm mb-2">
        Posted on: <span className="text-cyan-500 font-semibold">{blogPost.date}</span>
      </p>
      <p className="text-gray-800 leading-relaxed mb-6">{blogPost.description}</p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Conclusion</h2>
      <p className="text-gray-800 leading-relaxed">{blogPost.conclusion}</p>
    </div>
  );
};

export default BlogPage;
