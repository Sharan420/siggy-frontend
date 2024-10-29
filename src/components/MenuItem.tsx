import { Button } from "./ui/button";

interface MenuItemProps {
  Title: string;
  Icon: string;
  Price: number;
  Description: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ Title, Icon, Price, Description }) => {
  return (
    <div className="relative md:p-2 p-2 pb-[36px] flex flex-row justify-between w-full max-w-11/12 md:max-w-2/3 border-solid border-primary border-2 rounded-lg">
      <div className="flex flex-col gap-1 w-[68%]">
        <h1 className="font-bold text-xl line-clamp-2">{Title}</h1>
        <p className="text-sm font-light line-clamp-2">{Description}</p>
      </div>
      <img src={Icon} alt={Title} className="aspect-square w-[25%] md:w-[15%]" />
      <Button className="absolute w-[20%] md:w-[10%] right-4 bottom-2">{"₹ " + Price}</Button>
    </div>
  );
};

export default MenuItem;
