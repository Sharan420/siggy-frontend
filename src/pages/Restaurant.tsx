/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RestaurantResponse, getRestaurantDetails, getMenuItems, menuItem } from "@/lib/api";
import { useSearchParams } from "react-router-dom";
import { sample, throttle } from "lodash";
import noImage from "@/lib/assets/no-image-icon.png";
import MenuItem from "@/components/MenuItem";

const Restaurant = () => {
  const [restaurantDetails, setRestaurantDetails] = useState<RestaurantResponse>();
  const [budgetFood, setBudgetFood] = useState<menuItem[]>();
  const [menuItems, setMenuItems] = useState<menuItem[]>();
  const [searchParams] = useSearchParams();
  const swigurl = searchParams.get("url")?.toString() || "";

  const getBudgetFood = useCallback(
    throttle(async (budget: number) => {
      if (budget === null) setBudgetFood([]);
      else {
        let total = 0,
          rounds = 0;
        const foundFood: menuItem[] = [];
        const sortedFood = menuItems
          ?.filter((food) => food.price <= budget)
          .sort((foodA, foodB) => foodA.price - foodB.price);

        while (total < budget && rounds < 16) {
          rounds++;
          const randomItem = sample(sortedFood);
          if (!randomItem) continue;
          const newTotal = total + randomItem.price;
          if (newTotal > budget) continue;
          else {
            total = newTotal;
            foundFood.push(randomItem);
          }
        }
        setBudgetFood(foundFood);
      }
    }, 250),
    [menuItems]
  );

  const handleBudgetChange = (event: { target: { value: string } }) => {
    getBudgetFood(parseInt(event.target.value));
  };
  useEffect(() => {
    (async () => {
      const details = await getRestaurantDetails({
        url: swigurl,
      });
      setRestaurantDetails(details);
      const menu = await getMenuItems({
        url: swigurl,
      });
      setMenuItems(menu);
    })();
    // setRestaurantDetails({
    //   location: "Delhi",
    //   name: "California Burrito",
    //   price: "₹₹",
    //   rating: "4.3",
    // });
  }, []);

  return (
    <main className="w-full h-full flex flex-col justify-center items-center gap-10 py-8">
      <Card className="w-11/12 md:w-2/3">
        <CardHeader className="">
          {restaurantDetails ? (
            <>
              <CardTitle className="font-black text-2xl">{restaurantDetails.name}</CardTitle>
              <CardDescription className="text-sm">{restaurantDetails.location}</CardDescription>
              <Separator />
            </>
          ) : (
            <>
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </>
          )}
        </CardHeader>
        <CardContent>
          {restaurantDetails && (
            <div className="w-full flex flex-row justify-between">
              <p className="text-sm">Price: {restaurantDetails.price}</p>
              <p className="text-sm">Rating: {restaurantDetails.rating}</p>
            </div>
          )}
        </CardContent>
      </Card>
      {menuItems && (
        <div className="w-11/12 md:w-2/3 flex flex-row gap-2">
          <h1 className="text-2xl font-bold">Price Range</h1>
          <Input placeholder="₹₹" onChange={handleBudgetChange} />
        </div>
      )}
      <div className="flex flex-col gap-5 overflow-y-auto max-h-fit w-11/12 md:w-2/3 no-scrollbar">
        {budgetFood &&
          budgetFood.map((item: menuItem) => (
            <MenuItem
              key={item.name}
              Title={item.name}
              Icon={item.image === "No Image" ? noImage : item.image}
              Price={item.price}
              Description={item.description}
            />
          ))}
      </div>
    </main>
  );
};

export default Restaurant;
