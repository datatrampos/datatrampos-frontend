import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <Head>
        <title>DataTrampos - As melhores vagas do Brasil para Dados.</title>
        <meta
          name="description"
          content="Encontre as todas as vagas nas áreas de dados disponíveis em todo o Brasil. Nós agrupamos as melhores oportunidades em diversas Startups e Unicórnios"
        />
        <meta
          httpEquiv="content-type"
          content="application/xhtml+xml; charset=UTF-8"
        />
        <meta
          name="keywords"
          lang="en"
          content="vagas, trabalho, dados, data, estagio, oportunidades"
        />
        <meta
          name="keywords"
          lang="en"
          content="jobs, vacancies, data, openings"
        />
        <meta rel="start" href="/" title="Home" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
