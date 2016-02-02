angular.module("umbraco")
    .controller("uSky.GoogleFont.Controller",
    function ($scope, $http, assetsService) {

        assetsService.loadJs("http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js")
			    .then(function () {

			        $scope.load = false;
			        $scope.sizes = [];
			        $scope.LineHeights = [];
			        //$scope.letterSpacings = [];
			        //$scope.wordSpacings = [];
			        //$scope.weights = ["100", "200", "300", "400", "500", "600", "700", "800", "900", "bold", "bolder", "lighter", "normal"];

			        for (var i = 1 ; i < 80; i++) {
			            $scope.sizes.splice($scope.sizes.length + 1, 0, i + "px");
			            $scope.LineHeights.splice($scope.LineHeights.length + 1, 0, i + "px");
			            //$scope.letterSpacings.splice($scope.letterSpacings.length + 1, 0, i + "px");
			            //$scope.wordSpacings.splice($scope.wordSpacings.length + 1, 0, i + "px");
			        }

			        //Set style
			        $scope.setStyleVariant = function (family, size, variant, color, font, lineHeight) {
			            var variantWeight = variant;
			            var variantStyle = "normal";
			            if (variant != undefined && variant.indexOf("italic") >= 0) {
			                variantWeight = variant.replace("italic", "");
			                variantStyle = "italic";
			            }

			            var fontFamily = "";
			            if (font != "" && family != undefined)
			                fontFamily = '\'' + family + '\',' + font;
			            else if (font == "" && family != undefined)
			                fontFamily = '\'' + family + '\'';
			            else {
			                fontFamily = font;
			            }

			            return {
			                'font-family': fontFamily,
			                'font-size': size,
			                'font-weight': variantWeight,
			                'font-style': variantStyle,
			                'color': color,
			                'line-height': lineHeight
			            }
			        };

			        //Set font
			        $scope.setFontFamily = function () {
			            $scope.model.value.oFontFamily = $scope.fontFamily;
			        }

			        //Set size
			        $scope.setSize = function () {
			            $scope.model.value.oSize = $scope.size;
			        }

			        //a method to update the model by adding a blank item
			        $scope.add = function ($index) {
			            $scope.model.value.splice($index + 1, 0, {
			                id: new Date().getTime(),
			                oName: "",
			                oTags: "body, h1, h2, .strong...",
			                oVariant: "",
			                oVariants: [],
			                oSize: "36px",
			                oFontFamily: "Arial, sans-serif",
			                oGoogleFont: {
			                    family: "-- none --",
			                    variants: {}
			                },
			                oColor: { hex: '#555', rgb: 'rgba(85, 85, 85)', rgba: 'rgba(85, 85, 85, 1)', opacity: "1" },
			                oLineHeight: "36px",
			                //oLetterSpacing: "14px",
			                //oWordSpacing: "14px",
			                //oWeight: "14px"
			            });
			        }

			        //remove a link from the model
			        $scope.remove = function ($index) {
			            if ($scope.model.value.length > 1) {
			                //if (confirm('Are you sure you want to remove this?')) {
			                $scope.model.value.splice($index, 1);
			                //}
			            }
			        }

			        $scope.initShowFontPreview = function (font, node) {
			            if (font.family == node.oGoogleFont.family) {
			                $scope.showFontPreview(font, node)
			            }
			        }

			        //Update front preview
			        $scope.showFontPreview = function (node, init) {

			            if (!init) {
			                node.oVariant = "";
			                node.oVariants = [];
			                if (node.oGoogleFont.family != "-- none --") {
			                    angular.forEach($scope.fonts, function (value, key) {
			                        if (value.family == node.oGoogleFont.family) {
			                            node.oVariants = value.variants;
			                            if (value.variants[0] != "regular")
			                                node.oVariant = value.variants[0];
			                        }
			                    });
			                }
			            }

			            if (node.oGoogleFont.family != "-- none --") {

			                //Google WebFont JS loader...
			                WebFont.load({
			                    google: {
			                        families: [node.oGoogleFont.family + ":" + node.oVariant]
			                    },
			                    loading: function () {
			                        console.log('loading');
			                    },
			                    active: function () {
			                        console.log('active');
			                    },
			                    inactive: function () {
			                        console.log('inactive');
			                    },
			                    fontloading: function (familyName, fvd) {
			                        console.log('fontloading: ' + familyName);
			                    },
			                    fontactive: function (familyName, fvd) {
			                        console.log('fontactive: ' + familyName);
			                    },
			                    fontinactive: function (familyName, fvd) {
			                        console.log('fontinactive: ' + familyName);
			                        alert('Unable to load font "' + familyName + '" Please try again.');
			                    }
			                });
			            }
			        }

			        //Load google font
			        if ($scope.fonts == undefined || $scope.fonts.length == 0) {
			            $scope.fonts = [];
			            $http.get('/Umbraco/Api/GoogleFont/load')
                            .success(function (data) {
                                $scope.fonts.push({
                                    family: "-- none --",
                                    variants: {}
                                });
                                angular.forEach(data.items, function (value, key) {
                                    $scope.fonts.push({
                                        family: value.family,
                                        variants: value.variants
                                    });
                                });
                                $scope.load = true;

                                angular.forEach($scope.model.value, function (value, key) {
                                    $scope.showFontPreview(value, true);
                                });


                            })
			        }
			        else {
			            $scope.load = true;
			        }

			        if ($scope.model.value.length == 0) {
			            if ($scope.model.value == "") $scope.model.value = [];
			            $scope.add(0);
			        }

			    });

        assetsService.loadCss("/App_Plugins/Lecoati.uSky.GoogleFont/lib/colorpicker.css");
        assetsService.loadCss("/App_Plugins/Lecoati.uSky.GoogleFont/lib/uSky.GoogleFont.css");

    });
