export const metadata = {
  title: "Danyal Arshad | AI & Python Developer",
  description: "World-class AI & Python developer specializing in machine learning, NLP, and full-stack development.",
};

export default function Analytics() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}