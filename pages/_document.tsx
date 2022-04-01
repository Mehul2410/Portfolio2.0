import Document, { Html, Head, Main, NextScript } from "next/document";
import * as gtag from "../lib/gtag";
class MyDocument extends Document {
	render() {
		return (
			<Html lang='en-IN'>
				<Head>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
					/>
					<script
						id='gtag-init'
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
					<script
						type='text/javascript'
						dangerouslySetInnerHTML={{
							__html: `      
                   (function(c,l,a,r,i,t,y){
                       c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                       t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                       y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                   })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
                   `,
						}}
					></script>

					<link
						rel='preload'
						href='/fonts/MonumentExtended-Regular.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='/fonts/MonumentExtended-Ultrabold.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
					<link href='/favicon/favicon.ico' rel='shortcut icon' />
					<link href='/favicon/site.webmanifest' rel='manifest' />
					<link
						rel='apple-touch-icon'
						sizes='57x57'
						href='/favicon/apple-icon-57x57.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='60x60'
						href='/favicon/apple-icon-60x60.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='72x72'
						href='/favicon/apple-icon-72x72.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='76x76'
						href='/favicon/apple-icon-76x76.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='114x114'
						href='/favicon/apple-icon-114x114.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='120x120'
						href='/favicon/apple-icon-120x120.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='144x144'
						href='/favicon/apple-icon-144x144.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='152x152'
						href='/favicon/apple-icon-152x152.png'
					/>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/favicon/apple-icon-180x180.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='192x192'
						href='/favicon/android-icon-192x192.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='96x96'
						href='/favicon/favicon-96x96.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon/favicon-16x16.png'
					/>
					<link rel='manifest' href='/manifest.json' />
					<meta name='msapplication-TileColor' content='#eeeeee' />
					<meta
						name='msapplication-TileImage'
						content='/favicon/ms-icon-144x144.png'
					/>
					<meta name='theme-color' content='#eeeeee' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
