[
  {
    "name": "Rich text editor",
    "alias": "rte",
    "view": "rte",
    "icon": "icon-article"
  },
  {
    "name": "Image",
    "alias": "media",
    "view": "media",
    "icon": "icon-picture"
  },
  {
    "name": "Macro",
    "alias": "macro",
    "view": "macro",
    "icon": "icon-settings-alt"
  },
  {
    "name": "Embed",
    "alias": "embed",
    "view": "embed",
    "icon": "icon-movie-alt"
  },
  {
    "name": "Headline",
    "alias": "headline",
    "view": "textstring",
    "icon": "icon-coin",
    "config": {
      "style": "font-size: 36px; line-height: 45px; font-weight: bold",
      "markup": "<h1>#value#</h1>"
    }
  },
  {
    "name": "Quote",
    "alias": "quote",
    "view": "textstring",
    "icon": "icon-quote",
    "config": {
      "style": "border-left: 3px solid #ccc; padding: 10px; color: #ccc; font-family: serif; font-variant: italic; font-size: 18px",
      "markup": "<blockquote>#value#</blockquote>"
    }
  },
  {
    "name": "Doc Type",
    "alias": "docType",
    "view": "/App_Plugins/DocTypeGridEditor/Views/doctypegrideditor.html",
    "render": "/App_Plugins/DocTypeGridEditor/Render/DocTypeGridEditor.cshtml",
    "icon": "icon-item-arrangement",
    "config": {
      "allowedDocTypes": [
        "Footer",
        "Gridlayout",
        "GridItemLogin",
        "GridItemRegister",
        "GridItemResetPassword",
        "GridItemFBLogin",
        "GridItemCoopoauthfacebook",
        "GridItemSearchResult",
        "GridItemEditProfile",
        "GridItemSearchBar",
        "GridItemProfileAndList",
        "GridItemLoginStatus"
      ],
      "enablePreview": true,
      "viewPath": "/Views/Partials/"
    }
  },
  {
    "name": "Image Free Form",
    "alias": "imageFreeForm",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-window-sizes",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "editors": [
        {
          "name": "Image",
          "alias": "image",
          "propretyType": {},
          "dataType": "93929b9a-93a2-4e2a-b239-d99334440a59"
        },
        {
          "name": "Height",
          "alias": "height",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae",
          "description": "px or % ie. 100px or 100%"
        },
        {
          "name": "Width",
          "alias": "width",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae",
          "description": "px or % ie. 100px or 100%"
        },
        {
          "name": "link",
          "alias": "link",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "Top",
          "alias": "top",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae",
          "description": "with px"
        },
        {
          "name": "Left",
          "alias": "left",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae",
          "description": "with px"
        },
        {
          "name": "Right",
          "alias": "right",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae",
          "description": "with px"
        }
      ],
      "renderInGrid": "1",
      "frontView": "imageFreeForm",
      "min": 1,
      "max": 1
    }
  },
  {
    "name": "Css",
    "alias": "css",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-edit",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "editors": [
        {
          "name": "element",
          "alias": "element",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "item",
          "alias": "item",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "value",
          "alias": "value",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        }
      ],
      "frontView": "",
      "min": 1,
      "max": 100
    }
  },
  {
    "name": "Navigation",
    "alias": "navigation",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-tactics",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "frontView": "/views/partials/_Navigation.cshtml"
    }
  },
  {
    "name": "SkySlider",
    "alias": "skySlider",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-school",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "editors": [
        {
          "name": "Content",
          "alias": "Content",
          "propretyType": {},
          "dataType": "61b02c78-d8d5-4d31-af38-39652eae9739"
        },
        {
          "name": "Height",
          "alias": "height",
          "propretyType": {},
          "dataType": "2e6d3631-066e-44b8-aec4-96f09099b2b5"
        }
      ],
      "frontView": "uSkySlider",
      "renderInGrid": "0"
    }
  },
  {
    "name": "Text String",
    "alias": "textString",
    "view": "textstring",
    "icon": "icon-book-alt-2",
    "config": {}
  },
  {
    "name": "Carousel",
    "alias": "Carousel",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-slideshow",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "editors": [
        {
          "name": "image",
          "alias": "image",
          "propretyType": {},
          "dataType": "93929b9a-93a2-4e2a-b239-d99334440a59"
        },
        {
          "name": "height",
          "alias": "height",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae",
          "description": "px or % ie 100px"
        },
        {
          "name": "width",
          "alias": "width",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae",
          "description": "px of %"
        },
        {
          "name": "link",
          "alias": "link",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        }
      ],
      "frontView": "Carousel",
      "min": 1,
      "max": 5,
      "expiration": null
    }
  },
  {
    "name": "GridMaps",
    "alias": "gridMaps",
    "view": "/App_Plugins/GridMaps/Views/gridmapsgrideditor.html",
    "render": "/App_Plugins/GridMaps/Render/GridMapsGridEditor.cshtml",
    "icon": "icon-location-nearby",
    "config": {
      "defaultLat": 50.1109221,
      "defaultLng": 8.6821267000000262,
      "defaultZoom": 6
    }
  },
  {
    "name": "MenuButton",
    "alias": "menuButton",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-indent",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "frontView": "MenuButton"
    }
  },
  {
    "name": "PowerRTE",
    "alias": "powerrte",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-sience",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "editors": [
        {
          "name": "Class",
          "alias": "class",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "Style",
          "alias": "style",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "Content",
          "alias": "content",
          "propretyType": {},
          "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
        }
      ],
      "frontView": "powerrte",
      "renderInGrid": "0"
    }
  },
  {
    "name": "Modal RTE",
    "alias": "modalRTE",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-multiple-windows",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "editors": [
        {
          "name": "Title",
          "alias": "title",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "Content",
          "alias": "content",
          "propretyType": {},
          "dataType": "ca90c950-0aff-4e72-b976-a30b1ac57dad"
        }
      ],
      "frontView": "GridItemModalRte"
    }
  },
  {
    "name": "Modal Macro",
    "alias": "modalMacro",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-print",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "editors": [
        {
          "name": "Title",
          "alias": "title",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "Content",
          "alias": "content",
          "propretyType": {},
          "dataType": "029efccf-4a49-4cf7-ac92-d63f6fd81744"
        }
      ],
      "frontView": "GridItemModelMacro"
    }
  },
  {
    "name": "Gallery",
    "alias": "gallery",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-umb-media",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "min": 1,
      "max": 100,
      "frontView": "",
      "editors": [
        {
          "name": "Image",
          "alias": "image",
          "propretyType": {},
          "dataType": "93929b9a-93a2-4e2a-b239-d99334440a59"
        },
        {
          "name": "Catagory",
          "alias": "catagory",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        }
      ]
    }
  },
  {
    "name": "Portfolio",
    "alias": "portfolio",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-thumbnail-list",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "editors": [
        {
          "name": "Image Caption 1",
          "alias": "imageCaption1",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "Image Caption 2",
          "alias": "imageCaption2",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "Title",
          "alias": "title",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "Description",
          "alias": "description",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "Catagory",
          "alias": "catagory",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "Link",
          "alias": "link",
          "propretyType": {},
          "dataType": "0cc0eba1-9960-42c9-bf9b-60e150b429ae"
        },
        {
          "name": "Image",
          "alias": "image",
          "propretyType": {},
          "dataType": "93929b9a-93a2-4e2a-b239-d99334440a59"
        }
      ],
      "min": 1,
      "max": 100,
      "frontView": ""
    }
  },
  {
    "name": "MenuButtonPushy",
    "alias": "menuButtonPushy",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-navigation-last",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "frontView": "MenuButtonPushy",
      "renderInGrid": "0"
    }
  },
  {
    "name": "NavigationNoButton",
    "alias": "NavigationNoButton",
    "view": "/App_Plugins/LeBlender/editors/leblendereditor/LeBlendereditor.html",
    "icon": "icon-tactics",
    "render": "/App_Plugins/LeBlender/editors/leblendereditor/views/Base.cshtml",
    "config": {
      "frontView": "/views/partials/_NavigationNoButton.cshtml"
    }
  }
]