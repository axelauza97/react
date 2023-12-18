import responseMock from "@/mocks/products.json";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const search = req.nextUrl.searchParams.get("search"); // Accessing the 'search' query parameter
    const result = await new Promise((resolve) => {
      let filterList = responseMock.products.filter((product) =>
        product.title.toUpperCase().includes(search.toUpperCase())
      );
      //console.log(filterList);
      resolve({ ...responseMock, products: filterList });
      /*setTimeout(() => {
        console.log("Delayed for 1 second.");
        resolve(responseMock);
      }, 7000);*/
    });
    return NextResponse.json(result, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to get admins" },
      {
        status: 500,
      }
    );
  }
}
