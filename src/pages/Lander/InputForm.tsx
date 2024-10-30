"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createSearchParams, useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ClipboardIcon } from "lucide-react";
// import MenuItem from "@/components/MenuItem";
// import { getMenuItems, menuItem } from "@/lib/api";
// import noImage from "@/lib/assets/no-image-icon.png";
// import { sampleSize } from "lodash";

const swiggyRegex = /^https:\/\/www\.swiggy\.com\/([a-zA-Z]+)\/([a-zA-Z0-9-]+)(?:\/[a-zA-Z0-9-]+)?$/;

const InputForm = () => {
  const navigate = useNavigate();
  const formSchema = z.object({
    url: z
      .string()
      .min(23, "The URL is too short!")
      .max(150, "The URL is too long!")
      .regex(swiggyRegex, "The URL doesn't seem quite right.."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
    mode: "all",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    navigate({
      pathname: "/restaurant",
      search: createSearchParams({ url: values.url }).toString(),
    });
  }

  return (
    <div className="w-screen h-dvh md:h-screen flex flex-col items-center bg-background">
      <div className="h-full w-[80%] md:w-1/2 flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-7xl italic font-black text-primary">SIGGY</h1>

          <ol className="list-decimal list-inside text-base font-semibold space-y-2">
            <li>
              Open{" "}
              <a href="https://www.swiggy.com" target="_blank" className="text-primary hover:underline">
                Swiggy's website
              </a>{" "}
              and copy any restaurant's link
            </li>
            <li>Paste it below and search</li>
          </ol>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row w-full max-w-lg gap-2 md:gap-5">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      wrapperClassName="w-full"
                      placeholder="https://www.swiggy.com/city/hyderabad/social-serlingampally-circle-raidurg-rest800956"
                      endAdornment={
                        <ClipboardIcon
                          className="w-5 h-5 cursor-pointer"
                          onClick={async () => {
                            try {
                              const text = await navigator.clipboard.readText();
                              form.setValue("url", text);
                              form.trigger("url");
                            } catch (error) {
                              console.error(error);
                            }
                          }}
                        />
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="h-10" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default InputForm;
