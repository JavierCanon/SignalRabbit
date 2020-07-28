using ChatR.Infrastructure;
using ChatR.Services;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Ninject;
using Owin;
using System.Threading.Tasks;
using System.Web.Cors;

namespace ChatR
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var kernel = SetupNinject();

            SetupSignalR(kernel, app);
        }

        
        private static KernelBase SetupNinject()
		{
            var	kernel = new StandardKernel();

            kernel.Bind<IChatRRepository>()
                .To<InMemoryRepository>()
                .InSingletonScope();


            return kernel;
		}

        public void SetupSignalR(IKernel kernel, IAppBuilder app)
        {
            //app.MapSignalR();

            var resolver = new NinjectSignalRDependencyResolver(kernel);

            var config = new HubConfiguration
            {
                Resolver = resolver
            };

            app.Map("/signalr", map =>
            {

                var corsPolicy = new CorsPolicy
                {
                    AllowAnyHeader = true,
                    AllowAnyMethod = true
                };

                
                corsPolicy.Origins.Add("http://192.168.56.103:4200");
                map.UseCors(new CorsOptions
                {
                    PolicyProvider = new CorsPolicyProvider {
                        PolicyResolver =
                        r => Task.FromResult(corsPolicy)
                    }
                });

                map.RunSignalR(config);
            });
        }
    }
}