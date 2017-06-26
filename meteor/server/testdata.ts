import { Cocktail, CocktailsCollection } from "@smallstack/datalayer";
import { TestDataGenerator } from "@smallstack/meteor-server";
import * as _ from "underscore";


if (CocktailsCollection.getCollection().find().count() === 0) {
    const generator: TestDataGenerator = new TestDataGenerator();
    for (let i = 0; i < 500; i++) {
        const cocktail: Cocktail = new Cocktail();
        cocktail.name = generator.getRandomTeamName() + " " + _.sample(["Juicer", "Martini", "Mojito", "Fizz", "Sour", "Sangria", "Cosmopolitan"]);
        cocktail.save();
    }
}