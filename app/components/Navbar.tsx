"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaSearch } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignedIn, SignedOut, SignIn, UserButton, useSignIn } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import logo from "../assets/images/icons/logo.svg";
import {useLanguage  } from '../context/LanguageContext';

const Navbar = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const toggleSignIn = () => {
    setIsSignInOpen((prev) => !prev);
  };

  return (
    <header className="w-full">
      {/* Header start */}
      <div className="bg-green-800 text-white p-[8px] text-[15px]">
        <div className="flex justify-start md:justify-between items-center">
          <div className="ml-2 md:ml-[140px]">
            <p>
              Free Shipping for all Orders of <strong>SAR 99</strong>
            </p>
          </div>
          <div className="md:flex hidden justify-center gap-[32px] mr-[140px] items-center">
            <a href="#"><FaFacebookF className="text-base" /></a>
            <a href="#"><FaTwitter className="text-base" /></a>
            <a href="#"><FaInstagram className="text-base" /></a>
            <a href="#"><IoLogoGoogleplus className="text-xl" /></a>
          </div>
        </div>
      </div>

      {/* Header logo and menu */}
      <div className="lg:flex justify-between items-center px-4 md:px-16 py-4">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link href="/">
            <Image
              className="h-[120px] w-[120px] md:h-[180px] md:w-[180px]"
              src={logo}
              width={180}
              height={180}
              alt="logo"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center items-center gap-8">
            <Link href="/" className="text-lg hover:text-green-800">Home</Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg hover:text-green-800">
                    <Link href="/allproducts">Shop</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col justify-start items-center w-36">
                      <ListItem href="/shop2" title="Shop 2" />
                      <ListItem href="/shop3" title="Shop 3" />
                      <ListItem href="/shop4" title="Shop 4" />
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="text-lg hover:text-green-800" variant="link">On Sale</Button>

            <Button className="text-lg bg-white text-black hover:bg-green-800 hover:text-white">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* Search Box */}
          <div className="hidden lg:block relative w-[550px]">
            <form className="flex items-center">
              <input
                className="w-full px-3 py-3 rounded-3xl rounded-r-none outline-none border-gray-300 border"
                placeholder="Search..."
                type="search"
                required
              />
              <button className="py-3.5 px-8 bg-green-800 rounded-full absolute right-[-20px]" type="submit">
                <FaSearch className="text-2xl text-white" />
              </button>
            </form>
          </div>

          {/* Sign In / Sign Up Section */}
          <div className="hidden lg:flex gap-6 items-center">
            <SignedOut>
              <Button onClick={toggleSignIn} className="hover:text-green-800">SIGN IN / SIGN UP</Button>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          <button onClick={toggleLanguage} className="flex items-center">
  <Image
    src="/uae-flag.jpg" // Replace with the actual path to the UAE flag image
    alt="UAE Flag"
    width={24} // Adjust size as needed
    height={16}
    className="cursor-pointer"
  />
</button>


          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <Link href="../addtocart">
              <i className="text-2xl hover:text-green-500">🛒</i>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex justify-between items-center w-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <GiHamburgerMenu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[250px]" side="left">
              <SheetHeader>
                <SheetTitle>Welcome to Rukn Al Safa</SheetTitle>
                <SheetDescription>Buy medicines online.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <ul>
                  {["Home", "Shop", "On Sale", "Contact"].map((item) => (
                    <li key={item} className="border-b border-gray-200 font-bold py-2">
                      <Link href="#">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-green-700 p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={toggleSignIn}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              ✕
            </button>
            <SignedOut>
              <SignIn />
            </SignedOut>
          </div>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li className="list-none">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 text-lg rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default Navbar;
