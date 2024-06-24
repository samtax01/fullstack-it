import { AppProvider } from "@/frontend/contexts/AppContext.tsx";
import { blogInfoLoader } from "@/frontend/apps/loaders/blogInfoLoader.ts";
import { RouteObject } from "react-router/dist/lib/context";
import HomePage from "@/frontend/apps/pages/HomePage.tsx";
import App from "@/frontend/apps/components/app/App.tsx";
import BlogInfoPage from "@/frontend/apps/pages/BlogInfoPage.tsx";
import { blogsLoader } from "@/frontend/apps/loaders/blogsLoader.ts";

export const getHomePage: RouteObject = {
  element: (
    <AppProvider>
      <App>
        <HomePage />
      </App>
    </AppProvider>
  ),
  loader: blogsLoader,
};

export const getOutItRouter = [
  {
    path: "/",
    index: true,
    ...getHomePage,
  },

  {
    path: "/blogs/:slug",
    element: (
      <AppProvider>
        <App>
          <BlogInfoPage />
        </App>
      </AppProvider>
    ),
    loader: blogInfoLoader,
  },
] as RouteObject[];
