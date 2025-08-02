import { Separator } from "@/components/ui/separator";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollTop from "../scroll-top";

const footerSections = [
  {
    title: "Product",
    links: [
      {
        title: "Phones",
        href: "?category=phones",
      },
      {
        title: "Tablets",
        href: "?category=tablets",
      },
      {
        title: "Televisions",
        href: "?category=televisions",
      },
      {
        title: "Refrigerators",
        href: "?category=refrigerators",
      },
      {
        title: "Laptops",
        href: "?category=laptops",
      },
      {
        title: "Accessories",
        href: "?category=accessories",
      },
    ],
  },
  {
    title: "Account",
    links: [
      {
        title: "My Account",
        href: "/user/profile",
      },
      {
        title: "Login / Register",
        href: "/auth/login",
      },
      {
        title: "Cart",
        href: "/cart",
      },
      {
        title: "Wishlist",
        href: "/user/my-wishlist",
      },
      {
        title: "Products",
        href: "/products",
      },
      {
        title: "Orders",
        href: "/user/order-history",
      },
    ],
  },
  {
    title: "Quick Link",
    links: [
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        title: "Terms Of Use",
        href: "/terms-of-use",
      },
      {
        title: "FAQ",
        href: "/faq",
      },
      {
        title: "Help centre",
        href: "/help-centre",
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
      {
        title: "Support",
        href: "/support",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        title: "Facebook",
        href: "#",
      },
      {
        title: "Instagram",
        href: "#",
      },
      {
        title: "Whatsapp",
        href: "#",
      },
      {
        title: "Youtube",
        href: "#",
      },
      {
        title: "Twitter",
        href: "#",
      },
    ],
  },
  {
    title: "Download App",
    links: [
      {
        title: "App Store",
        href: "#",
      },
      {
        title: "Google Play",
        href: "#",
      },
    ],
  },
];

const Footer01Page = () => {
  return (
    <footer className="dark:bg-accent/30 bg-foreground relative">
      <ScrollTop />
      <div className="container mx-auto py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
        <div className="col-span-full xl:col-span-2">
          <h3 className="text-2xl text-white font-bold">FayraShop</h3>
          <p className="mt-4 text-muted-foreground">
            FayraShop is a modern e-commerce platform that offers a wide range
            of products and services. Our mission is to provide a seamless
            shopping experience with top-notch customer service and quality
            products.
            <br />
            <br />
            We are committed to sustainability and ethical practices, ensuring
            that our products are sourced responsibly. Join us in our journey to
            revolutionize online shopping.
          </p>
        </div>

        {footerSections.map(({ title, links }) => (
          <div key={title}>
            <h6 className="font-semibold text-white">{title}</h6>
            {title === "Download App" ? (
              <div className="mt-6 space-y-4">
                <p className="mb-2 text-muted-foreground">
                  Download our app for a better shopping experience.
                </p>
                <p className="mb-2 text-muted-foreground">
                  Save $3 with App New User Only
                </p>
                <div className="flex gap-3">
                  <Image
                    src="/images/qr-code-fayrashop.svg"
                    alt="QR Code"
                    width={78}
                    height={78}
                  />
                  <div className="flex flex-col gap-3">
                    <Link href="#">
                      <Image
                        src="/images/app-store.svg"
                        alt="App Store"
                        width={106}
                        height={36}
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src="/images/google-play-store.svg"
                        alt="Google Play"
                        width={106}
                        height={36}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <ul className="mt-6 space-y-4">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Separator />
      <div className="container mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
        <span className="text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="https://muhammadasif.me/" target="_blank">
            Muhammad Asif
          </Link>
          . All rights reserved.
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="https://github.com/muhammadasif-cse" target="_blank">
            <GithubIcon className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.facebook.com/muhammadasif.cse"
            target="_blank"
          >
            <FacebookIcon className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/muhammadasif_cse/"
            target="_blank"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
          <Link
            href="https://twitter.com/muhammadasifcse"
            target="_blank"
          >
            <TwitterIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer01Page;
