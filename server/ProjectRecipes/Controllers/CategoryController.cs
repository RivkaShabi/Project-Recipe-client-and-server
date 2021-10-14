using ProjectRecipes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices;
using System.Web.Http;
using System.Web.Http.Cors;


namespace ProjectRecipes.Controllers
{
    [EnableCors(methods: "*", origins: "*", headers: "*")]
    [RoutePrefix("api/Category")]
    public class CategoryController : ApiController
    {


        [HttpGet]
        public IHttpActionResult GetAllCategory()
        {
            return Ok(DB.listCategory);
        }
    }
}
