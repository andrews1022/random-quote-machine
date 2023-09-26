import { drizzle } from "drizzle-orm/planetscale-serverless";
import { eq } from "drizzle-orm";
import { connect } from "@planetscale/database";

import { config } from "@/db/config";
import { quotes, authors, categories } from "@/db/schema";
import type { Quote } from "@/types";

export const getAllQuotes = async (): Promise<Quote[]> => {
  // connect to the database
  const connection = connect(config);
  const database = drizzle(connection);

  // query the database with drizzle
  const results: Quote[] = await database
    .select({
      author: authors.author,
      category: categories.category,
      quote: quotes.quote // we want a quote: from quotesTable.quotesColumn
    })
    .from(quotes) // from the quotes table
    .innerJoin(authors, eq(quotes.authorId, authors.id))
    .innerJoin(categories, eq(quotes.categoryId, categories.id));

  // const result = await db.select().from(users).innerJoin(pets, eq(users.id, pets.ownerId))

  // raw SQL query for comparison:
  // SELECT A.author, C.category, Q.quote
  // FROM quotes Q
  // INNER JOIN authors A ON Q.author_id = A.id
  // INNER JOIN categories C on Q.category_id = C.id;

  return results;
};
