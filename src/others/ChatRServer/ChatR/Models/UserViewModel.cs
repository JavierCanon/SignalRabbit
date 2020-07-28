using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChatR.Models
{
    public class UserViewModel
    {
        public string Name { get; set; }

        public UserViewModel(string name)
        {
            Name = name;
        }
    }
}