import Quote from "@/components/Quote";
import { getRandomQuote } from "@/lib/getRandomQuote";

const HomePage = async () => {
  const randomQuote = await getRandomQuote();

  return <Quote randomQuote={randomQuote} />;
};

export default HomePage;
