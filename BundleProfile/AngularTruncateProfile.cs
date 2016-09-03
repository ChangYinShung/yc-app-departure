using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using YC.Scripts;

namespace YC.Scripts.BundleProfile
{
    public class AngularTruncateProfile : Profile
    {
        /// <summary>
        /// 刪除過多的字　https://github.com/sparkalow/angular-truncate
        /// </summary>
        /// <returns></returns>
        [BundleProfile("~/bundles/FurtherSoftware/Plugins/angular-truncate")]
        public Bundle BaseJs()
        {
            var bundle = createCurrentBundle();

            bundle.Include(string.Concat("~/FurtherSoftware/Plugins/Vendor/angular-truncate/js/truncate.js"));
            return bundle;
        }
    }
}