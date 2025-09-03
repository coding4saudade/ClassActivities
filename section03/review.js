const library = {
  name: "Downtown Library",
  location: {
    city: "Metropolis",
    state: "Fictionland",
    coordinates: {
      lat: 38.123,
      long: -90.456
    }
  },
  sections: [
    {
      name: "Fiction",
      shelves: [
        {
          genre: "Sci-Fi",
          books: [
            { title: "Dune", author: "Frank Herbert", available: true },
            { title: "Neuromancer", author: "William Gibson", available: false }
          ]
        },
        {
          genre: "Fantasy",
          books: [
            { title: "The Hobbit", author: "J.R.R. Tolkien", available: true },
            { title: "Mistborn", author: "Brandon Sanderson", available: true }
          ]
        }
      ]
    },
    {
      name: "Non-fiction",
      shelves: [
        {
          genre: "History",
          books: [
            { title: "Sapiens", author: "Yuval Noah Harari", available: true },
            { title: "Guns, Germs, and Steel", author: "Jared Diamond", available: false }
          ]
        }
      ]
    }
  ],
  isOpen: true,
  staff: {
    manager: {
      name: "Lydia Lane",
      shift: "Morning"
    },
    assistants: [
      { name: "Tom", age: 25 },
      { name: "Sarah", age: 30 }
    ]
  }
};

// index into the city of the object
//console.log(library.location.city);

//print out the assistant with the age of 30

//console.log(library.staff.assistants[1]["age"])

//print the lat coordinates

//console.log(library.location.coordinates["lat"]);

//print the book neromancer

//console.log(library.sections[0].shelves[0].books[1].title);

//print genre 2nd shelf in fiction section

//console.log(library.sections[0].shelves[0]["books"]);


//author of Ms boure

//console.log(library.sections[0].shelves[1].books[1]["author"]);
