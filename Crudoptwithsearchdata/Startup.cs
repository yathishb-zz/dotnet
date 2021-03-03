using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Crudoptwithsearchdata.Startup))]
namespace Crudoptwithsearchdata
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
