export interface CatType {
  id: number
  name: string
  gender: string
  birthDate: string
  bio: string
  image?: string | null
}

export type CatFormInput = Omit<CatType, 'id' | 'image'>
