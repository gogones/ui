import { CheckCircleIcon } from "@untr/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"

export default function AlertSuccess() {
  return (
    <Alert variant="success">
      <CheckCircleIcon />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
