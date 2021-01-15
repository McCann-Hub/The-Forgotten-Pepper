<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 581.103 581.104">
    <defs>
      <linearGradient id="simmer" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="yellow" />
        <stop offset="100%" stop-color="orange" />
      </linearGradient>
      <radialGradient id="heat" cx="0.5" cy="1" fx="0.5" fy="1.1" r="1.2">
        <stop offset="0%" stop-color="red" />
        <stop offset="10%" stop-color="orangered" />
        <stop offset="30%" stop-color="purple" />
        <stop offset="60%" stop-color="darkslateblue" />
        <stop offset="100%" stop-color="blue" />
      </radialGradient>
      <radialGradient id="handle" cx="0.5" cy="0.5" fx="0" fy="0" r="1">
        <stop offset="0%" stop-color="blue" />
        <stop offset="50%" stop-color="darkslateblue" />
        <stop offset="100%" stop-color="blue" />
      </radialGradient>
    </defs>
    <g>
      <path
        class="handle"
        d="M315.416,378.768l-3.37-7.256c47.938-22.263,223.516-22.519,230.966-22.519c6.684,0,9.288-2.604,9.288-9.287   s-2.604-9.287-9.288-9.287l-218.168,0.001v-8l218.168-0.001c11.148,0,17.288,6.14,17.288,17.287   c0,10.986-6.301,17.287-17.288,17.287C541.205,356.993,361.765,357.242,315.416,378.768z"
      ></path>

      <path
        class="pan outer"
        d="M303.554,383.568l-251.017-0.016c-9.736-0.875-17.838-8.203-19.743-17.84l-13.123-52.152h291.01   c10.021,0,18.174,8.152,18.174,18.174c0,0.032-0.009,3.037-0.314,4.571l-5.026,29.214c-1.877,9.771-10.006,17.155-19.782,18.033   L303.554,383.568z"
      ></path>

      <path
        class="pan inner"
        d="M53.085,375.568h250.099c6.167-0.629,11.278-5.328,12.46-11.481l5.07-29.444c0.07-0.559,0.141-2.231,0.141-2.908   c0-5.61-4.564-10.174-10.174-10.174H29.934l10.694,42.526C41.81,370.24,46.92,374.939,53.085,375.568z"
      ></path>

      <!-- https://itchylabs.com/tools/path-to-bezier/ -->
      <path
        class="simmer first"
        d="M158.528, 204.194
C157.54, 202.218, 158.34099999999998, 199.815, 160.31699999999998, 198.82799999999997
C162.29299999999998, 197.83699999999996, 164.69599999999997, 198.64099999999996, 165.68399999999997, 200.61599999999999
C170.53599999999997, 210.319, 170.53599999999997, 219.93099999999998, 170.53599999999997, 224.552
C170.53599999999997, 231.844, 168.17999999999998, 238.911, 165.902, 245.74599999999998
C163.73, 252.26299999999998, 161.678, 258.417, 161.678, 264.413
C161.678, 268.659, 161.678, 272.326, 165.684, 280.342
C166.672, 282.318, 165.871, 284.71999999999997, 163.895, 285.70799999999997
C163.32, 285.994, 162.709, 286.13, 162.108, 286.13
C162.108, 286.13, 162.108, 286.13, 162.108, 286.13"
      ></path>

      <path
        class="simmer second"
        d="M190.46900000000002, 158.964
C192.44500000000002, 159.952, 193.24500000000003, 162.355, 192.258, 164.331
C188.251, 172.346, 188.251, 176.01299999999998, 188.251, 180.259
C188.251, 186.253, 190.303, 192.409, 192.476, 198.926
C194.754, 205.761, 197.111, 212.82899999999998, 197.111, 220.12199999999999
C197.111, 224.74099999999999, 197.111, 234.35299999999998, 192.259, 244.05599999999998
C191.557, 245.456, 190.145, 246.267, 188.678, 246.267
C188.678, 246.267, 188.678, 246.267, 188.678, 246.267"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  name: "LoadingIcon",
};
</script>

<style scoped>
svg path.simmer {
  fill-opacity: 0;
  stroke: url(#simmer);
  stroke-width: 4;
  stroke-dasharray: 100;
}

svg path.simmer.first {
  animation: sizzle 10s linear infinite;
}

svg path.simmer.second {
  animation: sizzle 10s 2.5s linear infinite;
  stroke-opacity: 0;
}

svg path.pan {
  fill: url(#heat);
}

svg path.pan.inner {
  fill: none;
}

svg path.handle {
  fill: url(#handle);
}

@keyframes sizzle {
  0% {
    stroke-opacity: 0;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-opacity: 1;
  }
  100% {
    stroke-opacity: 0;
    stroke-dashoffset: 1000;
  }
}
</style>