const recipesList = [
  {
    id: 1,
    name: "King Burger",
    description: "Here are the instructions to make the perfect burger! Although it may not be the healthiest, use medium ground beef for moistness & flavour.",
    imageUrl: "http://www.seriouseats.com/recipes/images/2017/06/20170617-bulgogi-burger-matt-clifton-1.jpg",
    preparationTime: 60,
    difficulty: "Intermediate",
  },
  {
    id: 2,
    name: "Mexican Chicken Pasta",
    description: "It's a cheesy Tex-Mex dream.",
    imageUrl: "http://del.h-cdn.co/assets/16/17/980x653/gallery-1461593822-delish-mexican-chicken-pasta-1.jpg",
    preparationTime: 45,
    difficulty: "Easy",
  },
  {
    id: 3,
    name: "Pistachio Baklava",
    description: "When you think of baklava, does Turkey come to mind? Did you know that some of the world's finest baklava comes not from Greece or the Middle East?",
    imageUrl: "https://fthmb.tqn.com/4-w0gweg1vAWvBeIHEv9MzR7pyU=/2832x1914/filters:no_upscale()/PistachioBaklava-GettyImages-183422455-5997abb09abed50010b57402.jpg",
    preparationTime: 135,
    difficulty: "Difficult",
  },
  {
    id: 4,
    name: "Lattice Peach-Apple Pie",
    description: "What a great combination! Get the best of two fruits, tart apples and sweet peaches, baked in one delicious pie.",
    imageUrl: "http://kelownafarmersandcraftersmarket.com/wp-content/uploads/2017/10/apple-pie.jpg",
    preparationTime: 135,
    difficulty: "Easy",
  },
  {
    id: 5,
    name: "Chocolate Brownies",
    description: "For those of us who need to keep gluten-free, these brownies will satisfy the chocolate craving.",
    imageUrl: "http://img.taste.com.au/kdMbjArS/taste/2010/01/chocolate-brownies-118925-2.jpg",
    preparationTime: 40,
    difficulty: "Easy",
  },
  {
    id: 6,
    name: "Creole Creamy Carrot Soup",
    description: "It’s a real spirit-lifter in the fall, winter and spring, awakening and nourishing the senses.",
    imageUrl: "http://www.vegkitchen.com/wp-content/uploads/2011/11/Carrot-soup.jpg",
    preparationTime: 45,
    difficulty: "Easy",
  },
]

const getNRandom = (n) => {
  return recipesList.slice().sort(() => 0.5 - Math.random()).slice(0, n)
}

export {
  recipesList,
  getNRandom,
}