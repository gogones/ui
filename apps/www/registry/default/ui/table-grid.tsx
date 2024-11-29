import * as React from "react"

import { cn } from "@/lib/utils"

const TableGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="table"
    className={cn("w-full space-y-1 text-sm", className)}
    {...props}
  />
))
TableGrid.displayName = "TableGrid"

const TableGridHeader = React.forwardRef<
  HTMLDivElement,
  React.ThHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="rowgroup"
    className={cn("*:bg-primary", className)}
    {...props}
  />
))
TableGridHeader.displayName = "TableGridHeader"

const TableGridBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    role="rowgroup"
    ref={ref}
    className={cn(
      "*:light:bg-white space-y-1 *:shadow-[0_2px_4px_rgba(0,0,0,0.1)] *:dark:border-2 *:dark:border-gray-900",
      className
    )}
    {...props}
  />
))
TableGridBody.displayName = "TableGridBody"

const TableGridHead = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="columnheader"
      className={cn("font-semibold text-gray-900", className)}
      {...props}
    />
  )
})
TableGridHead.displayName = "TableGridHead"

const TableGridRow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    role="row"
    ref={ref}
    className={cn("grid grid-cols-1 rounded-lg p-4", className)}
    {...props}
  />
))
TableGridRow.displayName = "TableGridRow"

const TableGridCell = React.forwardRef<
  HTMLDivElement,
  React.TdHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    role="cell"
    ref={ref}
    className={cn("p-0 font-semibold", className)}
    {...props}
  />
))
TableGridCell.displayName = "TableGridCell"

export {
  TableGrid,
  TableGridBody,
  TableGridHeader,
  TableGridHead,
  TableGridRow,
  TableGridCell,
}
