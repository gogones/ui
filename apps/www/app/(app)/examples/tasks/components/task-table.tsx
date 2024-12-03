"use client"

import * as React from "react"
import { ColumnDef, RowData } from "@tanstack/react-table"

import { DataTable } from "@/app/(app)/examples/tasks/components/data-table"
import { useTableConfig } from "@/app/(app)/examples/tasks/hooks/use-table-config"
import { useTableState } from "@/app/(app)/examples/tasks/hooks/use-table-state"

interface DataTableProps<TData extends RowData, TValue = unknown> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function TaskTable<TData extends RowData>({
  columns,
  data,
}: DataTableProps<TData>) {
  const tableState = useTableState()

  const table = useTableConfig({
    data,
    columns,
    tableState,
  })

  return <DataTable table={table} />
}
