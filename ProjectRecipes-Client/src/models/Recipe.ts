export class Recipe{
    constructor(public CodeRecipe:number,public NameRecipe:String,public CodeCategory:number,public PreparationMinutes:number
        ,public LevelOfDifficulty:number,public AddDateRecipe:Date,public ListComponent:String[]=[],public ListPreparation:String[]=[],public CodeUser:number
        ,public  Image:String,public DoDisplay:boolean ){
    
    }
}

