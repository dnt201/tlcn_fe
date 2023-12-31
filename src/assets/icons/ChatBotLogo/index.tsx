import React from 'react';
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg height="30" width="128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <path
            d="M45.29 21.75c4.5 0 7.29-3.06 7.47-6.709h-3.316c-.229 2.014-1.5 3.777-4.155 3.777-3 0-4.26-2.04-4.26-4.898v-2.899c0-2.857 1.275-4.897 4.26-4.897 2.651 0 3.926 1.759 4.155 3.776h3.315c-.18-3.649-2.959-6.709-7.47-6.709-5.381 0-7.804 3.443-7.804 8.007v2.55c0 4.567 2.423 8.002 7.804 8.002zM54.645 21.397h3.465v-7.852c0-1.785.994-2.704 2.55-2.704 1.68 0 2.423 1.099 2.423 2.625v7.931h3.465v-8.49c0-3.135-1.808-5.074-4.692-5.074-1.706 0-3.06.75-3.75 1.875V2.782h-3.468l.007 18.615zM73.174 21.704c1.53 0 3.21-.637 3.825-1.53v1.223h3.338v-8.464c0-3.086-2.27-5.1-5.584-5.1-2.854 0-4.92 1.376-5.685 3.953h3.214c.375-.717 1.095-1.25 2.295-1.25 1.425 0 2.295.916 2.295 2.142v1.811a5.336 5.336 0 00-3.375-1.125c-3.188 0-5.355 1.328-5.355 4.208.007 2.576 2.047 4.132 5.032 4.132zm.893-2.295c-1.455 0-2.55-.712-2.55-1.938 0-1.227 1.02-1.876 2.65-1.876 1.557 0 2.705.69 2.705 1.876 0 1.184-1.275 1.938-2.805 1.938zM86.816 21.397h2.42v-2.805h-1.403c-.92 0-1.253-.356-1.253-1.222v-6.428h2.831V8.137h-2.83V4.52h-3.492v3.618h-1.875v2.805h1.875v6.683c-.019 2.347 1.177 3.772 3.727 3.772zM91.11 21.398h8.138c3.57 0 6.041-2.04 6.041-5.022 0-2.422-1.477-3.825-3.315-4.207a4.497 4.497 0 002.25-4.125c0-2.678-1.965-4.5-5.1-4.5H91.11v17.854zm3.47-2.805v-4.875h4.462c1.683 0 2.677.94 2.677 2.422 0 1.481-.941 2.445-2.651 2.445l-4.489.008zm0-7.65v-4.59h3.723c1.477 0 2.347.87 2.347 2.22s-.817 2.37-2.32 2.37h-3.75zM112.309 21.705c3.979 0 6.248-2.602 6.248-6V13.83c0-3.375-2.269-6-6.248-6s-6.247 2.599-6.247 6v1.875c0 3.398 2.268 6 6.247 6zm2.88-5.764c0 1.737-.915 3.034-2.88 3.034-1.965 0-2.88-1.297-2.88-3.034v-2.343c0-1.737.915-3.038 2.88-3.038 1.965 0 2.88 1.301 2.88 3.038v2.343zM124.706 21.397h2.404v-2.805h-1.402c-.919 0-1.249-.356-1.249-1.222v-6.428h2.831V8.137h-2.831V4.52h-3.495v3.618h-1.875v2.805h1.875v6.683c-.008 2.347 1.192 3.772 3.742 3.772z"
            fill="#1B1B20"
         />
         <path
            d="M22.11 11.771v2.936a1.039 1.039 0 01-.588.957c-2.044.98-4.27 1.52-6.536 1.586a16.192 16.192 0 01-6.533-1.579 1.043 1.043 0 01-.592-.964v-2.936a.83.83 0 011.155-.731 15.803 15.803 0 005.97 1.335c2.058-.05 4.087-.5 5.973-1.328a.828.828 0 011.152.724z"
            fill="#06F"
         />
         <path
            d="M29.813 18.649a7.08 7.08 0 01-7.14 6.476h-3.938L11.235 30v-4.875l7.5-4.875h3.945a2.204 2.204 0 002.273-1.973 85.15 85.15 0 00-.056-11.25 2.089 2.089 0 00-1.965-1.897c-2.558-.157-5.25-.255-7.947-.255-2.696 0-5.388.09-7.946.27a2.089 2.089 0 00-1.965 1.898 85.156 85.156 0 00-.056 11.25A2.205 2.205 0 007.29 20.25h3.945v4.875H7.298a7.08 7.08 0 01-7.125-6.48 90.075 90.075 0 01.056-12A6.971 6.971 0 016.69.285C9.36.094 12.173 0 14.985 0c2.813 0 5.625.094 8.295.285a6.97 6.97 0 016.477 6.375c.285 3.99.303 7.996.056 11.989z"
            fill="#06F"
         />
      </svg>
   );
}
export default SvgComponent;
