using Examine.SearchCriteria;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

/// <summary>
/// Summary description for Extensions
/// </summary>
public static class Extensions
{
    public static string ToStringNullSafe(this object value)
    {
        return (value ?? string.Empty).ToString();
    }

}

public static class searchcriteria
{
    public static ISearchCriteria BuildQuery(string[] textFields, string searchString, ISearchCriteria criteria)
    {
        List<SearchTerm> Terms = new List<SearchTerm>();

        if ((searchString.Contains(@"""")) && (searchString.Count(t => t == '"') % 2 == 0)) // even number of quotes, more than zero
        {
            Regex quoteRegex = new Regex(@""".+?"""); // look for any content between quotes
            foreach (Match item in quoteRegex.Matches(searchString))
            {
                Terms.Add(new SearchTerm() { Term = item.Value.Replace('"', ' ').Trim(), TermType = SearchTermType.MultiWord });
                searchString = Regex.Replace(searchString, item.Value, string.Empty); // remove them from search string for subsequent parsing
            }
        }

        List<string> singleTerms = new List<string>();
        singleTerms = searchString.Split(' ').ToList();
        singleTerms.ForEach(t => Terms.Add(new SearchTerm() { Term = t, TermType = SearchTermType.SingleWord }));

        foreach (SearchTerm t in Terms)
        {
            if (!string.IsNullOrEmpty(t.Term))
            {
                switch (t.TermType)
                {
                    case SearchTermType.SingleWord:
                        criteria.GroupedOr(textFields,
                            new IExamineValue[] { Examine.LuceneEngine.SearchCriteria.LuceneSearchExtensions.Fuzzy(t.Term, 0.4F) });
                        break;
                    case SearchTermType.MultiWord:
                        criteria.GroupedOr(textFields,
                            new IExamineValue[] { Examine.LuceneEngine.SearchCriteria.LuceneSearchExtensions.Escape(t.Term) });
                        break;
                    default:
                        break;
                }
            }
        }

        return criteria;
    }
}
  public class SearchTerm
    {
        public string Term { get; set; }
        public SearchTermType TermType { get; set; }
    }


    public enum SearchTermType
    {
        SingleWord,
        MultiWord
    }