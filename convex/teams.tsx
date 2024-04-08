//checking teams already exist or not
/* import {v} from "convex/values"//used for defining types or validation functions.
import { mutation, query } from "./_generated/server";

export const getTeam = query({
    args:{email:v.string()},
    //The ctx object likely contains contextual information such as the database connection, and args contains the arguments passed to the query.
    handler:async(ctx,args)=>{
        const result = await ctx.db.query('teams')
        .filter(q => q.eq(q.field('createdBy'),args.email))
        .collect(); //This method is likely used to collect the results of the query into an array or some other data structure.

        return result;
    },
})
export const createTeam=mutation({
    
    args:{teamName:v.string(),createdBy:v.string()},
    handler:async(ctx, args) =>{
        const result=await ctx.db.insert('teams',args);
        return result;
    },
})
*/
/*
In the context of GraphQL:

Query: Used for fetching data.
Mutation: Used for modifying data.

Mutations in GraphQL are used to perform write operations such as creating, updating, or deleting data. For example, creating a new user, updating a user's profile, or deleting a post would all typically be implemented as mutations.
*/

import {v} from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTeam=query({
    args:{email:v.string()},
    handler:async(ctx, args) =>{
        const result=await ctx.db.query('teams')
        .filter(q=>q.eq(q.field('createdBy'),args.email))
        .collect();

        return result;
    },
})

export const createTeam=mutation({
    args:{teamName:v.string(),createdBy:v.string()},
    handler:async(ctx, args) =>{
        const result=await ctx.db.insert('teams',args);
        return result;
    },
})