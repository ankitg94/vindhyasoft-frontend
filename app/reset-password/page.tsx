// app/reset-password/page.tsx
import { Suspense } from "react";
import ResetPasswordClient from "./ResetPasswordClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading reset form...</div>}>
      <ResetPasswordClient />
    </Suspense>
  );
}
