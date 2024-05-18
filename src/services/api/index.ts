// import auth from "./auth";
// import utils from "./http/utils";
import verses from "./verses";
import { notificationInterceptor } from "./http/interceptors";
import jsonrpc from "./http/jsonrpc";
import http from "./http/http";

// import { useAuth } from "@/user-account/composables/useAuth";

// const auth: any = null;

const api = {
  // utils,
  verses,
  http,
  init() {
    http.setOptions({
      baseUrl: import.meta.env.VITE_API_URL,
      headers: { "Content-Type": "application/json" },
      token: () => null,
      logout: () => null,
    });
    jsonrpc.addResponseInterceptor(notificationInterceptor);
    // jsonrpc.addResponseInterceptor(authInterceptor);
  },
};

export { api };
export default api;
