import { NextResponse } from "next/server";
import { getRandomQuote } from "@/lib/getRandomQuote";

export const GET = async () => {
  const quote = await getRandomQuote();

  return NextResponse.json(quote);
};
