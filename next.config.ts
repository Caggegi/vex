import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  transpilePackages: ['three'],

};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);