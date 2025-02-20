import { Loader } from "lucide-react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";

export const NuqsClientAdapter = ({ children }) => {
  return (
    <Suspense fallback={<NuqsClientAdapterLoader />}>
      <NuqsAdapter>{children}</NuqsAdapter>
    </Suspense>
  );
};

const NuqsClientAdapterLoader = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};
