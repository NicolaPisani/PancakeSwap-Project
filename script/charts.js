const $tradingViewButton = document.querySelector("#tradingView");
const $chainLinkButton = document.querySelector("#chainLink");
const $buttons = document.querySelectorAll(".prediction-section__chart-button");
var $chart = document.querySelector("#chart");
const $resizeBar = document.querySelector(".prediction-section__resize-bar");
const $content = document.querySelector(".prediction-section__content");
const $minimizeText = document.querySelector("#minimize");
const $anchor = document.querySelector("#anchor");

const frame = document.createElement("iframe");
frame.classList.add("prediction-section__chart--trading-view");
frame.src =
  "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_b239c&symbol=BINANCE%3ACAKEUSD&interval=5&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=light&style=1&timezone=Europe%2FRome&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%22header_fullscreen_button%22%5D&disabled_features=%5B%5D&locale=en&utm_source=pancakeswap.finance&utm_medium=widget&utm_campaign=chart&utm_term=BINANCE%3ACAKEUSD#%7B%22page-uri%22%3A%22pancakeswap.finance%2Fprediction%22%7D";
frame.setAttribute("frameborder", "0");
frame.setAttribute("allowtransparency", "true");
frame.setAttribute("scrolling", "no");
frame.setAttribute("allowfullscreen", "");
const svgDiv = document.createElement("div");
svgDiv.classList.add("prediction-section__graph");
svgDiv.innerHTML = `<svg
    class="recharts-surface"
    viewBox="0 0 1194 270"
    version="1.1"
  >
    <title></title>
    <desc></desc>
    <defs>
      <clipPath id="recharts102-clip">
        <rect x="0" y="20" height="215" width="1134"></rect>
      </clipPath>
    </defs>
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stop-color="#00E7B0" stop-opacity="0.34"></stop>
        <stop offset="100%" stop-color="#0C8B6C" stop-opacity="0"></stop>
      </linearGradient>
    </defs>
    <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
      <line
        color="var(--colors-text)"
        font-size="12px"
        orientation="bottom"
        width="1134"
        height="30"
        type="category"
        x="0"
        y="235"
        class="recharts-cartesian-axis-line"
        stroke="#666"
        fill="none"
        x1="0"
        y1="235"
        x2="1134"
        y2="235"
      ></line>
      <g class="recharts-cartesian-axis-ticks">
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1110.857142857143"
            y1="241"
            x2="1110.857142857143"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="1110.857142857143"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="1110.857142857143" dy="0.71em">
              21:03
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1064.5714285714284"
            y1="241"
            x2="1064.5714285714284"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="1064.5714285714284"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="1064.5714285714284" dy="0.71em">
              21:00
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1018.2857142857142"
            y1="241"
            x2="1018.2857142857142"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="1018.2857142857142"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="1018.2857142857142" dy="0.71em">
              20:57
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="972"
            y1="241"
            x2="972"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="972"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="972" dy="0.71em">
              20:54
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="925.7142857142857"
            y1="241"
            x2="925.7142857142857"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="925.7142857142857"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="925.7142857142857" dy="0.71em">
              20:51
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="879.4285714285714"
            y1="241"
            x2="879.4285714285714"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="879.4285714285714"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="879.4285714285714" dy="0.71em">
              20:48
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="833.1428571428571"
            y1="241"
            x2="833.1428571428571"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="833.1428571428571"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="833.1428571428571" dy="0.71em">
              20:45
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="786.8571428571429"
            y1="241"
            x2="786.8571428571429"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="786.8571428571429"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="786.8571428571429" dy="0.71em">
              20:42
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="740.5714285714286"
            y1="241"
            x2="740.5714285714286"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="740.5714285714286"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="740.5714285714286" dy="0.71em">
              20:39
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="694.2857142857142"
            y1="241"
            x2="694.2857142857142"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="694.2857142857142"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="694.2857142857142" dy="0.71em">
              20:36
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="648"
            y1="241"
            x2="648"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="648"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="648" dy="0.71em">
              20:33
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="601.7142857142857"
            y1="241"
            x2="601.7142857142857"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="601.7142857142857"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="601.7142857142857" dy="0.71em">
              20:30
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="555.4285714285714"
            y1="241"
            x2="555.4285714285714"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="555.4285714285714"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="555.4285714285714" dy="0.71em">
              20:27
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="509.1428571428571"
            y1="241"
            x2="509.1428571428571"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="509.1428571428571"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="509.1428571428571" dy="0.71em">
              20:24
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="462.85714285714283"
            y1="241"
            x2="462.85714285714283"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="462.85714285714283"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="462.85714285714283" dy="0.71em">
              20:21
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="416.57142857142856"
            y1="241"
            x2="416.57142857142856"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="416.57142857142856"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="416.57142857142856" dy="0.71em">
              20:18
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="370.2857142857143"
            y1="241"
            x2="370.2857142857143"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="370.2857142857143"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="370.2857142857143" dy="0.71em">
              20:15
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="324"
            y1="241"
            x2="324"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="324"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="324" dy="0.71em">
              20:12
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="277.7142857142857"
            y1="241"
            x2="277.7142857142857"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="277.7142857142857"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="277.7142857142857" dy="0.71em">
              20:09
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="231.42857142857142"
            y1="241"
            x2="231.42857142857142"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="231.42857142857142"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="231.42857142857142" dy="0.71em">
              20:07
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="185.14285714285714"
            y1="241"
            x2="185.14285714285714"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="185.14285714285714"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="185.14285714285714" dy="0.71em">
              20:04
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="138.85714285714286"
            y1="241"
            x2="138.85714285714286"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="138.85714285714286"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="138.85714285714286" dy="0.71em">
              20:02
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="92.57142857142857"
            y1="241"
            x2="92.57142857142857"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="92.57142857142857"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="92.57142857142857" dy="0.71em">
              19:59
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="46.285714285714285"
            y1="241"
            x2="46.285714285714285"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="46.285714285714285"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="46.285714285714285" dy="0.71em">
              19:56
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="0"
            y1="241"
            x2="0"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="12.6328125"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="12.6328125" dy="0.71em">
              19:53
            </tspan>
          </text>
        </g>
      </g>
    </g>
    <g class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
      <line
        color="var(--colors-text)"
        font-size="12px"
        orientation="bottom"
        width="1134"
        height="30"
        type="category"
        x="0"
        y="235"
        class="recharts-cartesian-axis-line"
        stroke="#666"
        fill="none"
        x1="0"
        y1="235"
        x2="1134"
        y2="235"
      ></line>
      <g class="recharts-cartesian-axis-ticks">
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1110.857142857143"
            y1="241"
            x2="1110.857142857143"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="1110.857142857143"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="1110.857142857143" dy="0.71em">
              21:03
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1064.5714285714284"
            y1="241"
            x2="1064.5714285714284"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="1064.5714285714284"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="1064.5714285714284" dy="0.71em">
              21:00
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1018.2857142857142"
            y1="241"
            x2="1018.2857142857142"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="1018.2857142857142"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="1018.2857142857142" dy="0.71em">
              20:57
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="972"
            y1="241"
            x2="972"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="972"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="972" dy="0.71em">
              20:54
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="925.7142857142857"
            y1="241"
            x2="925.7142857142857"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="925.7142857142857"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="925.7142857142857" dy="0.71em">
              20:51
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="879.4285714285714"
            y1="241"
            x2="879.4285714285714"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="879.4285714285714"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="879.4285714285714" dy="0.71em">
              20:48
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="833.1428571428571"
            y1="241"
            x2="833.1428571428571"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="833.1428571428571"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="833.1428571428571" dy="0.71em">
              20:45
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="786.8571428571429"
            y1="241"
            x2="786.8571428571429"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="786.8571428571429"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="786.8571428571429" dy="0.71em">
              20:42
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="740.5714285714286"
            y1="241"
            x2="740.5714285714286"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="740.5714285714286"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="740.5714285714286" dy="0.71em">
              20:39
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="694.2857142857142"
            y1="241"
            x2="694.2857142857142"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="694.2857142857142"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="694.2857142857142" dy="0.71em">
              20:36
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="648"
            y1="241"
            x2="648"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="648"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="648" dy="0.71em">
              20:33
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="601.7142857142857"
            y1="241"
            x2="601.7142857142857"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="601.7142857142857"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="601.7142857142857" dy="0.71em">
              20:30
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="555.4285714285714"
            y1="241"
            x2="555.4285714285714"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="555.4285714285714"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="555.4285714285714" dy="0.71em">
              20:27
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="509.1428571428571"
            y1="241"
            x2="509.1428571428571"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="509.1428571428571"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="509.1428571428571" dy="0.71em">
              20:24
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="462.85714285714283"
            y1="241"
            x2="462.85714285714283"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="462.85714285714283"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="462.85714285714283" dy="0.71em">
              20:21
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="416.57142857142856"
            y1="241"
            x2="416.57142857142856"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="416.57142857142856"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="416.57142857142856" dy="0.71em">
              20:18
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="370.2857142857143"
            y1="241"
            x2="370.2857142857143"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="370.2857142857143"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="370.2857142857143" dy="0.71em">
              20:15
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="324"
            y1="241"
            x2="324"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="324"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="324" dy="0.71em">
              20:12
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="277.7142857142857"
            y1="241"
            x2="277.7142857142857"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="277.7142857142857"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="277.7142857142857" dy="0.71em">
              20:09
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="231.42857142857142"
            y1="241"
            x2="231.42857142857142"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="231.42857142857142"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="231.42857142857142" dy="0.71em">
              20:07
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="185.14285714285714"
            y1="241"
            x2="185.14285714285714"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="185.14285714285714"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="185.14285714285714" dy="0.71em">
              20:04
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="138.85714285714286"
            y1="241"
            x2="138.85714285714286"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="138.85714285714286"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="138.85714285714286" dy="0.71em">
              20:02
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="92.57142857142857"
            y1="241"
            x2="92.57142857142857"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="92.57142857142857"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="92.57142857142857" dy="0.71em">
              19:59
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="46.285714285714285"
            y1="241"
            x2="46.285714285714285"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="46.285714285714285"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="46.285714285714285" dy="0.71em">
              19:56
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="0"
            y="235"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="0"
            y1="241"
            x2="0"
            y2="235"
          ></line>
          <text
            color="var(--colors-text)"
            font-size="12px"
            orientation="bottom"
            width="1134"
            height="30"
            type="category"
            x="12.6328125"
            y="243"
            stroke="none"
            fill="var(--colors-text)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="middle"
          >
            <tspan x="12.6328125" dy="0.71em">
              19:53
            </tspan>
          </text>
        </g>
      </g>
    </g>
    <g class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
      <line
        color="var(--colors-textSubtle)"
        font-size="12px"
        orientation="right"
        width="60"
        height="215"
        type="number"
        x="1134"
        y="20"
        class="recharts-cartesian-axis-line"
        stroke="#666"
        fill="none"
        x1="1134"
        y1="20"
        x2="1134"
        y2="235"
      ></line>
      <g class="recharts-cartesian-axis-ticks">
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1134"
            y="20"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1140"
            y1="235"
            x2="1134"
            y2="235"
          ></line>
          <text
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1152"
            y="235"
            stroke="none"
            fill="var(--colors-textSubtle)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="start"
          >
            <tspan x="1152" dy="0.355em">
              1.398
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1134"
            y="20"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1140"
            y1="208.45679012345676"
            x2="1134"
            y2="208.45679012345676"
          ></line>
          <text
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1152"
            y="208.45679012345676"
            stroke="none"
            fill="var(--colors-textSubtle)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="start"
          >
            <tspan x="1152" dy="0.355em">
              1.4
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1134"
            y="20"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1140"
            y1="181.9135802469135"
            x2="1134"
            y2="181.9135802469135"
          ></line>
          <text
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1152"
            y="181.9135802469135"
            stroke="none"
            fill="var(--colors-textSubtle)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="start"
          >
            <tspan x="1152" dy="0.355em">
              1.402
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1134"
            y="20"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1140"
            y1="155.37037037037027"
            x2="1134"
            y2="155.37037037037027"
          ></line>
          <text
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1152"
            y="155.37037037037027"
            stroke="none"
            fill="var(--colors-textSubtle)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="start"
          >
            <tspan x="1152" dy="0.355em">
              1.404
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1134"
            y="20"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1140"
            y1="128.82716049382702"
            x2="1134"
            y2="128.82716049382702"
          ></line>
          <text
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1152"
            y="128.82716049382702"
            stroke="none"
            fill="var(--colors-textSubtle)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="start"
          >
            <tspan x="1152" dy="0.355em">
              1.406
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1134"
            y="20"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1140"
            y1="102.28395061728376"
            x2="1134"
            y2="102.28395061728376"
          ></line>
          <text
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1152"
            y="102.28395061728376"
            stroke="none"
            fill="var(--colors-textSubtle)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="start"
          >
            <tspan x="1152" dy="0.355em">
              1.408
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1134"
            y="20"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1140"
            y1="75.7407407407405"
            x2="1134"
            y2="75.7407407407405"
          ></line>
          <text
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1152"
            y="75.7407407407405"
            stroke="none"
            fill="var(--colors-textSubtle)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="start"
          >
            <tspan x="1152" dy="0.355em">
              1.41
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1134"
            y="20"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1140"
            y1="49.197530864197276"
            x2="1134"
            y2="49.197530864197276"
          ></line>
          <text
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1152"
            y="49.197530864197276"
            stroke="none"
            fill="var(--colors-textSubtle)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="start"
          >
            <tspan x="1152" dy="0.355em">
              1.412
            </tspan>
          </text>
        </g>
        <g class="recharts-layer recharts-cartesian-axis-tick">
          <line
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1134"
            y="20"
            class="recharts-cartesian-axis-tick-line"
            stroke="#666"
            fill="none"
            x1="1140"
            y1="22.65432098765402"
            x2="1134"
            y2="22.65432098765402"
          ></line>
          <text
            color="var(--colors-textSubtle)"
            font-size="12px"
            orientation="right"
            width="60"
            height="215"
            type="number"
            x="1152"
            y="22.65432098765402"
            stroke="none"
            fill="var(--colors-textSubtle)"
            class="recharts-text recharts-cartesian-axis-tick-value"
            text-anchor="start"
          >
            <tspan x="1152" dy="0.355em">
              1.414
            </tspan>
          </text>
        </g>
      </g>
    </g>
    <g class="recharts-layer recharts-area">
      <g class="recharts-layer">
        <path
          fill="url(#gradient)"
          stroke-width="2"
          fill-opacity="0.6"
          points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
          width="1134"
          height="215"
          type="linear"
          stroke="none"
          class="recharts-curve recharts-area-area"
          d="M1134,112.90123456789988L1110.857142857143,107.59259259259183L1087.7142857142858,106.26543209876482L1064.5714285714284,103.6111111111108L1041.4285714285713,102.28395061728376L1018.2857142857142,102.28395061728376L995.1428571428571,95.64814814814574L972,103.6111111111108L948.8571428571429,82.3765432098756L925.7142857142857,91.6666666666647L902.5714285714286,86.35802469135665L879.4285714285714,90.33950617283769L856.2857142857142,82.3765432098756L833.1428571428571,91.6666666666647L810,114.22839506172691L786.8571428571429,122.191358024689L763.7142857142857,127.5L740.5714285714286,138.11728395061613L717.4285714285714,147.40740740740523L694.2857142857142,188.5493827160486L671.1428571428571,181.9135802469135L648,172.62345679012145L624.8571428571429,173.95061728394847L601.7142857142857,185.89506172839455L578.5714285714286,181.9135802469135L555.4285714285714,179.2592592592595L532.2857142857142,184.56790123456753L509.1428571428571,181.9135802469135L486,176.6049382716025L462.85714285714283,188.5493827160486L439.7142857142857,207.12962962962973L416.57142857142856,209.78395061728378L393.42857142857144,185.89506172839455L370.2857142857143,172.62345679012145L347.1428571428571,172.62345679012145L324,163.33333333333235L300.85714285714283,184.56790123456753L277.7142857142857,235L254.57142857142856,192.5308641975296L231.42857142857142,162.00617283950533L208.28571428571428,134.13580246913506L185.14285714285714,112.90123456789988L162,61.14197530864042L138.85714285714286,50.5246913580243L115.71428571428571,30.617283950616113L92.57142857142857,29.290123456789114L69.42857142857143,45.21604938271327L46.285714285714285,38.58024691357821L23.142857142857142,21.327160493827023L0,20L0,235L23.142857142857142,235L46.285714285714285,235L69.42857142857143,235L92.57142857142857,235L115.71428571428571,235L138.85714285714286,235L162,235L185.14285714285714,235L208.28571428571428,235L231.42857142857142,235L254.57142857142856,235L277.7142857142857,235L300.85714285714283,235L324,235L347.1428571428571,235L370.2857142857143,235L393.42857142857144,235L416.57142857142856,235L439.7142857142857,235L462.85714285714283,235L486,235L509.1428571428571,235L532.2857142857142,235L555.4285714285714,235L578.5714285714286,235L601.7142857142857,235L624.8571428571429,235L648,235L671.1428571428571,235L694.2857142857142,235L717.4285714285714,235L740.5714285714286,235L763.7142857142857,235L786.8571428571429,235L810,235L833.1428571428571,235L856.2857142857142,235L879.4285714285714,235L902.5714285714286,235L925.7142857142857,235L948.8571428571429,235L972,235L995.1428571428571,235L1018.2857142857142,235L1041.4285714285713,235L1064.5714285714284,235L1087.7142857142858,235L1110.857142857143,235L1134,235Z"
        ></path>
        <path
          type="linear"
          stroke="#31D0AA"
          fill="none"
          stroke-width="2"
          fill-opacity="0.6"
          points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
          width="1134"
          height="215"
          class="recharts-curve recharts-area-curve"
          d="M1134,112.90123456789988L1110.857142857143,107.59259259259183L1087.7142857142858,106.26543209876482L1064.5714285714284,103.6111111111108L1041.4285714285713,102.28395061728376L1018.2857142857142,102.28395061728376L995.1428571428571,95.64814814814574L972,103.6111111111108L948.8571428571429,82.3765432098756L925.7142857142857,91.6666666666647L902.5714285714286,86.35802469135665L879.4285714285714,90.33950617283769L856.2857142857142,82.3765432098756L833.1428571428571,91.6666666666647L810,114.22839506172691L786.8571428571429,122.191358024689L763.7142857142857,127.5L740.5714285714286,138.11728395061613L717.4285714285714,147.40740740740523L694.2857142857142,188.5493827160486L671.1428571428571,181.9135802469135L648,172.62345679012145L624.8571428571429,173.95061728394847L601.7142857142857,185.89506172839455L578.5714285714286,181.9135802469135L555.4285714285714,179.2592592592595L532.2857142857142,184.56790123456753L509.1428571428571,181.9135802469135L486,176.6049382716025L462.85714285714283,188.5493827160486L439.7142857142857,207.12962962962973L416.57142857142856,209.78395061728378L393.42857142857144,185.89506172839455L370.2857142857143,172.62345679012145L347.1428571428571,172.62345679012145L324,163.33333333333235L300.85714285714283,184.56790123456753L277.7142857142857,235L254.57142857142856,192.5308641975296L231.42857142857142,162.00617283950533L208.28571428571428,134.13580246913506L185.14285714285714,112.90123456789988L162,61.14197530864042L138.85714285714286,50.5246913580243L115.71428571428571,30.617283950616113L92.57142857142857,29.290123456789114L69.42857142857143,45.21604938271327L46.285714285714285,38.58024691357821L23.142857142857142,21.327160493827023L0,20"
        ></path>
      </g>
      <g class="recharts-layer recharts-area-dots">
        <circle
          r="4"
          type="linear"
          stroke="#31D0AA"
          fill="var(--colors-secondary)"
          stroke-width="0"
          fill-opacity="1"
          points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
          width="1134"
          height="215"
          cx="1064.5714285714284"
          cy="103.6111111111108"
          class="recharts-dot"
        ></circle>
        <circle
          r="4"
          type="linear"
          stroke="#31D0AA"
          fill="var(--colors-secondary)"
          stroke-width="0"
          fill-opacity="1"
          points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
          width="1134"
          height="215"
          cx="995.1428571428571"
          cy="95.64814814814574"
          class="recharts-dot"
        ></circle>
        <circle
          r="4"
          type="linear"
          stroke="#31D0AA"
          fill="var(--colors-secondary)"
          stroke-width="0"
          fill-opacity="1"
          points="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
          width="1134"
          height="215"
          cx="902.5714285714286"
          cy="86.35802469135665"
          class="recharts-dot"
        ></circle>
      </g>
    </g>
  </svg>`;

