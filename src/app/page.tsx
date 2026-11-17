import { ApiStatus } from "@/components/api-status";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

export default function Homepage(){
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Go Bank</h1>
      <p className="mt-2 text-gray-600">Your money, built from scratch.</p>

      <Suspense fallback={<p className="mt-6 text-sm text-gray-400">Checking API...</p>}>
        <ApiStatus/>
      </Suspense>
      <div className="mt-6 flex gap-3">
        <Button size={"lg"}>Open an account</Button>
        <Button size={"lg"} variant={"outline"}>Sign in</Button>
        <Button size={"lg"} variant={"ghost"}>Learn more</Button>
      </div>
    </main>
  )
}