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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-6 h-6"
          >
            <path
              fill="#FFFFFF"
              stroke="#FFFFFF"
              stroke-width="13"
              transform-origin="center"
              d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"
            >
              <animateTransform
                type="rotate"
                attributeName="transform"
                calcMode="spline"
                dur="2"
                values="0;120"
                keyTimes="0;1"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </svg>
          <p className="text-white font-semibold text-md">{splashText}</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
