"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signupSchema } from "./signup.schema";
import { Role } from "@/utils/common/enums/role.enum";
import Link from "next/link";
import { EyeIcon, EyeOffIcon, Loader, LockIcon } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSignupMutation } from "@/app/redux-public-app/mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function SignupForm() {
  //* local state
  const [showPassword, setShowPassword] = useState(false);

  //* redux mutations
  const [signup, { isLoading }] = useSignupMutation();

  //* next hooks
  const navigation = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: Role.CUSTOMER,
    },
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    try {
      const res: APIResponse = await signup(values).unwrap();
      if (res.success) {
        toast.success(res.message);
        navigation.push("/auth/login");
      } else {
        if (res.meta) {
          res.meta.error.includes("Duplicate entry") &&
            toast.error("Email already exists.");
        } else toast.error(res.message);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full md:min-w-lg">
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>
              Enter your details below to create an account
            </CardDescription>
            <CardAction>
              <Link href={"/auth/login"}>
                <Button type="button" variant="link">
                  Login
                </Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <div className="flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring">
                      <Input
                        className="border-0 focus-visible:ring-0 shadow-none"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring">
                      <Input
                        type="email"
                        className="border-0 focus-visible:ring-0 shadow-none"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                      <LockIcon className="h-5 w-5 text-muted-foreground" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="border-0 focus-visible:ring-0 shadow-none"
                        {...field}
                      />
                      <button type="button" onClick={togglePasswordVisibility}>
                        {showPassword ? (
                          <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring">
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="border-0 focus-visible:ring-0 shadow-none w-full">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={Role.CUSTOMER}>
                            Customer
                          </SelectItem>
                          <SelectItem value={Role.SELLER}>Seller</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button
              disabled={isLoading}
              variant={"secondary"}
              type="submit"
              className="w-full"
            >
              {isLoading && <Loader className="animate-spin" />} Sign Up
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
