"use client"

import * as React from "react"

import { Progress } from "@/registry/default/ui/progress"

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }

        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => clearTimeout(timer)
  }, [])

  return <Progress variant="determinate" value={progress} className="w-[60%]" />
}
