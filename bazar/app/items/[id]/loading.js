"use client";

export default function Loading() {
  return (
    <>
      <section className="gap-4 sm:gap-2 sm:p-2 sm:max-h-[38rem] my-auto flex-1 grid max-w-xs sm:max-w-4xl max-h-[38rem] mx-auto grid-rows-[1fr,min-content,min-content,min-content] sm:grid-cols-[auto,auto,max-content] sm:grid-rows-3">
        <section className="grid items-center grid-cols-3 grid-rows-2 gap-2 sm:grid-rows-3 sm:col-span-2 sm:row-span-4 justify-items-center">
          <section className="w-56 h-56 col-span-3 row-span-2 sm:col-span-2 sm:row-span-3 rounded-xl active:scale-95 sm:h-72 sm:w-64 bg-slate-700 animate-pulse" />
          {Array(3)
            .fill(2)
            .map(() => (
              <section
                key={1}
                className="w-24 h-24 rounded-xl active:scale-95 sm:h-40 sm:w-36 bg-slate-700 animate-pulse"
              ></section>
            ))}
        </section>
        <section className="sm:w-52 sm:self-end sm:mx-auto sm:pl-8">
          <section className="rounded h-14 sm:self-center bg-slate-700 animate-pulse" />
        </section>
        <section className="h-20 rounded sm:w-36 sm:pl-8 sm:mx-auto sm:self-center bg-slate-700 animate-pulse" />
        <button className="sm:ml-8 p-2 mb-4 px-8 mx-auto font-semibold bg-red-400 rounded shadow-md cursor-pointer self-top active:bg-red-500 active:scale-95 h-fit bottom-2 w-full sm:w-[width:10rem]">
          Buy
        </button>
      </section>
    </>
  );
}
