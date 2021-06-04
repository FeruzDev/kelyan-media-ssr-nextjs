import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
          <Html>
              <Head >

                  <style>
                  {

                      `
                      body{
                      background-color: #120212;
                      }
                      .Loader {
                      margin: 0;
                      padding: 0;
                      height: 100vh;
                      // width: 100vw;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      position: fixed;
                      top: 0;


                      z-index: 99999
                  }
                  
                  .videoLoaderDes{
     width: 100vw !important;
     height: auto !important;
     }
     
     video{

     //height: 100vh !important;
     width: 100vw !important;
        }
        
        .videoLoaderMob{
     display: none;
     width: 100vw !important;
     height: auto !important;
   
   
   }
     
     @media  (max-width: 765px) {
     
     .videoLoaderDes{
      display: none;
    }
     
      .videoLoaderMob{
      display: block !important;

      margin-left: auto;
    }
     
     
     }
                  
                  
                  `


                  }

                  </style>

                  <meta name="google-site-verification" content="sQMB2bATmIiCcqBZ2aDdK1qyuhMXsLzGPdYrFNI-0DA" />
                  <link rel="icon" href="favicon.ico" />

              </Head>
              <body>
            <div className="Loader" id="kotLoader">
                <video id="desVid" src="/video/des1.webm"  className="videoLoaderDes" autoPlay loop muted playsInline />
                <video id="mobVid" src="/video/mob1.webm " className="videoLoaderMob"  autoPlay loop muted playsInline />
            </div>

              <Main />
              <NextScript />


              </body>
          </Html>
        );
    }
}

export default MyDocument;