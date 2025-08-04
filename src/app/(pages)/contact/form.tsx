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
import Link from "next/link";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { contactSchema, IContact } from "./contact.schema";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useCreate_contactMutation } from "@/app/redux-public-app/mutation";

export function ContactForm() {
  //* mutations
  const [create_contact, { isLoading }] = useCreate_contactMutation();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      isAgreed: false,
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    try {
      const res: APIResponse = await create_contact(values).unwrap();
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error("send to message failed:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Enter your details below to send a message
            </CardDescription>
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
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <div className="flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring">
                      <Textarea
                        className="border-0 focus-visible:ring-0 shadow-none"
                        placeholder="Enter your message"
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
              name="isAgreed"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="acceptTerms"
                        ref={field.ref}
                        name={field.name}
                        disabled={field.disabled}
                      />
                      <Label htmlFor="acceptTerms">
                        You agree to our{" "}
                        <Link href="/terms-of-use" className="underline">
                          terms of use
                        </Link>
                        .
                      </Label>
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
              {isLoading && <Loader className="animate-spin" />} Send Message
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
