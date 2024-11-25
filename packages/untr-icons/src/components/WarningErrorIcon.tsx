import * as React from "react"

import { IconProps } from "./types"

export const WarningErrorIcon = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M8.30661 3.4716C9.04467 2.17613 10.9553 2.17613 11.6933 3.4716L18.0867 14.6937C18.804 15.9527 17.8704 17.5 16.3934 17.5H3.60653C2.12951 17.5 1.19588 15.9527 1.91318 14.6937L8.30661 3.4716ZM10.8332 14.1667C10.8332 14.6269 10.4601 15 9.99991 15C9.53967 15 9.16657 14.6269 9.16657 14.1667C9.16657 13.7064 9.53967 13.3333 9.99991 13.3333C10.4601 13.3333 10.8332 13.7064 10.8332 14.1667ZM10.6249 7.5C10.6249 7.15482 10.3451 6.875 9.99991 6.875C9.65473 6.875 9.37491 7.15482 9.37491 7.5V11.6667C9.37491 12.0118 9.65473 12.2917 9.99991 12.2917C10.3451 12.2917 10.6249 12.0118 10.6249 11.6667V7.5Z"
          fill={color}
        />
      </svg>
    )
  }
)

WarningErrorIcon.displayName = "WarningErrorIcon"

export default WarningErrorIcon
