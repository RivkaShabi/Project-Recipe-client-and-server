using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Permissions;
using System.Web;

namespace ProjectRecipes.Models
{
    public class Recipe
    {
        public int CodeRecipe { get; set; }
        public string NameRecipe { get; set; }
        public int CodeCategory { get; set; }
        public int PreparationMinutes { get; set; }
        public int LevelOfDifficulty { get; set; }
        public DateTime AddDateRecipe { get; set; }
        public List<string> ListComponent { get; set; }
        public List<string> ListPreparation { get; set; }
        public int CodeUser { get; set; }
        public string Image { get; set; }
        public bool DoDisplay { get; set; }

       
       
         //ListComponent = new List<string>();
         //ListPreparation= new List<string>();
       

    }
}