"use client";

import APIHeader from "@/redux/APIHeader";
import { Method } from "@/utils/common/enums/method.enum";

const APP_BASE_URL = process.env.APP_BASE_URL;

const apiTag = APIHeader.enhanceEndpoints({
  addTagTypes: ["public_app"],
});

export const public_app_mutation = apiTag.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: `${APP_BASE_URL}/users/register`,
        method: Method.POST,
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${APP_BASE_URL}/users/login`,
        method: Method.POST,
        body: data,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = public_app_mutation;