var firstColumn = 1.2;
var thirdColumn = 0.8;
var isMouseDragging = false;

$buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (i === 0) {
      $buttons[1].classList.remove(
        "prediction-section__chart-button--selected"
      );
      button.classList.add("prediction-section__chart-button--selected");
      $minimizeText.classList.remove("prediction-section__ref--minimize");
      $anchor.innerHTML = "TradingView";
      $resizeBar.style.cursor = "row-resize";
      $chart.classList.add("open");

      if ($chart.firstChild === null) {
        $chart.append(frame);
        firstColumn = 1.2;
        thirdColumn = 0.8;
        newRows = `${firstColumn}fr 24px ${thirdColumn}fr`;
        $content.style.gridTemplateRows = newRows;
      } else if ($chart.firstChild !== frame) {
        $chart.replaceChild(frame, $chart.firstChild);
      } else {
        $chart.append(frame);
      }
    } else {
      $buttons[0].classList.remove(
        "prediction-section__chart-button--selected"
      );
      button.classList.add("prediction-section__chart-button--selected");
      $minimizeText.classList.remove("prediction-section__ref--minimize");
      $anchor.innerHTML = "Chainlink Oracle";
      $resizeBar.style.cursor = "row-resize";
      $chart.classList.add("open");

      if ($chart.firstChild === null) {
        $chart.append(svgDiv);
        firstColumn = 1.2;
        thirdColumn = 0.8;
        newRows = `${firstColumn}fr 24px ${thirdColumn}fr`;
        $content.style.gridTemplateRows = newRows;
      } else if ($chart.firstChild !== svgDiv) {
        $chart.replaceChild(svgDiv, $chart.firstChild);
      } else {
        $chart.append(svgDiv);
      }
    }
  });
});

