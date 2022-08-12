import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
