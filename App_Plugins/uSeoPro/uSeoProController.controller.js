angular.module("umbraco")
    .controller("Esoss.uSeoProController",
    function ($scope, editorState, entityResource, contentEditingHelper, $http, $rootScope) {

        var htmlAlias = $scope.model.config.htmlAlias;
        $scope.disableKeyword = $scope.model.config.disableKeyword == true;
        $scope.staticTitle = $scope.model.config.staticTitle;
        var url = editorState.current.urls[0];
        var htmlContent = '';

        $scope.isRoot = url === '/';
        $scope.model.hideLabel = true; 

        $scope.title = $scope.model.value.title;
        $scope.pageName = editorState.current.name;        

        $scope.targetKeyword = $scope.model.value.targetKeyword;
        $scope.keywords = $scope.model.value.keywords;
        $scope.description = $scope.model.value.description;

        $scope.noseo = $scope.model.value.noseo;
        $scope.noindex = $scope.model.value.noindex;
        $scope.nofollow = $scope.model.value.nofollow;
        $scope.noodp = $scope.model.value.noodp;
        $scope.noydir = $scope.model.value.noydir;
        
        $scope.boolDescription = false;
        $scope.boolTitle = false;
        $scope.boolUrl = false;
        $scope.boolHtmlContent = false;
        $scope.boolHeading = false;

        $rootScope.$watch(htmlAlias, function () {
            $scope.SeoStatsView(true);
        });

        $scope.$watch("title", function () {
            $scope.UpdateModel();
            $scope.SeoStatsView(false);
        });

        $scope.$watch("keywords", function () {
            $scope.UpdateModel();
        });

        $scope.$watch("targetKeyword", function () {
            $scope.UpdateModel();
            $scope.SeoStatsView(true);
            $scope.KeywordSuggestions($scope.targetKeyword);
        });

        $scope.$watch("description", function () {
            $scope.UpdateModel();
            $scope.SeoStatsView(false);
        });

        $scope.$watch("noseo", function () {
            $scope.UpdateModel();
        });

        $scope.$watch("noindex", function () {
            $scope.UpdateModel();
        });

        $scope.$watch("nofollow", function () {
            $scope.UpdateModel();
        });

        $scope.$watch("noodp", function () {
            $scope.UpdateModel();
        });

        $scope.$watch("noydir", function () {
            $scope.UpdateModel();
        });


        $scope.SeoStatsView = function (evaluateHtml) {
            if ($scope.disableKeyword == false) {
                if ($scope.targetKeyword) {
                    var tk = $scope.targetKeyword.toLowerCase();
                    if (tk.length > 2) {
                        if ($scope.title != null && $scope.title.length > 0) {
                            $scope.boolTitle = $scope.title.toLowerCase().indexOf(tk) >= 0;
                        }
                        else {
                            $scope.boolTitle = $scope.pageName.toLowerCase().indexOf(tk) >= 0;
                        }

                        if ($scope.description) {
                            $scope.boolDescription = $scope.description.toLowerCase().indexOf(tk) >= 0;
                        }
                        $scope.boolUrl = url.toLowerCase().indexOf(tk) >= 0;

                        if (evaluateHtml == true) {
                            try {
                                var allProps = contentEditingHelper.getAllProps(editorState.current);
                                for (var i = 0; i < allProps.length; i++) {
                                    if (allProps[i].alias == htmlAlias) {
                                        htmlContent = JSON.stringify(allProps[i].value);
                                        htmlContent = htmlContent.toLowerCase();
                                        $scope.boolHtmlContent = htmlContent.indexOf(tk) > 0;
                                        $scope.boolHeading = htmlContent.match('<h[1-3].*>.*' + tk + '.*</h[1-3]>') != null;
                                        break;
                                    }
                                }
                            }
                            catch (e) { }
                        }
                    }
                }
            }
        }
        $scope.SeoStatsView(true);


        $scope.UpdateModel = function () {
            var r1 = "";
            if ($scope.noindex == true || $scope.nofollow == true) {
                r1 += $scope.noindex == true ? "noindex," : "index,";
                r1 += $scope.nofollow == true ? "nofollow" : "follow";
            }
            $scope.robots = r1;
            var r2 = "";
            if ($scope.noodp == true || $scope.noydir == true) {
                if ($scope.noodp == true && $scope.noydir == true) {
                    r2 = "NOODP,NOYDIR";
                }
                else {
                    r2 += $scope.noodp == true ? "NOODP" : "";
                    r2 += $scope.noydir == true ? "NOYDIR" : "";
                }
            }
            $scope.model.value = {
                title: $scope.title, targetKeyword: $scope.targetKeyword,
                keywords: $scope.keywords, description: $scope.description,
                noseo: $scope.noseo,
                noindex: $scope.noindex, nofollow: $scope.nofollow,
                noodp: $scope.noodp, noydir: $scope.noydir,
                robots: r1, robots2: r2
            };

        };

        $scope.KeywordSuggestions = function (keyword) {
            if (keyword != null && keyword.length > 1) {
                var lang = $scope.model.config.keywordLanguage;
                if (lang == null || lang === "") {
                    lang = "en";
                }
                $.getJSON("http://suggestqueries.google.com/complete/search?callback=?",
                                {
                                    "hl": lang, // Language                  
                                    "jsonp": "suggestCallBack", // jsonp callback function name
                                    "q": keyword, // query term
                                    "client": "youtube" // force youtube style response, i.e. jsonp
                                }
                            );
                suggestCallBack = function (data) {
                    var suggestions = [];
                    $.each(data[1], function (key, val) {
                        suggestions.push(val[0]);
                    });
                    if (suggestions.length > 5) {
                        suggestions.length = 5; // prune suggestions list to only 5 items        
                    }
                    for (var k = 0; k < suggestions.length; k++) {
                        console.log(suggestions[k].value);
                    }
                    $scope.GoogleSuggestions = suggestions;
                };
            }
            else {
                $scope.GoogleSuggestions = [];
            }
        };

        $scope.GetUrl = function () {

            return $scope.ProtocolAndHost() + $scope.GetParentContent().urls[0];

        };

        $scope.ProtocolAndHost = function () {

            var http = location.protocol;
            var slashes = http.concat("//");
            return slashes.concat(window.location.hostname);

        };

        $scope.GetParentContent = function () {
            var currentScope = $scope.$parent;

            for (var i = 0; i < 150; i++) {
                if (currentScope.content) {
                    return currentScope.content;
                }

                currentScope = currentScope.$parent;
            }

            return null;

        };

    });