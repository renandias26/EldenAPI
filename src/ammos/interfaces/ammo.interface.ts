export interface AmmoData {
    id: string,
    name: string,
    image: string,
    description: string,
    type: string,
    passive: string,
    attackPower: {
        name: string,
        amount: number
    }[]
}