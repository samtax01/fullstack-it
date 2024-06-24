export interface IResponse<T = IBlogResponse> {
  status: number;
  message?: string;
  data?: T;
}

export interface IBlogRequest {
  title: string;
  content: string;
  slug: string;
}

export interface IBlog extends IBlogRequest {
  id: string;
}

export interface IBlogResponse extends IBlog {
  source?: "database" | "ai";
}
