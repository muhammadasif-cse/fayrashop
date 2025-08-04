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
import { LoginSchema } from "./login.schema";
import Link from "next/link";
import { EyeIcon, EyeOffIcon, Loader, LockIcon } from "lucide-react";
import { useState } from "react";

import { useLoginMutation } from "@/app/redux-public-app/mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export function LoginForm() {
  //* local state
  const [showPassword, setShowPassword] = useState(false);

  //* redux mutations
  const [login, { isLoading }] = useLoginMutation();

  //* hooks
  const { setAuthInfo } = useAuth();
  const navigation = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    try {
      const res: APIResponse = await login(values).unwrap();
      if (res.success) {
        toast.success(res.message);
        setAuthInfo({
          token: res.data.access_token,
          user: res.data.user,
          is_loggedIn: true,
        });
        navigation.push("/");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="md:min-w-lg w-full">
          <CardHeader>
            <CardTitle>Login your account</CardTitle>
            <CardDescription>
              Enter your details below to login to your account
            </CardDescription>
            <CardAction>
              <Link href={"/auth/signup"}>
                <Button type="button" variant="link">
                  Sign Up
                </Button>
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-4">
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
          </CardContent>
          <CardFooter>
            <Button
              disabled={isLoading}
              variant={"secondary"}
              type="submit"
              className="w-full"
            >
              {isLoading && <Loader className="animate-spin" />} Login
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
