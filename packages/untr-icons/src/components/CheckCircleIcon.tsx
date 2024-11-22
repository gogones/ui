import * as React from "react"

import { IconProps } from "./types"

export const CheckCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Zm3.827-10.45a.625.625 0 1 0-.987-.767L9.5 11.41a.208.208 0 0 1-.303.027l-2.112-1.9a.625.625 0 0 0-.836.928l2.112 1.902c.629.566 1.607.48 2.127-.19l3.339-4.292Z"
          fill={color}
        />
      </svg>
    )
  }
)

CheckCircleIcon.displayName = "CheckCircleIcon"

export default CheckCircleIcon
