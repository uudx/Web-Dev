from models import Animal, Dog, Cat

animals = [
    Dog("Rex", 3, "Labrador"),
    Cat("Whiskers", 2, "Black"),
    Dog("Buddy", 5, "Beagle")
]

for animal in animals:
    print(f"{animal}: {animal.speak()}")

print(animals[0].fetch())
print(animals[1].climb())