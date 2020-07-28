using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using ChatR.Services;
using ChatR.Models;

namespace ChatR.Hubs
{
    public class Lobby : Hub
    {
        private IChatRRepository _repository;

        public Lobby(IChatRRepository repository)
        {
            _repository = repository;
        }

        public void Join(string name)
        {
            ChatUser currentUser = new ChatUser(name, Context.ConnectionId);

            _repository.AddUser(currentUser);

            var users = _repository.Users.Select(user => { return new UserViewModel(user.Value.Name); }).ToList();
            var topic = "Welcome to EmberJS on SignalR!";

            Clients.Caller.lobbyEntered(new ChatRoomViewModel(topic, users));
        }


        public void SendChat(string msg)
        {
            ChatUser user = _repository.GetUserById(Context.ConnectionId);

            Clients.All.chatSent(new ChatMessageViewModel(new UserViewModel(user.Name), msg));
        }


        public override System.Threading.Tasks.Task OnDisconnected(bool stopCalled)
        {
            _repository.RemoveUser(Context.ConnectionId);
            return base.OnDisconnected(stopCalled);
        }
    }
}