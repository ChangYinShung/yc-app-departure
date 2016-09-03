using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Optimization;

namespace YC.Scripts.BundleProfile
{
    public class FurtherProfile : Profile
    {
        [BundleProfile("~/bundles/FurtherSoftware/js")]
        public Bundle BaseJs()
        {            
            var bundle = createCurrentBundle();
            //外掛
            bundle.IncludeDirectory("~/FurtherSoftware/App/Vendor", "*.js", true);
            bundle.IncludeDirectory("~/FurtherSoftware/Others/vendor", "*.js", true);

            //angular 設定&宣告
            bundle.Include("~/FurtherSoftware/App/app.module.js");
            bundle.IncludeDirectory("~/FurtherSoftware/App/Config", "*.js", true);
            bundle.IncludeDirectory("~/FurtherSoftware/App/Directive", "*.js", true);
            bundle.IncludeDirectory("~/FurtherSoftware/App/Library", "*.js", true);
            bundle.Include("~/FurtherSoftware/App/app.filter.js");

            //angular 服務(factory)
            bundle.IncludeDirectory("~/FurtherSoftware/App/Services", "*.js", true);

            //angular Directive
            bundle.IncludeDirectory("~/FurtherSoftware/App/Directive", "*.js", true);

            return bundle;
        }
        [BundleProfile("~/bundles/FurtherSoftware/CSS")]
        public Bundle BaseCss()
        {
            var bundle = createCurrentBundle();
            //外掛
            bundle.IncludeDirectory("~/FurtherSoftware/App/Vendor", "*.css", true);
            bundle.IncludeDirectory("~/FurtherSoftware/Others/vendor", "*.css", true);
            bundle.IncludeDirectory("~/FurtherSoftware/Others/Additional", "*.css", true);
            return bundle;
        }
        [BundleProfile("~/bundles/FurtherSoftware/CSS/Debug")]
        public Bundle DebugCss()
        {
            var bundle = createCurrentBundle();
            bundle.IncludeDirectory("~/FurtherSoftware/Debug", "*.css", true);
            return bundle;
        }
        [BundleProfile("~/bundles/FurtherSoftware/js/UnitTesting")]
        public Bundle UnitTestingJs()
        {
            var bundle = createCurrentBundle();
            bundle.Include("~/FurtherSoftware/App/app.module.js");
            bundle.Include("~/FurtherSoftware/App/app.config.js");
            bundle.Include("~/FurtherSoftware/App/app.filter.js");
            bundle.IncludeDirectory("~/FurtherSoftware/App/Services", "*.js", true);
            bundle.IncludeDirectory("~/Views/", "*.service.js", true);
            return bundle;
        }




    }
}