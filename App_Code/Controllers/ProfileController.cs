using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using umbraco.MacroEngines;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Core.Services;

/// <summary>
/// Summary description for SubmitSurfaceController
/// </summary>
namespace SurfaceController
{
    public class MemberController : Umbraco.Web.Mvc.SurfaceController
    {

            
        
        [HttpPost]
        public ActionResult UploadProfilePic( HttpPostedFileBase Image)
        {
            var _image = Services.MediaService.CreateMedia(Image.FileName, 1315, "Image", 0);
            MemoryStream target = new MemoryStream();
            Image.InputStream.CopyTo(target);
            byte[] data = target.ToArray();
            _image.SetValue("umbracoFile",Image.FileName, target);
            Services.MediaService.Save(_image);
            var member = Services.MemberService.GetById(Members.GetCurrentMemberId());
            member.SetValue("picture", _image.GetValue("umbracoFile"));
            Services.MemberService.Save(member);

            
            
           

            return CurrentUmbracoPage();
        }
    }
}