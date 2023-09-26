import { NextResponse } from "next/server";
import { getAllQuotes } from "@/lib/getAllQuotes";

export const GET = async (request: Request) => {
  const quotes = await getAllQuotes();

  return NextResponse.json(quotes);
};
