import * as React from "react"

import { IconProps } from "./types"

export const InformationCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333ZM10.625 6.66663C10.625 6.32145 10.3451 6.04163 9.99996 6.04163C9.65478 6.04163 9.37496 6.32145 9.37496 6.66663V7.49996C9.37496 7.84514 9.65478 8.12496 9.99996 8.12496C10.3451 8.12496 10.625 7.84514 10.625 7.49996V6.66663ZM10.625 9.58329C10.625 9.23811 10.3451 8.95829 9.99996 8.95829C9.65478 8.95829 9.37496 9.23811 9.37496 9.58329V13.3333C9.37496 13.6785 9.65478 13.9583 9.99996 13.9583C10.3451 13.9583 10.625 13.6785 10.625 13.3333V9.58329Z"
          fill={color}
        />
      </svg>
    )
  }
)

InformationCircleIcon.displayName = "InformationCircleIcon"

export default InformationCircleIcon
