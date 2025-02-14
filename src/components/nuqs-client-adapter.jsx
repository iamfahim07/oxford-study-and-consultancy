import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";

export const NuqsClientAdapter = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NuqsAdapter>{children}</NuqsAdapter>
    </Suspense>
  );
};
