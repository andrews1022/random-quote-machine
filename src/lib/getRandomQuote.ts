import { getAllQuotes } from "./getAllQuotes";
import type { Quote } from "@/types";

// keep track of some state outside the function
// this avoids returning the same quote we had before
const previousQuoteState = {
  previous: 1,
  setPrevious: function (num: number) {
    this.previous = num;
  }
};

export const getRandomQuote = async (): Promise<Quote> => {
  const results = await getAllQuotes();

  let randomIndex = previousQuoteState.previous;

  while (randomIndex === previousQuoteState.previous) {
    randomIndex = Math.floor(Math.random() * results.length);
  }

  previousQuoteState.setPrevious(randomIndex);

  return results[randomIndex];
};
