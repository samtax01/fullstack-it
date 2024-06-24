import { IBlogResponse, IResponse } from "../../shared/types/api";
import { ServerError } from "../helpers/exceptions";

export class BlogController {
  async create(post: string): Promise<IResponse<string>> {
    try {
      return { status: 200, data: `Created ${post}` };
    } catch (e) {
      const error = e as ServerError;
      return { status: error.status || 500, message: error.message };
    }
  }

  async get(id: string): Promise<IResponse<IBlogResponse>> {
    try {
      const data = {
        id: id,
        title: "Hello World 1",
        slug: "hello-world1",
        content: `Hello World 2 ${id}`,
      };

      return { status: 200, data };
    } catch (e) {
      const error = e as ServerError;
      return {
        status: error.status || 500,
        message: error.message || "Internal Server Error",
      };
    }
  }

  async getAll(q?: string): Promise<IResponse<IBlogResponse[]>> {
    try {
      const data = [
        {
          id: "1",
          title: "Hello World 1",
          slug: "hello-world1",
          content: `Content 1`,
        },
        {
          id: "2",
          title: "Hello World 2",
          slug: "hello-world2",
          content: `Content 2. Search query is ${q}`,
        },
      ];

      return { status: 200, data };
    } catch (e) {
      const error = e as ServerError;
      return {
        status: error.status || 500,
        message: error.message || "Internal Server Error",
      };
    }
  }

  async delete(id: string): Promise<IResponse<string>> {
    try {
      return { status: 200, data: `Deleted ${id}` };
    } catch (e) {
      const error = e as ServerError;
      return { status: error.status || 500, message: error.message };
    }
  }
}
