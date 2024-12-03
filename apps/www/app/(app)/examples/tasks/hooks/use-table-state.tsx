import { useState } from "react"
import {
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table"

export function useTableState(options?: {
  initialPageSize?: number
  initialSorting?: SortingState
  initialColumnFilters?: ColumnFiltersState
  initialColumnVisibility?: VisibilityState
}) {
  const [sorting, setSorting] = useState<SortingState>(
    options?.initialSorting || []
  )

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    options?.initialColumnFilters || []
  )

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: options?.initialPageSize || 10,
  })

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    options?.initialColumnVisibility || {}
  )

  const [rowSelection, setRowSelection] = useState({})

  return {
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    pagination,
    setPagination,
    columnVisibility,
    setColumnVisibility,
    rowSelection,
    setRowSelection,
  }
}
