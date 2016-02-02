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
public class ContactUsViewModel : RenderModel
{
    public ContactUsViewModel() : this(new UmbracoHelper(UmbracoContext.Current).TypedContent(UmbracoContext.Current.PageId)) { }
    public ContactUsViewModel(IPublishedContent content) : base(content) { }
   public string Name { get; set; }
    
    [Required]
    public string Email { get; set; }
   
    public MailMessage emailarr { get; set; }
    public string PhoneNumber { get; set; }
    public string Subject { get; set; }
    public string Message { get; set; }
}
