import * as React from "react"

import { IconProps } from "./types"

export const WarningErrorIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 8.5c.256 0 .512.098.707.293l4 4a.999.999 0 1 1-1.414 1.414l-3.305-3.305-3.293 3.18a1 1 0 0 1-1.39-1.439l4-3.862A.997.997 0 0 1 12 8.5Z"
          fill={color}
        />
      </svg>
    )
  }
)

WarningErrorIcon.displayName = "WarningErrorIcon"

export default WarningErrorIcon
