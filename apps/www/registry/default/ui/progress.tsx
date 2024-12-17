"use client"

import * as React from "react"
import { Fragment } from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    variant?: "determinate" | "indeterminate"
  }
>(({ variant, className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    {variant === "determinate" ? (
      <ProgressPrimitive.Indicator
        className="h-full bg-success transition-all rounded-full"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    ) : (
      <Fragment>
        <ProgressPrimitive.Indicator
          className={`absolute top-0 left-0 bottom-0 bg-success rounded-full animate-indeterminate1`}
        />
        <ProgressPrimitive.Indicator
          className={`absolute top-0 left-0 bottom-0 bg-success rounded-full animate-indeterminate2`}
        />
      </Fragment>
    )}
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
