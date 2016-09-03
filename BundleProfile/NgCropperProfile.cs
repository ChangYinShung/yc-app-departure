using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Optimization;

namespace YC.Scripts.BundleProfile
{
    public class NgCropperProfile : Profile
    {
        [BundleProfile("~/bundles/FurtherSoftware/Plugins/ngCropper")]
        public Bundle BaseJs()
        {
            var bundle = createCurrentBundle();
            bundle.Include(string.Concat("~/FurtherSoftware/Plugins/Vendor/cropperjs/js/cropper.js"))
                .Include(string.Concat("~/FurtherSoftware/Plugins/Vendor/ng-cropper/js/ngCropper.all.js"));
            return bundle;
        }

        [BundleProfile("~/bundles/FurtherSoftware/Plugins/ngCropper/css")]
        public Bundle BaseCss()
        {
            var cssBundle = createCurrentBundle();
            cssBundle.Include(string.Concat("~/FurtherSoftware/Plugins/Vendor/ng-cropper/css/ngCropper.all.css"));
            return cssBundle;
        }



    }
}