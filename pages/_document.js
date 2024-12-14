import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  // componentDidMount() {
  //     window.addEventListener('resize', () => {
  //         // We execute the same script as before
  //         let vh = window.innerHeight * 0.01;
  //         document.documentElement.style.setProperty('--vh', `${vh}px`);
  //     });
  // }
  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" href="https://goong.io/favicon.jpg" />
          {/* <script src='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.2/dist/goong-js.js'></script>
          <link href='https://cdn.jsdelivr.net/npm/@goongmaps/goong-js@1.0.2/dist/goong-js.css' rel='stylesheet' /> */}
          <link rel='stylesheet' href='https://unpkg.com/maplibre-gl/dist/maplibre-gl.css' />
          <script src='https://unpkg.com/maplibre-gl/dist/maplibre-gl.js'></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
          {/* <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
            crossOrigin="" />
          <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
            integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
            crossOrigin=""></script> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-M2CFDW2LED"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-M2CFDW2LED');
            `,
            }}
          />
        </Head>
        <body className="order-body">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
