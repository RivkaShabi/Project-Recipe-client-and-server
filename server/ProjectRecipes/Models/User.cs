using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectRecipes.Models
{
    public class User
    {
        public int CodeUser { get; set; }
        public string NameUser { get; set; }
        public string AddressUser { get; set; }
        public string EmailUser { get; set; }
        public string Password { get; set; }
    }
}
