import { InformationCircleIcon } from "@untr/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"

export default function AlertInfo() {
  return (
    <Alert variant="info">
      <InformationCircleIcon />
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
