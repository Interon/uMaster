using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using umbraco.MacroEngines;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Core.Services;

/// <summary>
/// Summary description for SubmitSurfaceController
/// </summary>
namespace Umbraco.Web.Controllers
{

    
    public class ListController : Umbraco.Web.Mvc.SurfaceController
    {
        
        public ActionResult route()
         {
             StringBuilder sb = new StringBuilder();
            foreach (Route route in RouteTable.Routes)
            {
               sb.Append( route.Url + "<br/>");
            }
             return Content(sb.ToString());
         }
        public ActionResult ShowAddItemForm(AddToListItemViewModel model)
        {
            return PartialView("_AddListItemForm",model);
        }
        [HttpGet]
        public ActionResult ReserveItem(int id)
        {
            var item = Services.ContentService.GetById(id);
            item.SetValue("reserve", true);
            Services.ContentService.SaveAndPublishWithStatus(item);
            return RedirectToUmbracoPage(1268);
        }
         [HttpGet]
          public ActionResult DeleteItem(int id)
        {
            var item = Services.ContentService.GetById(id);
            Services.ContentService.Delete(item, 0);

            return RedirectToUmbracoPage(1268);
        }
        [HttpPost]
        public ActionResult AddListItem(AddToListItemViewModel model, HttpPostedFileBase Image)
        {
            if (!ModelState.IsValid)
            {
                // TO DO: save the party to database
                return CurrentUmbracoPage();
            }
            var _image = Services.MediaService.CreateMedia(Image.FileName, 1315, "Image", 0);
            MemoryStream target = new MemoryStream();
            Image.InputStream.CopyTo(target);
            byte[] data = target.ToArray();
            _image.SetValue("umbracoFile",Image.FileName, target);
            Services.MediaService.Save(_image);
            //var _content = Services.ContentService.GetById(model.ListId);
            var _content = Services.ContentService.CreateContent(model.Title, model.ListId, "list", 0);
            Services.ContentService.SaveAndPublishWithStatus(_content);
            _content.SetValue("title", model.Title);
            _content.SetValue("description", model.Description);
            _content.SetValue("externalLink", model.ExternalLink);
            _content.SetValue("image", _image.GetValue("umbracoFile"));
            Services.ContentService.SaveAndPublishWithStatus(_content);

            return CurrentUmbracoPage();
        }
    }
}