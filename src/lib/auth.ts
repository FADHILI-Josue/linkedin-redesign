import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./mongodb";

const getclientdata = ()=>{
    const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET} = process.env

    if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID.length === 0) {
        throw new Error("no client id found")
    }
        if (!GOOGLE_CLIENT_SECRET || GOOGLE_CLIENT_SECRET.length === 0) {
        throw new Error("no client id found")
    }
    return {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET};
}


export const AuthOptions: NextAuthOptions={

    providers: [
      GoogleProvider({
        clientId: getclientdata().GOOGLE_CLIENT_ID,
        clientSecret:getclientdata().GOOGLE_CLIENT_SECRET
      }),
      
    ],
    secret:"hello",
    debug:true,
    adapter: MongoDBAdapter(clientPromise),
    pages:{
        signIn: '/home'
    },
    session:{
      strategy: 'jwt',
    }
  }