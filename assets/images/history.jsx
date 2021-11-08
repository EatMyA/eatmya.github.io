import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={33}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0_572:5834)">
        <Path
          d="M1.245 1.056a.874.874 0 00-.721.869V5.4c0 .48.398.87.887.87h2.663v2.607c0 .479.399.87.887.87h.888v2.009c0 3.735 2.288 6.933 5.547 8.42-3.259 1.487-5.547 4.685-5.547 8.42v2.01h-.971a.873.873 0 00-.804.869v2.607H1.41a.88.88 0 00-.887.87v3.476c0 .478.398.869.887.869H31.59a.88.88 0 00.888-.87v-3.476a.88.88 0 00-.888-.869h-2.663v-2.607a.88.88 0 00-.887-.87h-.888v-2.01c0-3.734-2.288-6.932-5.547-8.42 3.259-1.486 5.547-4.684 5.547-8.419v-2.01h.888a.88.88 0 00.887-.869V6.271h2.663a.88.88 0 00.888-.87V1.925a.88.88 0 00-.888-.87H1.245zm1.054 1.738H30.7v1.738H28.04a.88.88 0 00-.888.87v2.607H5.85V5.4a.88.88 0 00-.888-.869H2.3V2.794zm5.325 6.953h17.752v2.01c0 3.979-3.2 7.238-7.184 7.55a.877.877 0 00-.874.87c0 .475.389.862.874.869 3.984.312 7.184 3.572 7.184 7.55v2.01h-1.11a14.244 14.244 0 00-1.47-3.069c-1.192-1.87-3.238-3.884-6.296-3.884-3.058 0-5.104 2.014-6.296 3.884a14.243 14.243 0 00-1.47 3.07h-1.11v-2.01c0-3.98 3.2-7.239 7.184-7.551a.877.877 0 00.874-.87.877.877 0 00-.874-.868c-3.984-.313-7.184-3.572-7.184-7.551v-2.01zm2.497 2.607a.883.883 0 00-.614.432.859.859 0 00-.052.736s1.862 4.917 7.045 4.917 7.045-4.917 7.045-4.917a.855.855 0 00-.104-.794.89.89 0 00-.728-.373H10.121zm1.72 1.739h9.319C20.5 15.206 19.302 16.7 16.5 16.7c-2.801 0-4.001-1.494-4.66-2.607zm4.66 11.299c2.267 0 3.771 1.463 4.798 3.069.683 1.07.77 1.545.97 2.146H10.731c.2-.601.288-1.077.97-2.146 1.027-1.606 2.532-3.07 4.8-3.07zM5.848 32.345h21.302v2.607c0 .479.399.87.888.87H30.7v1.738H2.3V35.82H4.96a.88.88 0 00.888-.869v-2.607z"
          fill="#EB2D7C"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_572:5834">
          <Path fill="#fff" transform="translate(0 .677)" d="M0 0h33v39H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent