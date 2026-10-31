// Safe localStorage wrapper
export const storage = {
  get: (key: string): string | null => {
    try {
      if (typeof window !== "undefined") {
        return localStorage.getItem(key)
      }
      return null
    } catch (error) {
      console.error(`Error getting item ${key} from localStorage:`, error)
      return null
    }
  },

  set: (key: string, value: string): void => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(key, value)
      }
    } catch (error) {
      console.error(`Error setting item ${key} in localStorage:`, error)
    }
  },

  remove: (key: string): void => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem(key)
      }
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage:`, error)
    }
  },

  clear: (): void => {
    try {
      if (typeof window !== "undefined") {
        localStorage.clear()
      }
    } catch (error) {
      console.error("Error clearing localStorage:", error)
    }
  },
}
