using Umbraco.Core;
using Umbraco.Core.Events;
using Umbraco.Core.Models;
using Umbraco.Core.Services;

/// <summary>
/// Summary description for Events
/// </summary>
public class Events : Umbraco.Core.ApplicationEventHandler
{
    protected override void ApplicationStarted(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
    {
        MemberService.Saved += MemberService_Saved;
        MemberService.Created += MemberService_Created;
        
        MemberService.Deleting += MemberService_Deleting;
    }

    void MemberService_Deleting(IMemberService sender, DeleteEventArgs<IMember> e)
    {
        foreach (var m in e.DeletedEntities)
        {
           var member = ApplicationContext.Current.Services.ContentService.GetById(int.Parse(m.GetValue("lists").ToString()));
           foreach(var lists in member.Children())
           {
               foreach(var list in lists.Children())
               {
                 //  e.MediaFilesToDelete.Add(c.GetValue("image").ToString());
                   ApplicationContext.Current.Services.ContentService.Delete(list);

               }
               ApplicationContext.Current.Services.ContentService.Delete(lists);
           }
        }
    }

    void MemberService_Created(IMemberService sender, NewEventArgs<IMember> e)
    {
      
    }

    void MemberService_Saved(IMemberService sender, SaveEventArgs<IMember> e)
    {
       foreach(var m in e.SavedEntities)
       {
          

          
           ApplicationContext.Current.Services.MemberService.Save(m,false);
           if (m.GetValue("lists").ToStringNullSafe() == "")
           {
               var data = ApplicationContext.Current.Services.ContentService.GetById(1282);
               var member = ApplicationContext.Current.Services.ContentService.CreateContent(m.Name, data, "member", 0);
               ApplicationContext.Current.Services.ContentService.SaveAndPublishWithStatus(member);
               var lists = ApplicationContext.Current.Services.ContentService.CreateContent("My List", member, "lists", 0);
               ApplicationContext.Current.Services.ContentService.SaveAndPublishWithStatus(lists);
               m.SetValue("lists", member.Id);
               ApplicationContext.Current.Services.MemberService.Save(m);

           }
           
       }
    }   
}