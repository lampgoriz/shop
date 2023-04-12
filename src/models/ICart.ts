interface ICartProducts {
    productId: number,
    quantity: number
}

export interface ICart {
    id: number,
    userId: number,
    date: number,
    products: ICartProducts[],
    __v: 0
}