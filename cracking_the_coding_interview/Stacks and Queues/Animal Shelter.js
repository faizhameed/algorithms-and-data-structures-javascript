class Animal {
  dogs = linkedList("dog");
  cats = linkedList("cat");
  constructor() {
    this.order = 0;
  }
  enqueue_animal(animal) {
    if (animal.type === "cat") {
      if (this.cats.name === null) {
        this.cats = animal;
      } else {
        this.cats.next = animal;
      }
      this.cats.order++;
    } else {
      if (this.dogs.name === null) {
        this.dogs = animal;
      } else {
        this.dogs.next = animal;
      }
      this.dogs.order++;
    }
  }
}

function linkedList(type) {
  return {
    name: null,
    next: null,
    order: null,
    type,
  };
}
