"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ClipboardIcon } from "lucide-react";
import MenuItem from "@/components/MenuItem";
import { getMenuItems, menuItem } from "@/lib/api";
import noImage from "@/lib/assets/no-image-icon.png";
import { sampleSize } from "lodash";

const InputForm = () => {
  const formSchema = z.object({
    url: z.string().min(2, {
      message: "url must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setMenuItems(await getMenuItems({ url: values.url }));
    console.log(menuItems);
  }

  const [menuItems, setMenuItems] = useState([]);

  return (
    <div className="w-screen h-full md:h-screen flex flex-col items-center bg-background">
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
                      endAdornment={<ClipboardIcon className="w-5 h-5 cursor-pointer" onClick={() => {}} />}
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
        <div className="flex flex-col gap-5 overflow-y-auto max-h-fit">
          {sampleSize(menuItems, 2).map((item: menuItem) => (
            <MenuItem
              key={item.name}
              Title={item.name}
              Icon={item.image === "No Image" ? noImage : item.image}
              Price={item.price}
              Description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputForm;
