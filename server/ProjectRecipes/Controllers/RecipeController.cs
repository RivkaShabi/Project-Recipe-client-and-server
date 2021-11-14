using ProjectRecipes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProjectRecipes.Controllers
{
    [EnableCors(methods:"*",origins:"*",headers:"*")]
    
    [RoutePrefix ("api/Recipe")]
    public class RecipeController : ApiController
    {[Route("AddRecipe")]
        [HttpPost]
        public IHttpActionResult AddRecipe(Recipe r)
        {
            Recipe r1 = DB.listRecipe.FirstOrDefault(p => p.NameRecipe == r.NameRecipe);
            if (r1 != null)
                //return BadRequest("מצטערים קיים כבר ");
                return Conflict();
            int myMax = DB.listRecipe.Max(x => x.CodeRecipe) + 1;
            r.CodeRecipe = myMax;
            r.DoDisplay = true;
            DB.listRecipe.Add(r);


            return Created("הצליח להוסיף", r);
        }


        [Route("DeleteRecipe")]
        [HttpPost]
        public IHttpActionResult DeleteRecipe(Recipe r)
        {
            Recipe r1 = DB.listRecipe.FirstOrDefault(p => p.NameRecipe == r.NameRecipe);
            if (r1 == null)
                //return BadRequest("מצטערים קיים כבר ");
                return Conflict();
            DB.listRecipe.Remove(r);
            return Created("הצליח למחוק", r);
        }
        [Route("GetAllRecipe")]
        [HttpGet]
        public IHttpActionResult GetAllRecipe()
        {
            return Ok(DB.listRecipe);
        }



        [Route("SearseRecipe")]
        [HttpPost]
        public IHttpActionResult SearseRecipe([FromBody] int codeRecipe)
        {
            Recipe r1 = DB.listRecipe.FirstOrDefault(p => p.CodeRecipe == codeRecipe);
            if (r1 == null)
                //return BadRequest("מצטערים קיים כבר ");
                return Conflict();

            return Created("מצא אוביקט", r1);
        }
        [Route("EditRecipe")]
        [HttpPost]
        public IHttpActionResult EditRecipe(Recipe r)
        {
            foreach (var item in DB.listRecipe)
            {
                //משתמש כבר קיים
                if (item.CodeRecipe == r.CodeRecipe)
                {
                    item.NameRecipe = r.NameRecipe;
                    item.CodeCategory = r.CodeCategory;
                    item.PreparationMinutes = r.PreparationMinutes;
                    item.LevelOfDifficulty = r.LevelOfDifficulty;
                    item.AddDateRecipe = r.AddDateRecipe;
                    item.ListComponent = r.ListComponent;
                    item.ListPreparation = r.ListPreparation;
                    item.DoDisplay = r.DoDisplay;
                    return Created("מצא אוביקט", r);
                    
               
                }
              



            }
  return Conflict();

        }

    }
}
