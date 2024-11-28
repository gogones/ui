import * as React from "react"

import { IconProps } from "./types"

export const CheckCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.75 8a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Zm-6 4a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-12ZM14 16.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75ZM8.75 20a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-12Z"
          fill={color}
        />
      </svg>
    )
  }
)

CheckCircleIcon.displayName = "CheckCircleIcon"

export default CheckCircleIcon