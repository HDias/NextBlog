function Ga() {
    const GA_MEASUREMENT_ID = process.env.GA_KEY;
    if (process.env.APP_ENV === 'production') {
      return (
        <div>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </div>
      );
    } else {
      return ''
    }
    
}

export default Ga;