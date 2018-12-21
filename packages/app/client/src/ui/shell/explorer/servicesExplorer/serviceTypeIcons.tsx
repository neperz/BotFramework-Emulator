import * as React from 'react';
import * as styles from './servicesExplorer.scss';

export const appInsightsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 50 50"
       width="100%"
       height="100%"
       role="presentation"
       aria-hidden="true"
       fill="#fff">
    <g>
      <path d="M19.8 39.4h10.6v3.4H19.8zM23.1 50H27l3.3-3.5H19.8z" fill="rgb(122, 122, 122)"/>
      <path d="M41.2 14.7v-.3C41.2 6.7 34.6.3 26.5.2c-.2-.3-4.8.1-4.8.1-7.3.9-13 7-13 14.1 0 .2-.8 5.8 4.9 10.5 2.6 2.3
      5.3 8.5 5.7 10.3l.3.6h10.6l.3-.6c.4-1.8 3.2-8 5.7-10.2 5.7-4.8 5-10.1 5-10.3z" fill="rgb(104, 33, 122)"/>
      <path d="M30.4 18.1l-1.7 10.6h-2V18.2l.1-.2c3.8 0 3.3-3.5 3.3-3.5H19.8v.3c0 .8.3 3.3 3.5 3.3v10.6
      h-2l-.5-2.5-1.3-8.1c-2.3 0-3-1.5-3.3-2.6v-1.4c0-2.8 3.2-3.1 3.2-3.1h11s3.5.4 3.5 3.5c-.1 0 0 3.6-3.5 3.6z"/>
      <path opacity=".15" d="M41.2 16.4c.1-1 0-1.7 0-1.8v-.3C41.2 6.6 34.6.2 26.5.1c-.2-.3-4.8.1-4.8.1-7.3.9-13 7-13
      14.1 0 .1-.1.9 0 2.1h32.5z"/>
    </g>
  </svg>
);

export const azureBotServiceIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 88 88"
    width="100%"
    height="100%"
    role="presentation"
    aria-hidden="true"
    fill="rgb(242, 242, 242)">
    <g fill="rgb(89, 180, 217)">
      <path d="M44 5.5A38.5 38.5 0 1 1 5.5 44 38.54 38.54 0 0 1 44 5.5M44 0a44 44 0 1 0 44 44A44 44 0 0 0 44 0z"/>
      <path d="M41.33 33.33h5.33v21.33h-5.33z"/>
      <path d="M54.67 62.67H25.33V33.33H20V68h34.67v-5.33zm8-8H68V20H33.33v5.33h29.34v29.34z"/>
      <path d="M51.54 49.33L44 56.88l-7.54-7.55"/>
    </g>
  </svg>
);

export const blobStorageIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="100%"
    role="presentation"
    aria-hidden="true"
    height="100%">
    <g>
      <path d="M0 45.1c0 1 .8 1.9 1.8 1.9h46.3c1 0 1.9-.8 1.9-1.9V12H0v33.1z" fill="rgb(160, 161, 162)"/>
      <path d="M48.1 4.1H1.8C.8 4.1 0 5 0 6v6h50V6c0-1-.8-1.6-1.9-1.6" fill="rgb(122, 122, 122)"/>
      <path d="M4 25.5h42v7H4z" fill="rgb(184, 212, 50)"/>
      <path d="M4 15h42v7H4z" fill="rgb(184, 212, 50)"/>
      <path d="M4 36h42v7H4z" fill="rgb(184, 212, 50)"/>
      <path opacity=".2" d="M2 4C.9 4 0 4.9 0 6v38.6c0 1.1.9 2 2 2h2.2L43.6 4H2z" fill="#fff"/>
    </g>
  </svg>
);

