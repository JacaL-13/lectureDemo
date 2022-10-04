const person = {
    firstName: 'Jared',
    lastName: 'Clyde',
    height : {
        feet: 6,
        inch: 8
    },
    age: 31,
    array: [1, 2, 3]
}

const height = person.height.feet + '\'' + person.height.inch + '"'

console.log(height)
console.log(person.array[1])

const myDog = {
    name: 'Samira',
    color: ['brown', 'black', 'grey'],
    hunger: 25,
    mood: 'sleepy',
    age: 1.5,
    weight: 65
}

let {name: dogName} = myDog

for (let attribute in myDog) {
    if (attribute === 'name') {
        continue
    } else if (Array.isArray(myDog[attribute])) {
        const attributeArray = myDog[attribute]
        let attributeString = ''
        for (let i = 0; i < attributeArray.length; i++) {
            if (i === attributeArray.length - 1) {
                attributeString = attributeString + 'and ' + attributeArray[i]
            } else {
                attributeString = attributeString + attributeArray[i] + ', '
            }
        }
        console.log(dogName + '\'s ' + attribute + ' is ' + attributeString)
    } else {
        console.log(dogName + '\'s ' + attribute + ' is ' + myDog[attribute])
    }
}

class Dog {
    constructor(name, color, hunger, mood, age, weight) {
        this.name = name
        this.color = color
        this.hunger = hunger
        this.mood = mood
        this.age = age
        this.weight = weight
    }

    bark() {
        console.log('Arf! I am ' + this.name + ' the dog!')
    }

}

const dog1 = new Dog(myDog.name, myDog.color, myDog.hunger, myDog.mood, myDog.age, myDog.weight)

console.log(dog1)
dog1.bark()

class Puppy extends Dog {
    constructor(name, color, hunger, mood, age, weight, growth) {
        super(name, color, hunger, mood, age)

        this.growth = growth
    }

    gettingBig(num) {
        this.weight += this.growth
    }
}

const puppy1 = new Puppy ('Peridot', ['Black', 'White', 'Brown'], 45, 'excited', 0.6, 65, 5)

puppy1.bark()
