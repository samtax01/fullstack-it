import { IBlogResponse, IResponse } from "@/shared/types/api.ts";

export const apiRequest = async <T = IBlogResponse>({
  url,
  action = "GET",
  body,
}: {
  url: string;
  action?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
  body?: string;
}): Promise<IResponse<T> | undefined> => {
  try {
    const response = await fetch(url, {
      method: action,
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json",
      },
      body,
    });

    if (response.status < 200 || response.status >= 300) {
      throw new Error(
        "Status code is not 200" + response && JSON.stringify(response),
      );
    }

    return await response.json();
  } catch (e) {
    console.error(`[Error] Http Request failed: "${url}"`, e);
    return undefined;
  }
};
