import { StyledContainer } from "@/frontend/apps/_Sample/style.ts";
import { HTMLAttributes } from "react";

function _Sample(props: HTMLAttributes<HTMLDivElement>) {
  return <StyledContainer {...props}></StyledContainer>;
}

export default _Sample;
