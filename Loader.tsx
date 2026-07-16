import { Briefcase } from "lucide-react";

interface LoaderProps {
  fullScreen?: boolean;
  text?: string;
}

export default function Loader({
  fullScreen = true,
  text = "Loading...",
}: LoaderProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-5">

      {/* Animated Logo */}

      <div className="relative">

        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-ping"></div>

        <div className="relative w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-xl">

          <Briefcase
            size={38}
            className="text-white"
          />

        </div>

      </div>

      {/* Spinner */}

      <div className="relative">

        <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>

      </div>

      {/* Text */}

      <div className="text-center">

        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          Job Foundation
        </h2>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          {text}
        </p>

      </div>

    </div>
  );

  if (!fullScreen) {
    return (
      <div className="flex justify-center items-center py-16">
        {content}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-white dark:bg-slate-950 flex justify-center items-center">
      {content}
    </div>
  );
}