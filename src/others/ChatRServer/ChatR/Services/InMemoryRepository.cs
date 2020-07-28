using ChatR.Models;
using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Web;

namespace ChatR.Services
{
    public class InMemoryRepository : IChatRRepository
    {
        public ConcurrentDictionary<string, ChatUser> Users { get; set; }

        public InMemoryRepository()
        {
            Users = new ConcurrentDictionary<string, ChatUser>();
        }

        public ChatUser GetUserById(string id)
        {
            return Users[id];
        }

        public void AddUser(ChatUser user)
        {
            Users.TryAdd(user.ConnectionId, user);
        }

        public ChatUser RemoveUser(string id)
        {
            ChatUser result;
            Users.TryRemove(id, out result);
            return result;
        }
    }
}