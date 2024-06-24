import { StyledContainer } from "./style.ts";
import { HTMLAttributes } from "react";

function App(props: HTMLAttributes<HTMLDivElement>) {
  return <StyledContainer>{props.children}</StyledContainer>;
}

export default App;
