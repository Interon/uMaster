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
public class AddToListItemViewModel 
{
    [Required]
    public HttpPostedFileBase Image { get; set; }
     [Required]
    public string Title { get; set; }
     [Required]
    public string Description { get; set; }
    public string ExternalLink { get; set; }
    public bool Reserved { get; set; }
    public int MemberId { get; set; }
    public int ListId { get; set; }
    public int ListItemId { get; set; }
}
//public class AddListViewModel : RenderModel
//{
//    public string Title { get; set; }
//    public DateTime DateTime { get; set; }
//    public int MemberId { get; set; }
//}
//public class ListModel :RenderModel
//{
//    public AddToListItemViewModel addToListViewModel {get; set; }
//    public AddListViewModel addListViewModel {get; set; }
//}