export const cognitiveServicesIcon = (
  <svg
    viewBox="64.048 -1062.413 193.4 114.42"
    role="presentation"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="#3176BC"
            d="M254.908-1005.695c-3.504-8.302-10.753-15.332-20.133-19.63-4.324-14.539-16.426-29.079-34.475-29.079-.575
            0-1.156.015-1.741.044-7.528-5.398-14.84-8.029-22.287-8.029-4.489 0-9.076.991-13.674
            2.952-3.405-1.785-7.312-2.715-11.487-2.715-9.237 0-17.998 4.266-23.406 9.264a23.086 23.086 0 0
            0-5.304-.604c-13.779 0-27.433 11.384-31.124 25.186-11.877 4.309-20.551 12.139-24.624 22.323-3.952
            9.882-3.083 20.93 2.384 30.313 5.43 9.319 14.928 14.883 25.408 14.883 4.021 0 7.896-.821 11.431-2.402 6.372
            5.793 14.571 9.256 22.334 9.256 2.707 0 5.299-.4 7.749-1.193 6.286 5.17 15.922 7.109 23.74 7.109 9.226 0
            17.242-2.437 22.557-6.693 3.444 1.594 7.237 2.421 11.194 2.42h.003c9.899 0 20.127-5.274 25.713-12.607 3.116
            1.277 6.396 1.938 9.712 1.938h.003c10.816-.002 20.86-7.063 25.589-17.989
            3.604-8.33 3.756-16.886.438-24.747z"/>
      <path fill="#fff"
            d="M118.612-995.661h-9.739c-1.215-5.369-6.015-9.394-11.744-9.394-6.644 0-12.049 5.406-12.049 12.05 0 6.645
            5.405 12.051 12.049 12.051 5.696 0 10.471-3.979 11.72-9.3h9.764a2.245 2.245 0 0 1 2.242 2.242v33.091a29.66
            29.66 0 0 0 5.408.906v-33.997c0-4.217-3.432-7.649-7.651-7.649zm-21.483 9.708c-3.887
            0-7.049-3.163-7.049-7.051 0-3.888 3.162-7.05 7.049-7.05s7.049 3.163 7.049 7.05c0 3.888-3.162 7.051-7.049
            7.051zm60.294-7.315v-11.256c0-4.218-3.432-7.648-7.648-7.648H132.66a2.245 2.245 0 0
            1-2.242-2.243v-40.697a31.657 31.657 0 0 0-2.712 2.223 22.18 22.18 0 0 0-2.696-.46v38.934c0 4.219 3.432
            7.651 7.65 7.651h17.115a2.243 2.243 0 0 1 2.24 2.24v11.256c-5.344 1.232-9.344 6.02-9.344 11.733 0 6.644
            5.404 12.05 12.048 12.05s12.049-5.406 12.049-12.05c0-5.713-4.001-10.501-9.345-11.733zm-2.704 18.784c-3.886
            0-7.048-3.163-7.048-7.05 0-3.888 3.162-7.051 7.048-7.051 3.887 0 7.049 3.163 7.049 7.051 0 3.887-3.163
            7.05-7.049 7.05zm76.442-30.02c0-6.644-5.404-12.049-12.047-12.049-6.644 0-12.049 5.405-12.049 12.049 0
            5.696 3.978 10.47 9.297 11.72v2.231a2.243 2.243 0 0 1-2.24 2.242h-21.668v-38.774c0-4.218-3.431-7.65-7.649
            -7.65h-11.743c-1.215-5.368-6.014-9.392-11.743-9.392-6.644 0-12.049 5.406-12.049 12.05 0 6.644 5.405 12.048
            12.049 12.048 5.696 0 10.471-3.978 11.72-9.298h11.767a2.243 2.243 0 0 1 2.241 2.242v74.031c1.75.423
            3.559.672 5.408.737v-30.585h21.668c4.219 0 7.65-3.432 7.65-7.65v-2.207c5.366-1.216 9.388-6.015 9.388-11.745z
            m-69.843-20.525c-3.887 0-7.049-3.162-7.049-7.048 0-3.887 3.162-7.05 7.049-7.05s7.049 3.163 7.049 7.05c0
            3.886-3.162 7.048-7.049 7.048zm57.796 27.574c-3.887 0-7.049-3.163-7.049-7.05s3.162-7.049 7.049-7.049c3.886
            0 7.047 3.162 7.047 7.049s-3.161 7.05-7.047 7.05z"/>
    </g>
  </svg>
);

