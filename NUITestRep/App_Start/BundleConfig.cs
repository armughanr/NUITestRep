using System.Web;
using System.Web.Optimization;

namespace NUITestRep
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(
                new ScriptBundle("~/bundles/vendor")
                    .Include("~/app/node_modules/bootstrap/dist/js/bootstrap.js")

                    .Include("~/app/node_modules/toastr/toastr.js")

                    .Include("~/app/node_modules/spin.js/spin.js")
                    .Include("~/app/node_modules/angular-spinner/dist/angular-spinner.js")
                    .Include("~/app/node_modules/angular-block-ui/dist/angular-block-ui.js")

                    .IncludeDirectory("~/app/vendor", "*.js", true)
                );

            bundles.Add(
                new StyleBundle("~/css/vendor")
                    .Include("~/app/node_modules/bootstrap/dist/css/bootstrap.css")
                    .Include("~/app/node_modules/toastr/build/toastr.css")
                    .Include("~/app/node_modules/angular-block-ui/dist/angular-block-ui.css")
                    .IncludeDirectory("~/app/vendor", "*.css", true)
                );

            bundles.Add(
                new ScriptBundle("~/bundles/app")
                    .Include("~/app/nui.app.js")
                    .IncludeDirectory("~/app/modules", "*.js", true)
                );

            bundles.Add(
                new ScriptBundle("~/css/app")
                    .IncludeDirectory("~/app/modules", "*.css", true)
                );
        }
    }
}
