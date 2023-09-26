import { NextResponse } from "next/server";
import { getRandomQuote } from "@/lib/getRandomQuote";

export const GET = async (request: Request) => {
  const quote = await getRandomQuote();

  return NextResponse.json(quote);
};
