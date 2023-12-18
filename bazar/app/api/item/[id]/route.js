import responseMock from "@/mocks/products.json";
import { NextResponse } from "next/server";

/*export default function handler(req, res) {
  const { id } = req.query;
  res.end(`Post: ${pid}`);
}*/
export async function GET(req, context) {
  try {
    const id = context.params.id;
    console.log(id);
    const result = await new Promise((resolve, reject) => {
      let filterList = responseMock.products.filter(
        (product) => product.id == id
      );
      //console.log(filterList);
      resolve(...filterList);
      /*setTimeout(() => {
        console.log("Delayed for 1 second.");
        resolve(responseMock);
      }, 1000);*/
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
