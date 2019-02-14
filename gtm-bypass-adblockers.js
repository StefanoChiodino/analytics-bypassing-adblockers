// This is literally what GTM give your, just adding https://analytics-bypassing-adblockers.netlify.com/proxy/
// in front of https://www.googletagmanager.com/gtm.js. That's enough for ad blockers to not now that this is GTM...
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://analytics-bypassing-adblockers.netlify.com/proxy/https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PDMCJXV');