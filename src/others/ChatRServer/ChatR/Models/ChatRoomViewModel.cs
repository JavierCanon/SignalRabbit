using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChatR.Models
{
    public class ChatRoomViewModel
    {
        public string Topic { get; set; }
        public List<UserViewModel> Users { get; set; }

        public ChatRoomViewModel(string topic, List<UserViewModel> users)
        {
            Topic = topic;
            Users = users;
        }
    }
}