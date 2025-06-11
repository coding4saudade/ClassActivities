const zoo = {
  name: "Wild Wonders Zoo",
  location: "Metroville",
  zones: [
    {
      name: "Savannah",
      animals: [
        {
          name: "Leo",
          species: "Lion",
          age: 8,
          diet: "carnivore",
          healthChecks: [
            { date: "2024-01-10", status: "Healthy" },
            { date: "2025-01-10", status: "Needs Dental Check" }
          ],
          feedingTimes: ["08:00", "16:00"]
        },
        {
          name: "Ellie",
          species: "Elephant",
          age: 25,
          diet: "herbivore",
          healthChecks: [
            { date: "2025-01-10", status: "Healthy" }
          ],
          feedingTimes: ["09:00", "15:00"]
        }
      ]
    },
    {
      name: "Rainforest",
      animals: [
        {
          name: "Zara",
          species: "Jaguar",
          age: 6,
          diet: "carnivore",
          healthChecks: [
            { date: "2024-11-10", status: "Minor Injury" }
          ],
          feedingTimes: ["10:00", "18:00"]
        },
        {
          name: "Kiki",
          species: "Monkey",
          age: 3,
          diet: "omnivore",
          healthChecks: [
            { date: "2025-02-05", status: "Healthy" }
          ],
          feedingTimes: ["08:30", "14:30", "19:00"]
        }
      ]
    },
    {
      name: "Arctic",
      animals: [
        {
          name: "Nana",
          species: "Polar Bear",
          age: 10,
          diet: "carnivore",
          healthChecks: [
            { date: "2024-12-01", status: "Healthy" }
          ],
          feedingTimes: ["11:00", "17:00"]
        }
      ]
    }
  ],
  zookeepers: [
    {
      name: "Sam",
      assignedZones: ["Savannah", "Arctic"],
      yearsExperience: 5
    },
    {
      name: "Lila",
      assignedZones: ["Rainforest"],
      yearsExperience: 8
    }
  ]
};


// ForEach example
//  const nums = [3, 7, 11];
//   const doubled = [];

//   nums.forEach((num) => doubled.push(num * 2));

//callback

//  const colors = ["blue", "green", "white"];
//   function iterate(item, index) {
//     console.log(`${item} has index ${index}`);
//   }
//   colors.forEach(iterate);

//   // Refactoring the above code looks like this ...
//   colors.forEach((item, index) => {
//     console.log(`${item} has index ${index}`);
//   });

// map and filter returns a new Array
// for each does not return anything

//log the name of each zone

// zoo.zones.forEach(zone => {
//     console.log(zone.name)
// })

// zoo.zones.forEach(zone => {
//     zone.animals.forEach(animal => {
//         console.log(`Animal name: ${animal.name} Animal Species: ${animal.species} `)
//     })


// })

//print the feeding times on their own line

// zoo.zones.forEach(zone => {
//     zone.animals.forEach(animal => {
//         animal.feedingTimes.forEach(feedingtime => {
//             console.log(feedingtime)
//         })
//     })


// })

// const filtered = zoo.zones.filter(zone => zone.animals.length > 1)
// console.log(filtered)

// filter zoo keepers with less than 8 years exp

// const notExperienced = zoo.zookeepers.filter( noob => noob.yearsExperience < 8)
// console.log(notExperienced)

//map zookeepers to return name and experience

// const zooData = zoo.zookeepers.map((keeper) => {
//     let newKeeper = {
//         name: keeper.name,
//         years: keeper.yearsExperience
//     }

//     let nameKeeper = {
//         name: keeper.name
//     }
//  return nameKeeper
// })

// console.log(zooData)

//in each zone, filter animals with more than two feeding times

// let hungryAnimals = zoo.zones.map(zone => {

//     return {
//         zone: zone.name,
//         feedingTimes: zone.animals.filter(animal => animal.feedingTimes.length > 2)
//     }
// })

// console.log(JSON.stringify(hungryAnimals))

//animal names of the savanah

const animalNames = zoo.zones[0].animals.map(animal =>{
    animal.name
})

console.log(animalNames)