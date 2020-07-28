# SignalRabbit
Asp.net web-sockets responsive chat

## SignalR
SignalR facilitates adding real-time communication to web applications running on ASP.NET and connected clients across wide variety of platforms. While SignalR started years back with ASP.NET MVC, the latest reboot is called SignalR Core, which runs on ASP.NET Core and brings a ton of maturity. Developers benefit from SignalR providing a uniform API canvas for connection and client management, as well as scaling to handle increased traffic.

SignalR provides APIs for bidirectional remote procedure calls (RPCs) between server and client and abstracts away real-time communication complexities. This is, by far, the biggest benefit of bringing in SignalR to facilitate real time communications — shield developers from having to deal with network layer implementations. Given a specific server/client pair, SignalR expertly chooses the best transport mechanism for real-time exchanges. The most common techniques used are: WebSockets, Server-Sent Events and Long Polling, in order of gracious fall-back plans.

## SignalR Back End
SignalR uses the concept of hubs on the server side — a literal hub in a hub-spoke model. The SignalR Hub works as an in-memory object on the server side that all clients connect up to for real time communications. The hub allows SignalR to send and receive messages across machine boundaries, thus allowing clients to call methods on the server and vice versa. In addition to method invocation across programming paradigms, hubs allows transport of named and strongly typed parameters. SignalR automatically provides object serialization/deserialization to aid the process.



## Philosophy of Javier Cañon

* KISS by design and programming. An acronym for "keep it simple, stupid" or "keep it stupid simple", is a design principle. The KISS principle states that most systems work best if they are kept simple rather than made complicated; therefore, simplicity should be a key goal in design, and unnecessary complexity should be avoided. Variations on the phrase include: "Keep it simple, silly", "keep it short and simple", "keep it simple and straightforward", "keep it small and simple", or "keep it stupid simple".
* Select the best tools for the job, use tools that take less time to finish the job.
* Productivity over complexity and avoid unnecessary complexity for elegant or beauty code.
* Computers are machines, more powerful every year, give them hard work, concentrate on being productive.
* Often people, especially computer engineers, focus on the machines. They think, "By doing this, the machine will run fast. By doing this, the machine will run more effectively. By doing this, the machine will something, something, something..." They are focusing on machines. But in fact we need to focus on humans, on how humans care about doing programming or operating the application of the machines. We are the masters. They are the slaves. [Yukihiro Matsumoto].


## Issues and Bug Traking ##
Please submit *bug reports* or *feature requests* on GitHub:
* [Issue | Request Features](https://github.com/JavierCanon/SignalRabbit/issues)

## Requeriments ##

* .Net Framework 4.8


## Contributing

Please read [CONTRIBUTING.md](/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Javier Cañon** - *Initial work* - [www.JavierCanon.com](https://javiercanon.com)

See also the list of [contributors](/AUTHORS.md) who participated in this project.


## Supported by, thanks to 

![Softcanon](https://github.com/JavierCanon/Social-Office-Webackeitor/raw/master/docs/images/logo_softcanon_200x75.gif) 

[Softcanon](https://softcanon.com) 
-- 

* [SQL Pretty Printer for SQL Server](http://www.dpriver.com/products/sqlpp/index.php) 
-- 

## References

- https://www.telerik.com/blogs/real-time-web-chat-applications

## License

This project is licensed under the MIT LICENSE - see the [LICENSE.md](/LICENSE.md) file for details.

---
Made with ❤️ by **[Javier Cañon](https://javiercanon.com)**.
