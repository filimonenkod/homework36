console.log('Homework 37');

// №1 - Розробка функції createPerson, яка створює обʼєкт особи з заданими властивостями.

interface PersonInterface {
    name: string;
    age: number;
    isActive: boolean
}

function createPerson(name: string, age: number, isActive: boolean): PersonInterface {
    return {
        name,
        age,
        isActive
    }
}

const newPerson = createPerson('Dmytro', 29, false)
console.log(newPerson)

// №3 Простір імен UserProfile з генерацією унікального профілю

namespace UserProfile {
    export interface ProfileInterface {
        id: string
        name: string
        email: string
    }

    function generateId(): string {
        return Math.random().toString(36).substring(2, 12)
    }

    export function createProfile(name: string, email: string): ProfileInterface {
        const id = generateId()
        return {
            id,
            name,
            email
        }
    }
}

const profile = UserProfile.createProfile('John Doe', 'john@example.com')
console.log(profile)

export {createPerson, UserProfile} 