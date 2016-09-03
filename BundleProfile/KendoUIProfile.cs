using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Optimization;

namespace YC.Scripts.BundleProfile
{
    public class KendoUIProfile : Profile
    {
        [BundleProfile("~/bundles/FurtherSoftware/Plugins/kendo-ui")]
        public Bundle BaseJs()
        {            
            var bundle = createCurrentBundle();
            bundle.Include(string.Concat("~/FurtherSoftware/Plugins/Vendor/kendo-ui/js/kendo.ui.core.js"))
                .Include(string.Concat("~/FurtherSoftware/Plugins/Vendor/kendo-ui/js/kendo.culture.zh-TW.js"));

            return bundle;
        }
        [BundleProfile("~/bundles/FurtherSoftware/Plugins/kendo-ui/css")]
        public Bundle BaseCss()
        {
            var bundle = createCurrentBundle();
            bundle.Include(string.Concat("~/FurtherSoftware/Plugins/Vendor/kendo-ui/css/kendo.common-bootstrap.core.css"), new CssRewriteUrlTransform());
            bundle.Include(string.Concat("~/FurtherSoftware/Plugins/Vendor/kendo-ui/css/kendo.bootstrap.css"), new CssRewriteUrlTransform());
            return bundle;
        }




    }
}