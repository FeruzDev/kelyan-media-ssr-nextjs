import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  useEffect(() => {
    import('react-facebook-pixel')
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init('<script>\n' +
              '  !function(f,b,e,v,n,t,s)\n' +
              '  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n' +
              '  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n' +
              '  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=\'2.0\';\n' +
              '  n.queue=[];t=b.createElement(e);t.async=!0;\n' +
              '  t.src=v;s=b.getElementsByTagName(e)[0];\n' +
              '  s.parentNode.insertBefore(t,s)}(window, document,\'script\',\n' +
              '  \'https://connect.facebook.net/en_US/fbevents.js\');\n' +
              '  fbq(\'init\', \'1159083431258877\');\n' +
              '  fbq(\'track\', \'PageView\');\n' +
              '</script>\n' +
              '<noscript><img height="1" width="1" style="display:none"\n' +
              '  src="https://www.facebook.com/tr?id=1159083431258877&ev=PageView&noscript=1"\n' +
              '/></noscript>') // facebookPixelId
          ReactPixel.pageView()

          router.events.on('routeChangeComplete', () => {
            ReactPixel.pageView()
          })
        })
  }, [router.events])
  return <Component {...pageProps} />
}

export default MyApp
