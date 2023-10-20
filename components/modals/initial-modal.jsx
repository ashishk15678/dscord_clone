"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "postcss";
import { Button } from "../ui/button";
const InitialModal = () => {
  const formSchema = z.object({
    name: z.string().min(1, { message: "Server name is required" }),
    imageUrl: z.string().min(1, { message: "Image Url is required" }),
  });

  const form = new useForm({
    resolver: new zodResolver(formSchema),
    defaultValues: { name: "", ImageUrl: "" },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <div>
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            {" "}
            <DialogTitle>Cusomise your server</DialogTitle>
            <DialogDescription>
              Giver your server a name , you can always change it later{" "}
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-8 px-6">
                <div className="flex-items-center justify-center text-center">
                  TODO:image upload
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                        Server Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                          placeholder="Enter server name"
                          {...field}
                        ></Input>
                      </FormControl>
                    </FormItem>
                  )}
                ></FormField>
              </div>
              <DialogFooter className={"bg-gray-50"}>
                <Button disabled={isLoading}>Create</Button>
              </DialogFooter>
            </form>{" "}
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InitialModal;
