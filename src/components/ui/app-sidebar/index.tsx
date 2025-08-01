"use client";

import * as React from "react";
import {
  HeadsetIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserRoundCogIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/user/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Profile & Settings",
      url: "#",
      icon: UserRoundCogIcon,
      items: [
        {
          title: "Personal Information", // Name, Email, Phone, Profile Picture
          url: "/user/profile",
        },
        {
          title: "Address Book", // Shipping & Billing Addresses
          url: "/user/profile/address-book",
        },
        {
          title: "Login & Security", // Password, Two-Factor Authentication
          url: "/user/profile/login-security",
        },
      ],
    },
    {
      title: "Orders & Activity",
      url: "#",
      icon: ShoppingCartIcon,
      items: [
        {
          title: "Order History", // Track & View Orders
          url: "/user/order-history",
        },
        {
          title: "Returns & Refunds",
          url: "/user/returns-refunds",
        },
        {
          title: "Cancellations",
          url: "/user/cancellations",
        },
      ],
    },
    {
      title: "Favorites & Lists",
      url: "#",
      icon: HeartIcon,
      items: [
        {
          title: "My Wishlist",
          url: "/user/my-wishlist",
        },
        {
          title: "Saved for Later",
          url: "/user/saved-for-later",
        },
        {
          title: "Product Alerts", //  (Back-in-stock, Price drops)
          url: "/user/product-alerts",
        },
      ],
    },
    {
      title: "Support & Help",
      url: "#",
      icon: HeadsetIcon,
      items: [
        {
          title: "FAQs",
          url: "faqs",
        },
        {
          title: "Live Chat",
          url: "live-chat",
        },
        {
          title: "Report an Issue",
          url: "report-issue",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="relative" collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
