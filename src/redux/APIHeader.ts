"use client";
import {
  fetchBaseQuery,
  createApi,
  FetchArgs,
  BaseQueryApi,
} from "@reduxjs/toolkit/query/react";

const base_query = fetchBaseQuery({
  baseUrl: process.env.APP_BASE_URL,
  
  prepareHeaders: (headers: any) => {
    const token: string =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC4wLjE1Njo3MDAwL2FwaS91c2Vycy9sb2dpbiIsImlhdCI6MTczNjMzMDY2MCwiZXhwIjoxNzM2NDE3MDYwLCJuYmYiOjE3MzYzMzA2NjAsImp0aSI6IkV4MVdXTHhOcjBWMnNUQWkiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsInV1aWQiOiI4NzBmYjU5Zi1mNTNiLTRlNWYtYmZmNi05ZWIyM2E0ZWFiMjEifQ.SRQO7IfwHm0g8tN8mh5pZWDk5lI4fMe5GShsv2AbJKw";

    headers.set("ngrok-skip-browser-warning", "true");
    headers.set("Content-Type", "application/json");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    }
  },
});

const base_query_auth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  const result: any = await base_query(args, api, extraOptions);
  return result;
};

const APIHeader = createApi({
  baseQuery: base_query_auth,
  endpoints: () => ({}),
});

export default APIHeader;
