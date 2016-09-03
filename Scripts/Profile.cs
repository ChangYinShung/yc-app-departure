using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Optimization;

namespace YC.Scripts
{
    public class Profile
    {
        protected Bundle initBundle { get; set; }
        protected Bundle createCurrentBundle()
        {
            StackTrace stackTrace = new StackTrace();
            MethodBase method = stackTrace.GetFrame(1).GetMethod();
            BundleProfileAttribute attr = (BundleProfileAttribute)method.GetCustomAttributes(typeof(BundleProfileAttribute), true)[0];
            string value = attr.BundleName;
            var result = new Bundle(value);
            result.Orderer = new AsIsBundleOrderer();
            if (BundleTable.Bundles.GetRegisteredBundles().All(x => x.Path != result.Path))
                BundleTable.Bundles.Add(result);
            return result;
        }
    }
    public class BundleProfileAttribute : Attribute
    {
        public string BundleName { get; set; }

        public BundleProfileAttribute(string bundleName)
        {
            this.BundleName = bundleName;
        }
    }
}