console.log('Homework 36')

// #1: sumArray

function sumArray(numbers: number[]): number {
    return numbers.reduce((sum, current) => sum + current, 0)
}

// Приклади
console.log(sumArray([1, 2, 3, 4])) // Повинно вивести 10
console.log(sumArray([])) // Повинно бути 0

// #2: createUser

type User = {
    name: string
    age: number
    isActive: boolean
}

function createUser(name: string, age: number, isActive: boolean = true): User {
    return {
        name,
        age,
        isActive,
    }
}

// Приклад
const newUser = createUser('Анна', 25)
console.log(newUser) // { name: 'Анна', age: 25, isActive: true }

// #3: getOrderStatus

enum OrderStatus {
    Pending = 'Pending',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Cancelled = 'Cancelled',
}

function getOrderStatus(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.Pending:
            return 'Замовлення очікує на обробку'
        case OrderStatus.Shipped:
            return 'Замовлення було відправлено'
        case OrderStatus.Delivered:
            return 'Замовлення доставлено'
        case OrderStatus.Cancelled:
            return 'Замовлення скасовано'
        default:
            throw new Error('Невідомий статус замовлення')
    }
}

// Приклади
console.log(getOrderStatus(OrderStatus.Pending))
console.log(getOrderStatus(OrderStatus.Shipped))
console.log(getOrderStatus(OrderStatus.Delivered))
console.log(getOrderStatus(OrderStatus.Cancelled))

// Експорти 
export { sumArray, createUser, OrderStatus, getOrderStatus }