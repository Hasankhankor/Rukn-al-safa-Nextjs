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

const Navbar = () => {
  const { openSignIn } = useSignIn();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const toggleSignIn = () => {
    setIsSignInOpen((prev) => !prev); // Toggle the SignIn visibility
  };

  return (
    <header className="w-[100%]">
      {/* Header start */}
      <div className="bg-green-800 text-white p-[8px] text-[15px]">
        <div className="flex justify-start md:justify-between items-center">
          <div className="ml-2 md:ml-[140px]">
            <p>
              Free Shipping for all Orders of <strong>SAR 99</strong>
            </p>
          </div>
          <div className="md:flex hidden justify-center gap-[32px] mr-[140px] items-center">
            <a href="#">
              <FaFacebookF className="text-base" />
            </a>
            <a href="#">
              <FaTwitter className="text-base" />
            </a>
            <a href="#">
              <FaInstagram className="text-base" />
            </a>
            <a href="#">
              <IoLogoGoogleplus className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Header logo and menu */}
      <div className="lg:block flex justify-between items-center ">
        <div className="flex justify-around items-center lg:h-40 h-32 lg:ml-0 ml-8 sm:ml-28">
          <Link href="/">
            <Image
              className="lg:h-[180px] lg:w-[180px] h-[120px] w-[120px]"
              src={logo}
              width={180}
              height={180}
              alt="logo"
            />
          </Link>

          <div className="hidden lg:flex flex-col space-y-2 mt-2">
            <div className="flex justify-center items-center">
              {/* Updated the Home button to link directly */}
              <Link href="/" className="text-lg hover:text-green-800">
                Home
              </Link>
              {["Shop"].map((item) => (
                <NavigationMenu key={item}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-lg hover:text-green-800">
                        {item}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex flex-col justify-start items-center w-36">
                          <ListItem href="/" title={` 2`} />
                          <ListItem href="/" title={`${item} 3`} />
                          <ListItem href="/" title={`${item} 4`} />
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ))}
              <Button className="text-lg hover:text-green-800" variant="link">
                On Sale
              </Button>
              <Button className="text-lg hover:text-green-800" variant="link">
                Contact
              </Button>
            </div>
          </div>

          {/* Search Box */}
          <div className="hidden lg:flex flex-col space-y-2 mt-2">
            <form className="flex items-center justify-center relative">
              <input
                className="w-[550px] px-3 py-3 rounded-3xl rounded-r-none outline-none border-gray-300 border border-r-0"
                placeholder="Search..."
                type="search"
                required
              />
              <button
                className="py-3.5 px-8 bg-green-800 rounded-full absolute right-[-20px]"
                type="submit"
              >
                <FaSearch className="text-2xl font-light text-white" />
              </button>
            </form>
          </div>

          {/* Sign In / Sign Up Section */}
          <div className="hidden lg:flex justify-center gap-6 font-semibold items-center">
            <SignedOut>
              <Button onClick={toggleSignIn} className="hover:text-green-800">
                SIGN IN / SIGN UP
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <Link href="../addtocart">
              <i className="text-2xl hover:text-green-500">🛒</i>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden block mr-8 sm:mr-28">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <GiHamburgerMenu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[250px]" side='left'>
              <SheetHeader>
                <SheetTitle className="mt-5">Welcome to Rukn Al Safa</SheetTitle>
                <SheetDescription>Buy medicines online.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <ul>
                  {["Home", "Shop", "Page", "Blog", "On Sale", "Contact"].map((item) => (
                    <li key={item} className="border-b border-gray-200 font-bold py-2">
                      <Link href="#">{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Sign In Component Below Navbar */}
      {isSignInOpen && (
        <div className="bg-white shadow-md p-4">
          <SignedOut>
            <SignIn />
          </SignedOut>
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
