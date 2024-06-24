import { IBlog, IBlogResponse, IResponse } from "@/shared/types/api.ts";
import { apiRequest } from "@/frontend/helpers/apis/apiRequest.ts";

export const fetchBlogs = async (
  params?: Partial<{
    q: string;
  }>,
): Promise<IResponse<IBlogResponse[]> | undefined> => {
  const url = "/api/blogs?" + new URLSearchParams(params);
  return await apiRequest({ url, action: "GET" });
};

export const fetchBlog = async (
  inquiry: string,
): Promise<IResponse<IBlog> | undefined> => {
  const url =
    "/api/blog?" + new URLSearchParams({ inquiry: inquiry || "", lang: "en" });

  return await apiRequest({
    url,
  });
};
