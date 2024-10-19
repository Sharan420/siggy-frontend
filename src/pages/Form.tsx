import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ClipboardIcon, Coins } from "lucide-react";

const Form = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-background">
      <div className="h-full w-1/2 flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-row gap-2 items-center">
            <Coins className="h-[3.25rem] w-auto text-primary" />
            <h1 className="text-7xl italic font-black text-primary">SIGGY</h1>
          </div>

          <ol className="list-decimal list-inside text-base font-semibold">
            <li>
              Open{" "}
              <a
                href="https://www.swiggy.com"
                target="_blank"
                className="text-primary hover:underline"
              >
                Swiggy's website
              </a>{" "}
              and copy any restaurant's link
            </li>
            <li>Paste it below and search</li>
          </ol>
        </div>
        <div className="flex flex-row w-full max-w-lg gap-5">
          <Input
            wrapperClassName="w-full"
            placeholder="https://www.swiggy.com/city/hyderabad/social-serlingampally-circle-raidurg-rest800956"
            endAdornment={
              <ClipboardIcon
                className="w-5 h-5 cursor-pointer"
                onClick={() => {}}
              />
            }
          />
          <Button className="h-full">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
