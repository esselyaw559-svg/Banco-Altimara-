"use client"

import { useRouter } from "next/navigation"
import LoadingOverlay from "./loading-overlay"

export function useLoadingTransition() {
  const router = useRouter()

  const handleTransition = (path: string) => {
    return new Promise<void>((resolve) => {
      document.body.style.overflow = "hidden"
      setTimeout(() => {
        document.body.style.overflow = ""
        router.push(path)
        resolve()
      }, 1200) // 1.2 seconds loading time
    })
  }

  return { handleTransition, LoadingTransition }
}

function LoadingTransition() {
  return <LoadingOverlay message="Loading..." />
}
