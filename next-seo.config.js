/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "lalashop",
  titleTemplate: "%s | lalashop",
  defaultTitle: "lalashop",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://lalashop.sznm.dev",
  openGraph: {
    url: "https://lalashop.sznm.dev",
    title: "lalashop",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**lalashop**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "lalashop.sznm.dev og-image",
      },
    ],
    site_name: "lalashop",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
