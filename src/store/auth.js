import { writable } from "svelte/store";
import { navigate } from "svelte-routing";

export const token = writable("");

export const getToken = payload => {
  console.log("payload :", payload);
  myRequest().then(function(r) {
    if (r >= 0.5) {
      token.set(r);
      console.log("r :", r);
      navigate("game");
    }
    console.log("token :", token);
  });
};

let myRequest = function() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random());
    }, 2000);
  });
};
