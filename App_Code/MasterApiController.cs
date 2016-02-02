using Facebook;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using Umbraco.Core;
using Umbraco.Core.Models;
using Umbraco.Core.Services;
using Umbraco.Web.WebApi;
using Umbraco.Core.Models.Membership;
using System.Web.Security;

/// <summary>
/// Summary description for MasterApiController
/// </summary>
public class MasterApiController : UmbracoApiController
{


    private Image getUrlImage(string url)
    {
        WebResponse result = null;
        Image rImage = null;
        try
        {
            WebRequest request = WebRequest.Create(url);
            result = request.GetResponse();
            Stream stream = result.GetResponseStream();
            BinaryReader br = new BinaryReader(stream);
            byte[] rBytes = br.ReadBytes(1000000);
            br.Close();
            result.Close();
            MemoryStream imageStream = new MemoryStream(rBytes, 0, rBytes.Length);
            imageStream.Write(rBytes, 0, rBytes.Length);
            rImage = Image.FromStream(imageStream, true);
            imageStream.Close();
        }
        catch (Exception c)
        {
            //MessageBox.Show(c.Message);
        }
        finally
        {
            if (result != null) result.Close();
        }
        return rImage;

    }


    [HttpGet]
    [HttpPost]
	public string test()
    {
        return "Gotit";
    }
    [HttpGet]
    [HttpPost]
    public  bool LogUserIn()
        {
            string accessToken = HttpContext.Current.Request["accessToken"];
            string city = HttpContext.Current.Request["city"]??"";
            string region = HttpContext.Current.Request["region"]??"";
            string country = HttpContext.Current.Request["country"]??"";
            try
            {
                if(accessToken=="undefined" || accessToken == null)
                {
                    return false;
                }
                var client = new FacebookClient(accessToken);
                dynamic user = client.Get("me");
                /*we have authenticated the user now we must either create a new member or log them is as an existing member*/
               // var memberShipHelper = new Umbraco.Web.Security.MembershipHelper(Umbraco.ContentAtRoot());

                string email = user.email;
                var _member = Services.MemberService.GetByEmail(email);

               
                
                if(_member ==null)
                {
                    var newmember = Members.CreateRegistrationModel("MyGift");

                    newmember.Name = user.name;
                    newmember.Email = user.email;
                    newmember.UsernameIsEmail = true;
                    newmember.Password = "!@#$%^&*()_+";
                    newmember.MemberProperties.Add(new Umbraco.Web.Models.UmbracoProperty{Name="Name",Alias="name",Value=user.first_name});
                    newmember.MemberProperties.Add(new Umbraco.Web.Models.UmbracoProperty { Name = "name", Alias = "name", Value = user.first_name });
                    newmember.MemberProperties.Add(new Umbraco.Web.Models.UmbracoProperty { Name = "Surname", Alias = "surname", Value = user.last_name });
                    newmember.MemberProperties.Add(new Umbraco.Web.Models.UmbracoProperty { Name = "facebookUserId", Alias = "facebookUserId", Value = user.id });
                    newmember.MemberProperties.Add(new Umbraco.Web.Models.UmbracoProperty { Name = "Gender", Alias = "gender", Value = user.gender });
                    newmember.MemberProperties.Add(new Umbraco.Web.Models.UmbracoProperty { Name = "City", Alias = "city", Value = city });
                    newmember.MemberProperties.Add(new Umbraco.Web.Models.UmbracoProperty { Name = "Region", Alias = "region", Value = region });
                    newmember.MemberProperties.Add(new Umbraco.Web.Models.UmbracoProperty { Name = "Country", Alias = "country", Value = country });
                    newmember.MemberProperties.Add(new Umbraco.Web.Models.UmbracoProperty { Name = "facebookImageUrl", Alias = "facebookImageUrl", Value = "https://graph.facebook.com/" + user.id + "/picture" });
                    newmember.LoginOnSuccess = true;
                    MembershipCreateStatus createStatus;
                    Members.RegisterMember(newmember, out createStatus, false);
                    if (createStatus != MembershipCreateStatus.Success)
                    {
                        return false;
                    }
                    else
                    {

                       
                        return true;
                    }
                   
                                   
                    //ApplicationContext.Current.Services.MemberService.Save(newmember, false);
                    //ApplicationContext.Current.Services.MemberService.SavePassword(newmember, "!@#$%^&*()_+");
                    
                    //_member = newmember;
                }


                var mem2 = Services.MemberService.GetByEmail(email);

             //   mem2.SetValue("name", user.first_name);
             //   mem2.SetValue("surname", user.last_name);
             //   mem2.SetValue("facebookUserId", user.id);
             //   mem2.SetValue("gender", user.gender);
             //   // mem2.SetPropertyValue("suburb", user.id);
             //   // mem2.SetPropertyValue("city", user.id);
             //   mem2.SetValue("Country", user.locale);
             //   mem2.SetValue("facebookImageUrl", "https://graph.facebook.com/" + user.id + "/picture");

             ////   var profilePic = getUrlImage("https://graph.facebook.com/" + user.id + "/picture");
             //   Services.MemberService.Save(mem2);
                Services.MemberService.SavePassword(mem2, "!@#$%^&*()_+");
                Members.Login(mem2.Email, "!@#$%^&*()_+");
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
            
        }

}