function onDrag({ movementY }) {
  if (isMouseDragging) {
    if (movementY >= 0) {
      newRows = `${(firstColumn +=
        0.00246 * movementY)}fr 24px ${(thirdColumn -= 0.00246 * movementY)}fr`;
      $content.style.gridTemplateRows = newRows;
      $resizeBar.requestPointerLock();
      maxHeight();
      minHeight();
    } else {
      newRows = `${(firstColumn -=
        0.00246 * Math.abs(movementY))}fr 24px ${(thirdColumn +=
        0.00246 * Math.abs(movementY))}fr`;
      $content.style.gridTemplateRows = newRows;
      $resizeBar.requestPointerLock();
    }
  }
}

function mouseUp() {
  if (isMouseDragging) {
    isMouseDragging = false;
    document.exitPointerLock();
  }
}

function maxHeight() {
  if (firstColumn < 0.25002) {
    firstColumn = 0;
    thirdColumn = 2.00001;
    let lockTop = `${firstColumn}fr 24px ${thirdColumn}fr`;
    $content.style.gridTemplateRows = lockTop;
  }
}

function minHeight() {
  if (thirdColumn < 0.50002) {
    let lockBottom = `2.00001fr 24px 0fr`;
    $content.style.gridTemplateRows = lockBottom;
    if ($chart.hasChildNodes()) {
      $chart.classList.remove("open");
      $chart.removeChild($chart.children[0]);
      $resizeBar.style.cursor = "pointer";
    }
  }
}

$resizeBar.addEventListener("mousedown", () => {
  if ($chart.classList.contains("open")) {
    isMouseDragging = true;
    $resizeBar.addEventListener("mousemove", onDrag);
    $resizeBar.addEventListener("mouseup", mouseUp);
  }
});
