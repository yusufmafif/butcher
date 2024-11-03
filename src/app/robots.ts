export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
        },
      ],
      sitemap: 'https://ikhwan-butcher.vercel.app/sitemap.xml',
      host: 'https://ikhwan-butcher.vercel.app',
    };
  }