import { IOC } from "@smallstack/core-common";
import { GeneratedCocktail } from "../generated/models/GeneratedCocktail";

export class Cocktail extends GeneratedCocktail {

	/**
	 * If you want to you can implement your own model methods here. 
	 * This file only gets generated once and will not get overwritten!
	 * 
	 * You can force overwriting this file by 'smallstack generate --forcedGeneration'
	 */

}

IOC.register("Cocktail", Cocktail);
