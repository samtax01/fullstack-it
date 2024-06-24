import Swal from "sweetalert2";
import { IResponse } from "@/shared/types/api.ts";

export const showActionAlert = (response: IResponse | undefined) => {
  if ([200, 201, 202].includes(response?.status as number)) {
    Swal.fire({
      title: "Action Successful!",
      text: response?.message || "Request completed",
      icon: "success",
    }).then();
  } else {
    console.error("API Request Failed!", response);
    Swal.fire({
      title: "Request failed!",
      text: response?.message || "Please try again",
      icon: "error",
    }).then();
  }
};

export function throttle(callbackFn: VoidFunction, delay = 100) {
  let lastTime = 0;
  return function () {
    if (Date.now() - lastTime < delay) {
      return;
    }
    lastTime = Date.now();
    callbackFn();
  };
}
