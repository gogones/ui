import * as React from "react"

import { IconProps } from "./types"

export const RemoveCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.333 10a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0ZM12.8 12.799a.625.625 0 0 1-.884 0L10 10.884l-1.915 1.915a.625.625 0 1 1-.884-.884L9.116 10 7.201 8.085a.625.625 0 0 1 .884-.884L10 9.116l1.915-1.915a.625.625 0 0 1 .884.884L10.884 10l1.915 1.915a.625.625 0 0 1 0 .884Z"
          fill={color}
        />
      </svg>
    )
  }
)

RemoveCircleIcon.displayName = "RemoveCircleIcon"

export default RemoveCircleIcon
