import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { fetchBlog } from "@/frontend/helpers/apis/requests.ts";

export const blogInfoLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  if (!params.slug) {
    return { blogInfo: undefined };
  }

  const blogInfoResponse = await fetchBlog(params.slug);
  const blogInfo = blogInfoResponse?.data;
  console.log(blogInfo);

  if (!blogInfo) {
    throw new Response("", {
      status: 404,
      statusText: `Unable to fetch resources! Please reload the page.`,
    });
  }

  return { blogInfo };
};
