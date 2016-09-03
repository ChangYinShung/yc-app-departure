using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Optimization;

namespace YC.Scripts.BundleProfile
{
    public class AngularGoogleMapsProfile : Profile
    {
        [BundleProfile("~/bundles/FurtherSoftware/Plugins/angular-google-maps")]
        public Bundle BaseJs()
        {
            var bundle = createCurrentBundle();

            bundle.Include(string.Concat("~/FurtherSoftware/Plugins/Vendor/angular-simple-logger/js/angular-simple-logger.js"))
                .Include(string.Concat("~/FurtherSoftware/Plugins/Vendor/angular-google-maps/js/angular-google-maps.js"))
                .Include(string.Concat("~/FurtherSoftware/Plugins/Config/angular-google-maps/maps.config.js"))
                .Include(string.Concat("~/FurtherSoftware/Plugins/Config/angular-google-maps/options.value.js"));

            return bundle;
        }
    }
}