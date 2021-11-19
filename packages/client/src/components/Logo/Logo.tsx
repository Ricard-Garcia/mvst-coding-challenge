import React from "react";

// Utils
import { ThemeProp } from "../../utils/types";
import { setTheme } from "../../utils/theme";

// Styles
import "./Logo.scss";

export default function Logo({ isLight }: ThemeProp) {
  // Theme colors
  const [primary, secondary] = setTheme(isLight);

  return (
    <svg
      width="80"
      height="19"
      viewBox="0 0 80 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`logo-path-${secondary}`}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.803 14.9818L45.417 12.8269H42.7917V17.7524L43.5638 17.9833C44.0958 18.1543 44.8422 18.3211 45.803 18.4836C46.7639 18.646 47.6733 18.7273 48.5312 18.7273C50.5731 18.7273 52.2418 18.2014 53.5373 17.1496C54.8327 16.0978 55.4805 14.6398 55.4805 12.7756C55.4805 11.8349 55.266 11.014 54.837 10.3128C54.408 9.61162 53.8718 9.08145 53.2284 8.72229C52.5849 8.36314 51.89 8.02964 51.1436 7.72179C50.3972 7.41395 49.7023 7.16169 49.0589 6.96501C48.4154 6.76833 47.8792 6.49896 47.4503 6.15691C47.0213 5.81486 46.8068 5.41295 46.8068 4.95118C46.8068 4.421 47.0427 3.98489 47.5146 3.64284C47.9865 3.30079 48.6599 3.12976 49.535 3.12976C50.2728 3.12976 51.0278 3.25803 51.7999 3.51457L52.4434 5.69514H54.8113L54.94 1.02615L54.1678 0.769614C53.6531 0.598588 52.9238 0.427563 51.9801 0.256538C51.0364 0.0855118 50.1356 0 49.2776 0C47.3387 0 45.7644 0.474591 44.5548 1.42379C43.3451 2.37298 42.7402 3.71124 42.7402 5.43861C42.7402 6.43056 42.9547 7.28995 43.3837 8.01681C43.8126 8.74367 44.3488 9.29095 44.9923 9.65866C45.6357 10.0264 46.3349 10.3684 47.0899 10.6848C47.8449 11.0012 48.5441 11.2535 49.1876 11.4416C49.831 11.6297 50.3672 11.8948 50.7962 12.2369C51.2251 12.5789 51.4396 12.9808 51.4396 13.4426C51.4396 14.0925 51.1393 14.6013 50.5388 14.969C49.9382 15.3367 49.2004 15.5205 48.3253 15.5205C47.3301 15.5205 46.4894 15.341 45.803 14.9818ZM7.33528 16.1619V18.3938H0V16.1619L1.93034 15.5206V3.33502L0 2.5654V0.436138L6.64036 0.307869L10.501 8.85058L14.5419 0.436138L20.7189 0.307869V2.5654L18.8658 3.33502V15.5206L20.7962 16.1619V18.3938H13.1263V16.1619L15.1338 15.5206V5.79778C14.825 6.6016 14.4689 7.43535 14.0657 8.29903C13.6625 9.16271 13.2078 10.1033 12.7016 11.1209C12.1954 12.1386 11.8051 12.9381 11.5305 13.5196L8.75086 13.6478L5.79101 7.56789L5.35347 6.2339V15.5206L7.33528 16.1619ZM29.607 18.3938L24.408 3.28371L22.6578 2.5654V0.436138L30.6365 0.307869V2.5654L28.7319 3.30936L31.0998 10.7233L31.9234 13.8787L32.747 10.8516L35.2951 3.33502L33.339 2.5654V0.436138L41.0346 0.307869V2.5654L39.1558 3.33502L33.7251 18.3938H29.607ZM61.2543 18.3938V16.1619L63.3648 15.5206V3.33502H60.9197L60.2763 5.77213H57.9084V0.384831L72.8363 0.307869V5.77213H70.4427L69.7993 3.33502H67.3542V15.5206L69.4904 16.1619V18.3938H61.2543ZM76.2809 14.7125C75.8434 15.1315 75.6246 15.6916 75.6246 16.3928C75.6246 17.1453 75.809 17.7225 76.1779 18.1244C76.5469 18.5263 77.0831 18.7273 77.7866 18.7273C78.4043 18.7273 78.9276 18.5178 79.3566 18.0988C79.7855 17.6797 80 17.1111 80 16.3928C80 15.6574 79.8156 15.0887 79.4467 14.6868C79.0777 14.2849 78.5415 14.0839 77.838 14.0839C77.2375 14.0839 76.7184 14.2934 76.2809 14.7125Z"
      />
    </svg>
  );
}