import { useRouteError } from "react-router-dom";
import App from "@/frontend/apps/components/app/App.tsx";

function ErrorPage() {
  const error = useRouteError() as { statusText: string; message: string };
  console.error(error);

  return (
    <App>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </App>
  );
}

export default ErrorPage;
