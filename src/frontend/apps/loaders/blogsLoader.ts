import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { fetchBlogs } from "@/frontend/helpers/apis/requests.ts";

export const blogsLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const blogsResponse = await fetchBlogs(params as { q: string });
  const blogs = blogsResponse?.data;
  return { blogs };
};
