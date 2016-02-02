using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Security.Cryptography;
using System.Web;
using System.Web.Http;
using Umbraco.Web.WebApi;

using Umbraco.Core;
using Umbraco.Core.Services;
using Umbraco.Core.Models;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Configuration;

namespace uSky
{

    public class GoogleFontController : UmbracoApiController
    {

        [HttpGet]
        public HttpResponseMessage load()
        {
            // Google Web Font API Key
            var APIKey = "AIzaSyBupHHkiJjIh_XgwrEHdUeBl-fO-RizZzQ";

            // Google Web Font JSON URL
            var googleWebFontAPIURL = string.Format("https://www.googleapis.com/webfonts/v1/webfonts?key={0}", APIKey);

            var response = "{}";
            using (var client = new System.Net.WebClient())
            {
                response = client.DownloadString(new Uri(googleWebFontAPIURL));
            }

            var resp = new HttpResponseMessage()
            {
                Content = new StringContent(response)
            };
            resp.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
            return resp;

        }

    }

}