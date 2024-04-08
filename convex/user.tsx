// Writing query to get user information
//Queries are the bread and butter of your backend API. They fetch data from the database, check authentication or perform other business logic, and return data back to the client application.
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getUser = query({
  // Exporting a GraphQL query named 'getUser'.
  args: {
    email: v.string(), // Expecting an 'email' argument, validated as a string using 'v.string()'.
  },

  handler: async (ctx, args) => {
    // Defining the function that will be executed when the query is invoked. It's an asynchronous function that takes 'ctx' (context) and 'args' (arguments) as parameters.
    const result = await ctx.db
      .query("user") // Querying the database to get all users.
      .filter((q) => q.eq(q.field("email"), args.email)) // Filtering the result to find the user whose email matches the provided email.
      .collect(); // Collecting and returning the filtered result.

    return result;
  },
});

// mutation use for CRUD operation
export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    // Defining the function that will be executed when the mutation is invoked. It's an asynchronous function that takes 'ctx' (context) and 'args' (arguments) as parameters.
    return await ctx.db.insert("user", args); // Inserting a new user into the database using 'ctx.db.insert("user", args)' and returning the result.
  },
});
