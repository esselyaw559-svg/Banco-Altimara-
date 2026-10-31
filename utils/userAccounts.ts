import { storage } from "./storage"

// User account types and data
export interface UserAccount {
  email: string
  password: string
  verificationCode: string
  name: string
  accountData: {
    availableBalance: number
    totalBalance: number
    pendingBalance: number
    retirementSavings?: number
    checkingAccounts?: Array<{
      id: string
      name: string
      accountNumber: string
      balance: number
    }>
    creditCards?: Array<{
      id: string
      type: string
      lastFour: string
      expiryDate: string
      isLocked: boolean
    }>
    investments: {
      name: string
      value: number
    }[]
  }
}

// User accounts database
export const userAccounts: Record<string, UserAccount> = {
  michael: {
    email: "michaelclayton783@outlook.com",
    password: "Mikeclayton1965",
    verificationCode: "5940",
    name: "Michael",
    accountData: {
      availableBalance: 22000000,
      totalBalance: 27942744,
      pendingBalance: 5942744,
      investments: [
        { name: "Global Gold Finance", value: 5356344 },
        { name: "Cocoa Farm", value: 200000 },
        { name: "Personal Home", value: 386400 },
      ],
    },
  },
  thomas: {
    email: "thomasfree67@yahoo.com",
    password: "Thomas1947$",
    verificationCode: "1589",
    name: "Thomas",
    accountData: {
      availableBalance: 22000000,
      totalBalance: 29579984,
      pendingBalance: 7579984,
      investments: [
        { name: "Valtique Gold Vault", value: 5367984 },
        { name: "Cocoa Farm", value: 450000 },
        { name: "Personal Home", value: 250000 },
        { name: "Beechcraft Baron 58", value: 1512000 },
      ],
    },
  },
  cheddar: {
    email: "ponodc34@yahoo.com",
    password: "Cheddar12$",
    verificationCode: "2289",
    name: "Pono",
    accountData: {
      availableBalance: 22000000,
      totalBalance: 29579984,
      pendingBalance: 7579984,
      investments: [
        { name: "Global Gold Finance", value: 5356344 },
        { name: "Cocoa Farm", value: 450000 },
        { name: "Personal Home", value: 250000 },
        { name: "Beechcraft Baron 58", value: 1512000 },
      ],
    },
  },
  badell: {
    email: "Badellgloacchino682@yahoo.com",
    password: "BGloacchino#1962",
    verificationCode: "19226,673290,016734",
    name: "Badell Gloacchino",
    accountData: {
      availableBalance: 865574.0,
      totalBalance: 865574.0,
      pendingBalance: 0,
      retirementSavings: 590790.0,
      checkingAccounts: [
        { id: "1", name: "Cuenta Principal", accountNumber: "9023", balance: 590790.0 },
        { id: "2", name: "Cuenta Secundaria", accountNumber: "8922", balance: 274784.0 },
      ],
      creditCards: [
        { id: "1", type: "Visa Platinum", lastFour: "9023", expiryDate: "08/26", isLocked: false },
        { id: "2", type: "Mastercard Gold", lastFour: "8922", expiryDate: "12/28", isLocked: false },
      ],
      investments: [
        { name: "Minerales", value: 216034 },
        { name: "Casa de Alquiler", value: 58750 },
      ],
    },
  },
}

// Get current user from storage
export function getCurrentUser(): UserAccount | null {
  const userId = storage.get("current_user_id")
  if (!userId || !userAccounts[userId]) return null
  return userAccounts[userId]
}

// Set current user in storage
export function setCurrentUser(userId: string): void {
  if (userAccounts[userId]) {
    storage.set("current_user_id", userId)
  }
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  const token = storage.get("auth_token")
  const twoFAVerified = storage.get("2fa_verified")
  const currentUser = getCurrentUser()
  return !!(token && twoFAVerified && currentUser)
}

// Clear all authentication data
export function clearAuth(): void {
  storage.remove("auth_token")
  storage.remove("2fa_verified")
  storage.remove("current_user_id")
}
