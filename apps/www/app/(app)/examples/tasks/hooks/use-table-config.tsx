import {
  ColumnDef,
  RowData,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { useTableState } from "./use-table-state"

export function useTableConfig<
  TData extends RowData,
  TValue = unknown
>(options: {
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
  tableState: ReturnType<typeof useTableState>
}) {
  const { data, columns, tableState } = options

  return useReactTable({
    data,
    columns,
    state: {
      sorting: tableState.sorting,
      columnFilters: tableState.columnFilters,
      pagination: tableState.pagination,
      columnVisibility: tableState.columnVisibility,
      rowSelection: tableState.rowSelection,
    },
    onSortingChange: tableState.setSorting,
    onColumnFiltersChange: tableState.setColumnFilters,
    onPaginationChange: tableState.setPagination,
    onColumnVisibilityChange: tableState.setColumnVisibility,
    onRowSelectionChange: tableState.setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
  })
}
