import { cn } from "@/lib/utils";
interface LoaderProps {
  className?: string;
  splashText?: string;
}

const Loader: React.FC<LoaderProps> = ({ className, splashText }) => {
  return (
    <div
      className={cn(
        "absolute z-10 flex flex-col items-center h-screen w-screen bg-primary transition-all duration-150 opacity-100",
        className
      )}
    >
      <div className="flex flex-col justify-center h-full w-fit">
        <h1 className="text-white font-black italic text-[6rem] tracking-widest leading-[1em]">
          SIGGY
        </h1>
        <div className="flex flex-row justify-center items-center w-full gap-1">
          <div className="h-6 w-6 loaderICON"></div>
          <p className="text-white font-semibold text-md">{splashText}</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
