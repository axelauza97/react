"use client";

export default function Loading() {
  return (
    <>
      <section className="p-2 gap-4 sm:max-h-[38rem] sm:my-auto flex-1 grid max-w-xs sm:max-w-4xl max-h-screen mx-auto grid-rows-[1fr,min-content,min-content,0.25fr] sm:grid-cols-3 auto sm:grid-rows-3">
        <section className="grid items-center grid-cols-3 grid-rows-3 gap-2 sm:col-span-2 sm:row-span-4 justify-items-center">
          <section className="col-span-2 row-span-3 w-52 h-52 rounded-xl bg-slate-700 animate-pulse"></section>
          {Array(3)
            .fill(2)
            .map(() => (
              <section
                key={crypto.randomUUID()}
                className="w-24 h-24 rounded-3xl bg-slate-700 animate-pulse sm:h-40 sm:w-40"
              ></section>
            ))}
        </section>
        <section className="h-10 text-xl font-bold text-center rounded sm:self-center bg-slate-700 animate-pulse"></section>
        <section className="h-20 text-xl font-bold text-center rounded sm:self-center bg-slate-700 animate-pulse"></section>
        <button className="p-2 px-8 mx-auto font-semibold bg-red-400 rounded shadow-md cursor-pointer self-top active:bg-red-500 active:scale-95 h-fit bottom-2 w-fit">
          Buy
        </button>
      </section>
    </>
  );
}
