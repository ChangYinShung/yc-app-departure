using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Optimization;

namespace YC.Scripts.BundleProfile
{
    public class AngularValidationProfile : Profile
    {
        [BundleProfile("~/bundles/FurtherSoftware/Plugins/angular-validation")]
        public Bundle BaseJs()
        {
            var bundle = createCurrentBundle();
            bundle.Include("~/FurtherSoftware/Plugins/Vendor/angular-validation/js/angular-validation.js")
                .Include("~/FurtherSoftware/Plugins/Config/angular-validation/rule-zh.config.js");
            return bundle;
        }
        [BundleProfile("~/bundles/FurtherSoftware/Plugins/angular-validation/skyform")]
        public Bundle SkyformJs()
        {
            var bundle = createCurrentBundle();
            bundle.Include("~/FurtherSoftware/Plugins/Vendor/angular-validation/js/angular-validation.js")
                .Include("~/FurtherSoftware/Plugins/Config/angular-validation/rule-zh.config.js")
                .Include("~/FurtherSoftware/Plugins/Config/angular-validation/theme-skyform.config.js");
            return bundle;
        }
        [BundleProfile("~/bundles/FurtherSoftware/Plugins/angular-validation/skyform/css")]
        public Bundle SkyformCss()
        {
            var bundle = createCurrentBundle();
            bundle.Include("~/Content/Front/assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css")
                .IncludeDirectory("~/Content/Front/assets/plugins/sky-forms-pro/skyforms/custom/", "*.css", true);
            return bundle;
        }




    }
}