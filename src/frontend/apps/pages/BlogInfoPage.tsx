import { IBlogResponse } from "@/shared/types/api.ts";
import { useLoaderData } from "react-router-dom";
import App from "@/frontend/apps/components/app/App.tsx";

function BlogInfoPage() {
  const { blogInfo } = useLoaderData() as {
    blogInfo: IBlogResponse;
  };

  return (
    <App>
      <h1>Blog title: ${blogInfo.title}</h1>
    </App>
  );
}

export default BlogInfoPage;