export const cosmosDbIcon = (
  <svg viewBox="0 0 24 24"
       role="presentation"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       className={ styles.cosmosDbIcon }>
    <g>
      <path d="M19.8 10.8c1 4.3-1.6 8.6-5.9 9.6s-8.5-1.5-9.6-5.8S6 6 10.3 5c4.2-1 8.5 1.6 9.5 5.8z"
            fill="rgb(89, 180, 217)"/>
      <path d="M11 15.9c0-1.2-1-2.1-2.1-2.1h-.4c.3-1.1-.4-2.3-1.5-2.5H4.4c-.5 2.4.2 4.9 1.9 6.8h2.6
      c1.2-.1 2.1-1 2.1-2.2zm2.6-8.7v.4h-.9c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2H20c-.2-2.7-1.8-5-4.1-6.2H15c-.8
      0-1.4.6-1.4 1.4zm6.4 6.3h-4.3c-1 0-1.8.8-1.8 1.8 0 .3.1.6.2.9-1 .3-1.4 1.3-1.2 2.2.2.8.9 1.2 1.7 1.2h1.2
      c2.3-1.2 3.9-3.5 4.2-6.1z" opacity=".5" fill="#fff"/>
      <path d="M3.2 7.4c-.1 0-.2-.1-.2-.2C3 5.7 1.8 4.4.2 4.4c-.1.1-.2-.1-.2-.2S.1 4 .2 4C1.8 4 3 2.7 3 1.2c0-.2.1-.2.2
      -.2s.3 0 .3.2C3.5 2.7 4.7 4 6.3 4c.1 0 .2.1.2.2s-.1.2-.2.2c-1.5 0-2.8 1.2-2.8 2.8 0 .1-.1.2-.3.2z"
            fill="rgb(184, 212, 50)"/>
      <path d="M20.3 23c-.1 0-.1 0-.1-.1 0-.9-.8-1.6-1.7-1.6-.1 0-.1 0-.1-.1s0-.1.1-.1c.9 0 1.6-.7 1.7-1.6 0-.1 0
      -.1.1-.1s.1 0 .1.1c0 .9.8 1.6 1.7 1.6.1 0 .1 0 .1.1s0 .1-.1.1c-.9 0-1.6.7-1.7 1.6.1.1 0 .1-.1.1z" fill="#26bcee"/>
      <path d="M23.7 5.6c-.8-1.2-2.6-1.5-5.5-.8-.9.2-1.8.5-2.6.8.5.3 1.1.6 1.5 1 .5-.1 1-.3 1.4-.4.8-.2 1.5-.3 2.3
      -.3.9 0 1.4.2 1.6.5.3.5 0 1.7-1.6 3.6-.3.3-.6.7-1 1-1.8 1.7-3.8 3.3-6 4.6-2.1 1.3-4.4 2.4-6.8 3.1-2.9.9-4.9.9
      -5.3.2s.4-2.5 2.6-4.6c-.1-.6-.2-1.2-.2-1.8C.7 15.6-.4 18.3.4 19.7c.6.8 1.6 1.2 3 1.2 1.7-.1 3.5-.4 5.1-1.1 2.1
      -.8 4.1-1.8 6-3s3.7-2.5 5.4-4c.7-.6 1.3-1.2 1.9-1.9 2-2.3 2.6-4.1 1.9-5.3z"/>
    </g>
  </svg>
);

export const genericService = (
  <svg
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    role="presentation"
    aria-hidden="true">
    <g>
      <path fill="rgb(184, 212, 50)" d="M39.063 18.75c1.514 0 2.934.289 4.26.867s2.482 1.359 3.467 2.344 1.766 2.14
      2.344 3.467.866 2.746.866 4.26-.289 2.934-.867 4.26-1.359 2.482-2.344 3.467-2.14 1.766-3.467 2.344-2.747.867
      -4.26.867h-12.5c-1.514 0-2.934-.289-4.26-.867s-2.482-1.359-3.467-2.344-1.766-2.14-2.344-3.467-.867-2.747-.867
      -4.26.289-2.934.867-4.26 1.359-2.482 2.344-3.467 2.14-1.766 3.467-2.344 2.747-.867 4.26-.867h1.563v3.125c-1.237
      0-2.421.142-3.552.427s-2.128.741-2.991 1.367-1.55 1.432-2.063 2.417-.769 2.185-.769 3.601c0 1.074.208 2.083.623
      3.027s.977 1.77 1.685 2.478 1.534 1.27 2.478 1.685 1.953.623 3.027.623h12.5c1.074 0 2.083-.208 3.027-.623s1.77
      -.977 2.478-1.685 1.27-1.534 1.685-2.478.623-1.953.623-3.027c0-1.416-.256-2.616-.769-3.601s-1.2-1.79-2.063-2.417
      -1.86-1.082-2.991-1.367-2.315-.427-3.552-.427V18.75h1.562z"/>
      <path fill="rgb(89, 180, 217)" d="M21.875 31.25v-3.125c1.237 0 2.421-.142 3.552-.427s2.128-.741 2.991-1.367 1.55
      -1.432 2.063-2.417.769-2.185.769-3.601c0-1.074-.208-2.083-.623-3.027s-.977-1.77-1.685-2.478-1.534-1.27-2.478
      -1.685-1.952-.623-3.026-.623h-12.5c-1.074 0-2.083.208-3.027.623s-1.77.977-2.478 1.685-1.27 1.534-1.685 2.478
      -.623 1.953-.623 3.027c0 1.416.256 2.616.769 3.601s1.2 1.79 2.063 2.417 1.86 1.082 2.991 1.367 2.315.427
      3.552.427v3.125h-1.563c-1.514 0-2.934-.289-4.26-.867S4.195 29.024 3.21 28.04 1.444 25.9.866 24.573 0 21.826 0
      20.313s.289-2.934.867-4.26 1.359-2.482 2.344-3.467 2.14-1.766 3.467-2.344 2.747-.867 4.26-.867h12.5c1.514 0
      2.934.289 4.26.867s2.482 1.359 3.467 2.344c.985.985 1.766 2.14 2.344 3.467s.867 2.747.867 4.26-.289 2.934-.867
      4.26-1.359 2.482-2.344 3.467c-.985.985-2.14 1.766-3.467 2.344s-2.747.867-4.26.867h-1.563z"/>
    </g>
  </svg>
);
