import { useContext } from "react";
import { AppContext } from "@/frontend/contexts/AppContext.tsx";
import { IBlogResponse } from "@/shared/types/api.ts";
import { useLoaderData } from "react-router-dom";
import App from "@/frontend/apps/components/app/App.tsx";

function HomePage() {
  const appContext = useContext(AppContext)!;
  const { blogs } = useLoaderData() as {
    blogs: IBlogResponse[];
  };

  return appContext.isLoading ? (
    <p>Loading...</p>
  ) : (
    <App>
      <h1>Welcome!</h1>
      <hr />

      <ul className="list-disc">
        {blogs?.map((blog) => (
          <li className="bg-sky-100 m-2 p-2" key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </App>
  );
}

export default HomePage;
