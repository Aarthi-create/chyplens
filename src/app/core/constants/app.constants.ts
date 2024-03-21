import { environment as env } from "src/environments/environment"
export const AppConstants = {
    SERVER_CONFIG: {
        URL: env.SERVER_URL,
      },
      COOKIE_CONFIG: {
        DOMAIN: env.cookieDomain,
        EXPIRES_IN: 2,
      },
      INTERCEPTOR_CONFIG: {
        EXCLUDE_ROUTES: "authenticate",
      },
      RESPONSE_HANDLER_CONFIG: {
        SUCCESS_STATUS: "success",
        FAILURE_STATUS: "failed",
        RESPONSE_CODES: {},
      },
    AUTH_CONFIG: {
        AUTH_HEADER_KEY: "Authorization",
        AUTH_TOKEN_STORED_AS: "access_token",
        AUTH_APP_ID: "x-application-id",
        AUTH_APP_VALUE: "nbems-angular",
        AUTH_API_VERSION: "x-api-version",
        AUTH_API_VERSION_VALUE: "1.0.0",
        AUTH_APP_TYPE: "Content-Type",
        AUTH_APP_TYPE_VALUE: "application/json, text/plain, */*",
    },
}