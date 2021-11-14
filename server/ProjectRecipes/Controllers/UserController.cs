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
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        [Route("Login")]
        [HttpPost]
        public int Login([FromBody] User s)
        {

            foreach (var item in DB.listUser)
            {
                //משתמש וסיסמא נכונים
                if (item.NameUser == s.NameUser && item.Password == s.Password)

                    return item.CodeUser;

                //שם משתמש נכון וסיסמא שגויה
                if (item.NameUser == s.NameUser && item.Password != s.Password)

                    return -2;


            }

            //שם משתמש וסיסמא שגויים
            return -3;

        }
        [Route("AddUser")]
        [HttpPost]
        public int AddUser([FromBody] User s)
        {

            foreach (var item in DB.listUser)
            {
                //משתמש כבר קיים
                if (item.NameUser == s.NameUser)

                    return 1;


            }
            int myMax = DB.listUser.Max(x => x.CodeUser) + 1;
            s.CodeUser = myMax;
            DB.listUser.Add(s);
            return 0;
        }


    }
}
