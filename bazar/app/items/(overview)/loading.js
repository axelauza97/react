"use client";

export default function Loading() {
  return (
    <section className="sm:m-4">
      <section className="h-8 sm:w-full max-w-xl m-4 rounded-lg sm:mx-auto bg-slate-700 animate-pulse"></section>

      <section className="h-12 sm:w-full max-w-xl m-4 rounded-lg sm:mx-auto bg-slate-700 animate-pulse"></section>

      {Array(3)
        .fill(0)
        .map(() => (
          <section
            key={crypto.randomUUID()}
            className="h-32 sm:w-full max-w-xl p-2 m-4 mt-2 border rounded-lg cursor-pointer sm:mx-auto auto-rows-min bg-slate-700 animate-pulse sm:grid-cols-2 sm:max-w-4xl"
          ></section>
        ))}
    </section>
  );
}
