using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Net.Mail;
using umbraco;
using Umbraco.Core.Models;
using Umbraco.Web;
using Umbraco.Web.Models;
using Umbraco.Web.Mvc;

/// <summary>
/// Summary description for ContactUssViewModel
/// </summary>
/// 
public class MemberProfilePicViewModel 
{
    public HttpPostedFileBase Image { get; set; }
   
}
