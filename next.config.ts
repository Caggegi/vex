import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  output: 'export', // fondamentale per static export
  images: { unoptimized: true }, // opzionale se usi immagini ottimizzate
  basePath: '/ve', // sostituisci con il nome della tua repo
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);