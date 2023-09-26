import { getRandomQuote } from "@/lib/getRandomQuote";
import Quote from "./components/Quote";

const HomePage = async () => {
  const randomQuote = await getRandomQuote();

  return <Quote randomQuote={randomQuote} />;
};

export default HomePage;
