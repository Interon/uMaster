(function(){function ak(){return"tinymce";}function f(aH){return J()!="3"&&aH.inline;}function C(aH){return aH.id.replace(/\[/,"_").replace(/\]/,"_");}function h(aI){if(J()=="3"||!f(aI)){return aI.getContainer();}var aH=window.document.getElementById(aI.theme.panel._id);return aH;}function c(aH){return aH.getDoc();}function U(aH){return tinymce.activeEditor.selection.getNode();}function Q(){return tinymce.baseURL;}function az(){return g("doksoft_bootstrap_button");}function g(aH){return Q()+"/plugins/"+aH+"/";}function J(){return tinymce.majorVersion=="4"?4:3;}function t(aI,aH){return window["doksoft_bootstrap_button_i18n"][aH];}function S(aI,aH){return P(aI,"doksoft_bootstrap_button_"+aH);}var aa={};function P(aI,aH){if(typeof(aa[aH])!="undefined"){return aI.getParam(aH,aa[aH]);}else{return aI.getParam(aH);}}function s(aH,aI){T("doksoft_bootstrap_button_"+aH,aI);}function T(aH,aI){aa[aH]=aI;}function av(aI,aH){if(J()==4){aI.insertContent(aH);}else{aI.execCommand("mceInsertContent",false,aH);}}function q(){if(J()==3){return"_3";}v=(tinymce.minorVersion.split("."))[0];if(v=="0"){return"_4.0";}return"";}var D={};var ay=0;function aB(aJ,aH){var aI=C(aJ)+"$"+aH;if(aI in D){return D[aI];}return null;}function L(aK,a2,a1,aS,aO,aV,a0,aP,aM,aJ,aY){var aZ=C(aK)+"$"+a2;if(aZ in D){return D[aZ];}ay++;var aT="";var aQ={};for(var aU=aV.length-1;aU>=0;aU--){var aH=aV[aU];var aN=C(aK)+"_doksoft_bootstrap_button_"+ay+"_"+aU;var aL=null;if(aH.type=="ok"){aL=-1;}else{if(aH.type=="cancel"){aL=-2;}else{if(aH.type=="custom"&&typeof(aH.onclick)!="undefined"&&aH.onclick!=null){aL=aH.onclick;}}}aQ[aN]=aL;if(J()==3){var aW="border: 1px solid #b1b1b1;"+"border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25) rgba(0,0,0,.25);position: relative;"+"text-shadow: 0 1px 1px rgba(255,255,255,.75);"+"display: inline-block;"+"-webkit-border-radius: 3px;"+"-moz-border-radius: 3px;"+"border-radius: 3px;"+"-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"-moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"background-color: #f0f0f0;"+"background-image: -moz-linear-gradient(top,#fff,#d9d9d9);"+"background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#d9d9d9));"+"background-image: -webkit-linear-gradient(top,#fff,#d9d9d9);"+"background-image: -o-linear-gradient(top,#fff,#d9d9d9);"+"background-image: linear-gradient(to bottom,#fff,#d9d9d9);"+"background-repeat: repeat-x;"+"filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffd9d9d9', GradientType=0);";if(aH.type=="ok"){aW="text-shadow: 0 1px 1px rgba(255,255,255,.75);"+"display: inline-block;"+"-webkit-border-radius: 3px;"+"-moz-border-radius: 3px;"+"border-radius: 3px;"+"-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"-moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"min-width: 50px;"+"color: #fff;"+"border: 1px solid #b1b1b1;"+"border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25) rgba(0,0,0,.25);"+"background-color: #006dcc;"+"background-image: -moz-linear-gradient(top,#08c,#04c);"+"background-image: -webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));"+"background-image: -webkit-linear-gradient(top,#08c,#04c);"+"background-image: -o-linear-gradient(top,#08c,#04c);"+"background-image: linear-gradient(to bottom,#08c,#04c);"+"background-repeat: repeat-x;"+"filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0044cc', GradientType=0);";}styleBtn="-moz-box-sizing: border-box;"+"-webkit-box-sizing: border-box;"+"box-sizing: border-box;"+"padding: 4px 10px;"+"font-size: 14px;"+"line-height: 20px;"+"cursor: pointer;"+"text-align: center;"+"overflow: visible;"+"-webkit-appearance: none;"+"background: none;"+"border: none;";if(aH.type=="ok"){styleBtn+="color: #fff;text-shadow: 1px 1px #333;";}aT+='<div tabindex="-1" style="'+aW+"position:relative;float:right;top: 10px;height: 28px;margin-right:15px;text-align:center;"+'">'+'<button id="'+aN+'" type="button" tabindex="-1" style="'+styleBtn+"height:100%"+'">'+ae(aH.title)+"</button>"+"</div>";}else{aT+='<div class="mce-widget mce-btn '+(aH.type=="ok"?"mce-primary":"")+' mce-abs-layout-item" tabindex="-1" style="position:relative;float:right;top: 10px;height: 28px;margin-right:15px;text-align:center">'+'<button id="'+aN+'" type="button" tabindex="-1" style="height: 100%;">'+ae(aH.title)+"</button>"+"</div>";}}if(J()==3){var aR='<div style="display: none; position: fixed; height: 100%; width: 100%;top:0;left:0;z-index:19000" data-popup-id="'+aZ+'">'+'<div style="position: absolute; height: 100%; width: 100%;top:0;left:0;background-color: gray;opacity: 0.3;z-index:-1"></div>'+'<div style="display: table-cell; vertical-align: middle;z-index:19005">'+'<div class="" '+'style="'+"border-width: 1px; margin-left: auto; margin-right: auto; width: "+aS+"px;"+"-webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;-webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);-moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);"+"box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);background: transparent;background: #fff;"+"-webkit-transition: opacity 150ms ease-in;transition: opacity 150ms ease-in;"+"border: 0 solid #9e9e9e;background-repeat:repeat-x"+'">'+'<div style="padding: 9px 15px;border-bottom: 1px solid #c5c5c5;position: relative;">'+'<div style="line-height: 20px;font-size: 20px;font-weight: 700;text-rendering: optimizelegibility;padding-right: 10px;">'+ae(a1)+"</div>"+'<button style="position: absolute;right: 15px;top: 9px;font-size: 20px;font-weight: 700;line-height: 20px;color: #858585;cursor: pointer;height: 20px;overflow: hidden;background: none;border: none;padding-top: 0 !important; padding-right: 0 !important;padding-left: 0 !important" type="button" id="'+C(aK)+"_doksoft_bootstrap_button_"+ay+'_close">×</button>'+"</div>"+'<div style="overflow:hidden">'+aO+'<div hidefocus="1" tabindex="-1" '+'style="border-width: 1px 0px 0px; left: 0px; top: 0px; height: 50px;'+"display: block;background-color: #fff;border-top: 1px solid #c5c5c5;-webkit-border-radius: 0 0 6px 6px;-moz-border-radius: 0 0 6px 6px;border-radius: 0 0 6px 6px;"+"border: 0 solid #9e9e9e;background-color: #f0f0f0;background-image: -moz-linear-gradient(top,#fdfdfd,#ddd);background-image: -webkit-gradient(linear,0 0,0 100%,from(#fdfdfd),to(#ddd));"+"background-image: -webkit-linear-gradient(top,#fdfdfd,#ddd);background-image: -o-linear-gradient(top,#fdfdfd,#ddd);"+"background-image: linear-gradient(to bottom,#fdfdfd,#ddd);background-repeat: repeat-x;"+'">'+'<div class="mce-container-body mce-abs-layout" style="height: 50px;">'+'<div class="mce-abs-end"></div>'+aT+"</div>"+"</div>"+"</div>"+"</div>"+"</div>"+"</div>";
}else{var aR='<div style="display: none; position: fixed; height: 100%; width: 100%;top:0;left:0;z-index:19000" data-popup-id="'+aZ+'">'+'<div style="position: absolute; height: 100%; width: 100%;top:0;left:0;background-color: gray;opacity: 0.3;z-index:-1"></div>'+'<div style="display: table-cell; vertical-align: middle;z-index:19005">'+'<div class="" '+'style="'+"border-width: 1px; margin-left: auto; margin-right: auto; width: "+aS+"px;"+"-webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;-webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);-moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);"+"box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);background: transparent;background: #fff;"+"-webkit-transition: opacity 150ms ease-in;transition: opacity 150ms ease-in;"+"border: 0 solid #9e9e9e;background-repeat:repeat-x"+'">'+'<div  class="mce-window-head">'+'<div class="mce-title">'+ae(a1)+"</div>"+'<button class="mce-close" type="button" id="'+C(aK)+"_doksoft_bootstrap_button_"+ay+'_close" style="background:none;border:none">×</button>'+"</div>"+'<div class="mce-container-body mce-abs-layout">'+aO+'<div class="mce-container mce-panel mce-foot" hidefocus="1" tabindex="-1" style="border-width: 1px 0px 0px; left: 0px; top: 0px; height: 50px;">'+'<div class="mce-container-body mce-abs-layout" style="height: 50px;">'+'<div class="mce-abs-end"></div>'+aT+"</div>"+"</div>"+"</div>"+"</div>"+"</div>";}var aI=ai(aR)[0];var aX={$:aI,appendedToDOM:false,num:ay,editor:aK,open:function(){if(!this.appendedToDOM){this.editor.getElement().parentNode.appendChild(this.$);var a5=this;for(var a6 in aQ){var a3=aQ[a6];if(a3!=null){var a4=document.getElementById(a6);if(a3===-1){a4.onclick=function(){a5.ok();};}else{if(a3===-2){a4.onclick=function(){a5.cancel();};}else{a4.onclick=function(){a3();};}}}}document.getElementById(C(this.editor)+"_doksoft_bootstrap_button_"+this.num+"_close").onclick=function(){a5.cancel();};this.appendedToDOM=true;if(aY!=null){aY(this.editor);}}if(aM!=null){aM(this.editor);}this.$.style.display="table";},close:function(){this.$.style.display="none";if(aJ!=null){aJ(this.editor);}},ok:function(){if(a0!=null){if(a0(this.editor)===false){return;}}aX.close();},cancel:function(){if(aP!=null){if(aP(this.editor)===false){return;}}this.close();}};D[aZ]=aX;return aX;}var d={};var al=0;function V(aI){var aH=C(aI);if(aH in d){return d[aH];}return null;}function aE(aO,aI,aM,aK,aQ,aP){var aR=C(aO);if(aR in d){return d[aR];}al++;var aL="";if(J()==3){aL="<div"+' style="margin-left:-11px;background: #FFF;border: 1px solid gray;z-index: 165535;padding:8px 12px 8px 8px;position:absolute'+(aI!=null?(";width:"+aI+"px"):"")+'">'+aM+"</div>";}else{aL="<div"+' class="mce-container mce-panel mce-floatpanel mce-popover mce-bottom mce-start"'+' style="z-index: 165535;padding:8px 12px 8px 8px'+(aI!=null?(";width:"+aI+"px"):"")+'">'+'<div class="mce-arrow" hidefocus="1" tabindex="-1" role="dialog"></div>'+aM+"</div>";}var aN='<div style="z-index:165534;position:absolute;left:0;top:0;width:100%;height:100%;display:none" data-popup-id="'+aR+'">'+aL+"</div>";var aJ=ai(aN)[0];var aH={$_root:aJ,$_popup:aJ.children[0],num:al,appendedToDOM:false,editor:aO,open:function(){if(!this.appendedToDOM){this.$_root.onclick=(function(){return function(a2){d[this.getAttribute("data-popup-id")].close();a2.stopPropagation();};})();this.$_popup.onclick=function(a2){a2.stopPropagation();};h(this.editor).appendChild(this.$_root);var aY=this;this.appendedToDOM=true;if(aP!=null){aP(this.editor);}}if(aK!=null){aK(this.editor);}var aW=h(this.editor);var a1=aW.getElementsByClassName("mce_doksoft_bootstrap_button");if(a1.length==0){a1=aW.getElementsByClassName("mce-doksoft_bootstrap_button");}if(a1.length==0){console.log("Unable to find button with class 'mce_doksoft_bootstrap_button' or 'mce-doksoft_bootstrap_button' for editor "+C(this.editor));}else{var aS=a1[0];var a0=aS.getBoundingClientRect();var aZ=function(a3,a2){var a5=0,a4=0;do{a5+=a3.offsetTop||0;a4+=a3.offsetLeft||0;a3=a3.offsetParent;}while(a3&&a3!=a2);return{top:a5,left:a4};};var aT=h(this.editor);var aU=aZ(aS,aT);this.$_popup.style.top=(aU.top+aS.offsetHeight)+"px";this.$_popup.style.left=(aU.left+aS.offsetWidth/2)+"px";this.$_popup.style.display="block";var aX=document.body;var aV=document.documentElement;this.$_root.style.height=Math.max(aX.scrollHeight,aX.offsetHeight,aV.clientHeight,aV.scrollHeight,aV.offsetHeight);this.$_root.style.display="block";}},close:function(){this.$_popup.style.display="none";this.$_root.style.display="none";if(aQ!=null){aQ(this.editor);}}};d[aR]=aH;return aH;}var o={};function R(aL,aR,aO,aP,aM,aN,aQ){var aJ=(function(){var aS=aL;return function(aT){aN(aS);};})();var aK=aL;var aI=function(aS,aT){if(!(C(aS) in o)){o[C(aS)]={};}o[C(aS)][aR]=aT;if(aM){tinymce.DOM.remove(aT.getEl("preview"));}aT.off();if(aN!=null){aT.on("click",aJ);}if(aQ){aQ(aS);}};var aH={text:"",type:"button",icon:true,classes:"widget btn doksoft_bootstrap_button btn-doksoft_bootstrap_button-"+C(aL),image:aO,tooltip:aP,title:aP,id:"btn-doksoft_bootstrap_button-"+C(aL),onclick:aJ,onPostRender:function(){aI(aK,this);
}};if(aM){aH.type=J()=="3"?"ColorSplitButton":"colorbutton";aH.color="#FFFFFF";aH.panel={};}if(J()=="3"&&aM){(function(){var aS=false;aL.onNodeChange.add(function(aZ,aU,aV){if(aS){return;}aS=true;var aX=h(aZ);var aY=aX.getElementsByClassName("mce_"+aR);if(aY.length>0){var aT=aY[0];var a0=aT.parentNode;var aW=a0.nextSibling;var a2=ai('<div id="content_forecolor" role="button" tabindex="-1" aria-labelledby="content_forecolor_voice" aria-haspopup="true">'+'<table role="presentation" class="mceSplitButton mceSplitButtonEnabled mce_forecolor" cellpadding="0" cellspacing="0" title="Select Text Color">'+"<tbody>"+"<tr>"+'<td class="mceFirst">'+"</td>"+'<td class="mceLast">'+'<a role="button" style="width:10px" tabindex="-1" href="javascript:;" class="mceOpen mce_forecolor" onclick="return false;" onmousedown="return false;" title="Select Text Color">'+'<span class="mceOpen mce_forecolor">'+'<span style="display:none;" class="mceIconOnly" aria-hidden="true">▼</span>'+"</span>"+"</a>"+"</td>"+"</tr>"+"</tbody>"+"</table>"+"</div>")[0];var a1=a2.getElementsByClassName("mceFirst")[0];a0.appendChild(a2);a1.appendChild(aT);aT.style.marginRight="-1px";aT.className=aT.className+" mceAction mce_forecolor";a2.getElementsByClassName("mceOpen")[0].onclick=aJ;}});})();}aL.addButton(aR,aH);}var M=0;var E=1;var I=2;function p(aI,aK,aJ){if(aJ!=M&&aJ!=E&&aJ!=I){return;}if(J()==3){aI.controlManager.setDisabled(aK,aJ==M);aI.controlManager.setActive(aK,aJ==I);}else{if((C(aI) in o)&&(aK in o[C(aI)])){var aH=o[C(aI)][aK];aH.disabled(aJ==M);aH.active(aJ==I);}}}function K(aH,aI){if(J==3){aH.onNodeChange.add(function(aK,aJ,aL){aI(aK);});}else{aH.on("NodeChange",function(aJ){aI(aJ.target);});}}function F(aH){if(typeof(aH)=="undefined"){return"";}var aK=1000;if(aH<aK){return aH+" b";}var aI=["Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"];var aJ=-1;do{aH/=aK;++aJ;}while(aH>=aK);return aH.toFixed(1)+" "+aI[aJ];}function ae(aH){return aH.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");}function ai(aH){var aI=document.createElement("div");aI.innerHTML=aH;return aI.childNodes;}function au(aH){return aH.getElementsByTagName("head")[0];}function ao(aH){return aH.getElementsByTagName("body")[0];}function Z(aK,aM){if(!aK){return;}var aH=aK.getElementsByTagName("link");var aL=false;for(var aI=0;aI<aH.length;aI++){if(aH[aI].href.indexOf(aM)!=-1){aL=true;}}if(!aL){var aJ=aK.createElement("link");aJ.href=aM;aJ.type="text/css";aJ.rel="stylesheet";au(aK).appendChild(aJ);}}function j(aK,aM){if(!aK){return;}var aH=aK.getElementsByTagName("script");var aL=false;for(var aJ=0;aJ<aH.length;aJ++){if(aH[aJ].src.indexOf(aM)!=-1){aL=true;}}if(!aL){var aI=aK.createElement("script");aI.src=aM;aI.type="text/javascript";au(aK).appendChild(aI);}}function aC(aH,aJ,aI){Z(c(aH),aJ);if(document!=c(aH)&&aI){Z(document,aJ);}}function af(aH,aJ,aI){j(c(aH),aJ);if(document!=c(aH)&&aI){j(document,aJ);}}function am(aI,aH){var aJ=c(aI);w(aJ,aH);}function w(aJ,aH){var aI=aJ.createElement("style");au(aJ).appendChild(aI);aI.innerHTML=aH;}function aw(aI,aH){if(aG(aI,aH)){return;}aI.className=aI.className.length==0?aH:aI.className+" "+aH;}function aA(aJ,aH){var aI=a(aJ);while(aI.indexOf(aH)>-1){aI.splice(aI.indexOf(aH),1);}var aK=aI.join(" ").trim();if(aK.length>0){aJ.className=aK;}else{if(aJ.hasAttribute("class")){aJ.removeAttribute("class");}}}function a(aH){if(typeof(aH.className)==="undefined"||aH.className==null){return[];}return aH.className.split(/\s+/);}function aG(aK,aH){var aJ=a(aK);for(var aI=0;aI<aJ.length;aI++){if(aJ[aI].toLowerCase()==aH.toLowerCase()){return true;}}return false;}function aD(aJ,aK){var aI=a(aJ);for(var aH=0;aH<aI.length;aH++){if(aI[aH].indexOf(aK)===0){return true;}}return false;}function W(aJ){if(typeof(aJ.getAttribute("style"))==="undefined"||aJ.getAttribute("style")==null||aJ.getAttribute("style").trim().length==0){return{};}var aL={};var aK=aJ.getAttribute("style").split(/;/);for(var aI=0;aI<aK.length;aI++){var aM=aK[aI].trim();var aH=aM.indexOf(":");if(aH>-1){aL[aM.substr(0,aH).trim()]=aM.substr(aH+1);}else{aL[aM]="";}}return aL;}function ah(aJ,aI){var aK=W(aJ);for(var aH in aK){var aL=aK[aH];if(aH==aI){return aL;}}return null;}function ab(aK,aJ,aH){var aL=W(aK);for(var aI in aL){var aM=aL[aI];if(aI==aJ&&aM==aH){return true;}}return false;}function B(aJ,aI,aH){var aK=W(aJ);aK[aI]=aH;r(aJ,aK);}function Y(aI,aH){var aJ=W(aI);delete aJ[aH];r(aI,aJ);}function r(aI,aK){var aJ=[];for(var aH in aK){aJ.push(aH+":"+aK[aH]);}if(aJ.length>0){aI.setAttribute("style",aJ.join(";"));}else{if(aI.hasAttribute("style")){aI.removeAttribute("style");}}}function u(aL,aI){var aJ;if(Object.prototype.toString.call(aI)==="[object Array]"){aJ=aI;}else{aJ=[aI];}for(var aK=0;aK<aJ.length;aK++){aJ[aK]=aJ[aK].toLowerCase();}var aH=[];for(var aK=0;aK<aL.childNodes.length;aK++){if(aL.childNodes[aK].nodeType==1&&aJ.indexOf(aL.childNodes[aK].tagName.toLowerCase())>-1){aH.push(aL.childNodes[aK]);}}return aH;}function ag(){var aH=false;
if(aH){var aL=window.location.hostname;var aK=0;var aI;var aJ;if(aL.length!=0){for(aI=0,l=aL.length;aI<l;aI++){aJ=aL.charCodeAt(aI);aK=((aK<<5)-aK)+aJ;aK|=0;}}if(aK!=1548386045){alert(atob("VGhpcyBpcyBkZW1vIHZlcnNpb24gb25seS4gUGxlYXNlIHB1cmNoYXNlIGl0"));return false;}}}function b(){var aI=false;if(aI){var aO=window.location.hostname;var aN=0;var aJ;var aK;if(aO.length!=0){for(aJ=0,l=aO.length;aJ<l;aJ++){aK=aO.charCodeAt(aJ);aN=((aN<<5)-aN)+aK;aN|=0;}}if(aN-1548000045!=386000){var aM=document.cookie.match(new RegExp("(?:^|; )"+"jdm_doksoft_bootstrap_button".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));var aL=aM&&decodeURIComponent(aM[1])=="1";if(!aL){var aH=new Date();aH.setTime(aH.getTime()+(30*1000));document.cookie="jdm_doksoft_bootstrap_button=1; expires="+aH.toGMTString();var aJ=document.createElement("img");aJ.src=atob("aHR0cDovL2Rva3NvZnQuY29tL21lZGlhL3NhbXBsZS9kLnBocA==")+"?p=doksoft_bootstrap_button&u="+encodeURIComponent(document.URL);}}}}var k=1;var x="";var ap=[];buttonStylePrimaryClass="";var O=[];var an=[];var H=[];var N=[];var y=[];var aj="";var n="";if(k==1){s("default_style","btn-primary");s("default_size","");s("default_tag","a");s("default_link","http://");s("default_input_type","button");s("default_enabled",true);s("default_width_100",false);s("default_text","Download");x="btn";ap=["btn-default","btn-primary","btn-success","btn-info","btn-warning","btn-danger","btn-link"];buttonStylePrimaryClass="btn-primary";O=["btn_style_default","btn_style_primary","btn_style_success","btn_style_info","btn_style_warning","btn_style_danger","btn_style_link"];an=["btn-xs","btn-sm","","btn-lg"];H=["btn_size_extra_small","btn_size_small","btn_size_default","btn_size_large"];N=["a","input","button"];y=["enabled","width_100"];aj="btn-block";n="disabled";}else{if(k==2){s("default_style","");s("default_size","");s("default_link","http://");s("default_enabled",true);s("default_width_100",false);s("default_text","Download");s("default_radius",false);s("default_round",false);x="button";ap=["","secondary","success","alert"];buttonStylePrimaryClass="";O=["btn_style_default","btn_style_secondary","btn_style_success","btn_style_alert"];an=["tiny","small","","large"];H=["btn_size_tiny","btn_size_small","btn_size_default","btn_size_large"];N=["a"];y=["enabled","width_100","radius","round"];aj="expand";n="disabled";}}var A={};function aF(aJ){var aI="";var aH=x+(A.styleClass.length>0?(" "+A.styleClass):"")+(A.sizeClass.length>0?(" "+A.sizeClass):"")+(A.width_100?(" "+aj):"")+(!A.enabled?(" "+n):"")+(A.round?(" round"):"")+(A.radius?(" radius"):"");var aK=encodeURI(A.link);if(aJ){aK="#";}if(A.tag=="a"){aI='<a href="'+aK+'" class="'+aH+'">'+ae(A.text)+"</a>";}else{if(A.tag=="input"){aI='<input type="'+A.inputType+'" class="'+aH+'" value="'+ae(A.text)+'"/>';}else{if(A.tag=="button"){aI='<button class="'+aH+'">'+ae(A.text)+"</button>";}}}return aI;}function aq(aM){var aK;var aO;var aL=document.getElementById("doksoft_bootstrap_button_styles_"+C(aM));var aJ=aL.getElementsByClassName("doksoft_bootstrap_button_selector_"+C(aM));for(var aI=0;aI<aJ.length;aI++){aK=a(aJ[aI].getElementsByTagName("button")[0]);aO=(aK.length==1&&A.styleClass=="")||aK.indexOf(A.styleClass)>-1;if(aO){aw(aJ[aI],"active");}else{aA(aJ[aI],"active");}}aL=document.getElementById("doksoft_bootstrap_button_sizes_"+C(aM));aJ=aL.getElementsByClassName("doksoft_bootstrap_button_selector_"+C(aM));for(var aI=0;aI<aJ.length;aI++){aK=a(aJ[aI].getElementsByTagName("button")[0]);aO=(aK.length==1&&A.sizeClass=="")||aK.indexOf(A.sizeClass)>-1;if(aO){aw(aJ[aI],"active");}else{aA(aJ[aI],"active");}}var aN=document.getElementById("doksoft_bootstrap_button_option_enabled_"+C(aM));aN.checked=A.enabled;aN=document.getElementById("doksoft_bootstrap_button_option_width_100_"+C(aM));aN.checked=A.width_100;aN=document.getElementById("doksoft_bootstrap_button_option_radius_"+C(aM));if(aN){aN.checked=A.radius;}aN=document.getElementById("doksoft_bootstrap_button_option_round_"+C(aM));if(aN){aN.checked=A.round;}document.getElementById("doksoft_bootstrap_button_link_"+C(aM)).value=A.link;document.getElementById("doksoft_bootstrap_button_text_"+C(aM)).value=A.text;var aH=document.getElementById("doksoft_bootstrap_button_tag_a_"+C(aM));if(aH){if(A.tag=="a"){aw(aH,"active");}else{aA(aH,"active");}}aH=document.getElementById("doksoft_bootstrap_button_tag_input_"+C(aM));if(aH){if(A.tag=="input"){aw(aH,"active");}else{aA(aH,"active");}}aH=document.getElementById("doksoft_bootstrap_button_tag_button_"+C(aM));if(aH){if(A.tag=="button"){aw(aH,"active");}else{aA(aH,"active");}}if(A.tag=="a"){aH=document.getElementById("doksoft_bootstrap_button_for_tag_a_"+C(aM));if(aH){aA(document.getElementById("doksoft_bootstrap_button_for_tag_a_"+C(aM)),"doksoft_bootstrap_button_hidden_"+C(aM));aw(document.getElementById("doksoft_bootstrap_button_for_tag_input_"+C(aM)),"doksoft_bootstrap_button_hidden_"+C(aM));}}else{if(A.tag=="input"){aw(document.getElementById("doksoft_bootstrap_button_for_tag_a_"+C(aM)),"doksoft_bootstrap_button_hidden_"+C(aM));
aA(document.getElementById("doksoft_bootstrap_button_for_tag_input_"+C(aM)),"doksoft_bootstrap_button_hidden_"+C(aM));}else{aw(document.getElementById("doksoft_bootstrap_button_for_tag_a_"+C(aM)),"doksoft_bootstrap_button_hidden_"+C(aM));aw(document.getElementById("doksoft_bootstrap_button_for_tag_input_"+C(aM)),"doksoft_bootstrap_button_hidden_"+C(aM));}}if(A.inputType&&A.inputType.length>0){aH=document.getElementById("doksoft_bootstrap_button_input_type_"+A.inputType+"_"+C(aM));if(aH){aH.checked=true;}}}function ad(aI){var aH=aF(true);document.getElementById("doksoft_bootstrap_button_preview_"+C(aI)).innerHTML=aH;aq(aI);}function ax(aL,aK){var aI={};aI.styleClass="";for(var aJ=0;aJ<ap.length&&aI.styleClass.length==0;aJ++){var aH=ap[aJ];if(aH.length>0&&aG(aK,ap[aJ])){aI.styleClass=aH;}}aI.sizeClass="";for(var aJ=0;aJ<an.length&&aI.sizeClass.length==0;aJ++){var aH=an[aJ];if(aH.length>0&&aG(aK,an[aJ])){aI.sizeClass=aH;}}aI.tag=aK.tagName.toLowerCase();aI.link="";if(aI.tag=="a"){aI.text=aK.innerText;aI.link=aK.getAttribute("href");aI.inputType=S(aL,"default_input_type");}else{if(aI.tag=="input"){aI.text=aK.getAttribute("value");aI.link=S(aL,"default_link");aI.inputType=aK.getAttribute("type");}else{if(aI.tag=="button"){aI.text=aK.innerText;aI.link=S(aL,"default_link");aI.inputType=S(aL,"default_input_type");}}}aI.enabled=!aG(aK,n);aI.width_100=aG(aK,aj);aI.round=aG(aK,"round");aI.radius=aG(aK,"radius");return aI;}function ac(aI){var aH={};aH.styleClass=S(aI,"default_style");aH.sizeClass=S(aI,"default_size");aH.link=S(aI,"default_link");aH.text=S(aI,"default_text");aH.enabled=S(aI,"default_enabled");aH.width_100=S(aI,"default_width_100");aH.tag=S(aI,"default_tag")||"a";if(k==1){aH.inputType=S(aI,"default_input_type");aH.round=false;aH.radius=false;}else{if(k==2){aH.inputType="";aH.round=S(aI,"default_round");aH.radius=S(aI,"default_radius");}}return aH;}function ar(aI){var aH=U(aI);return i(aH);}function i(aH){if(aH&&(N.indexOf(aH.tagName.toLowerCase())>-1)){return aH;}return null;}var m=[];function e(aN){if(m.indexOf(C(aN))==-1){m.push(C(aN));var aO=document.getElementById("doksoft_bootstrap_button_link_"+C(aN));var aK=function(){A.link=document.getElementById("doksoft_bootstrap_button_link_"+C(aN)).value;ad(aN);};aO.onkeyup=aK;aO.onchange=aK;aO.onPaste=aK;var aP=document.getElementById("doksoft_bootstrap_button_text_"+C(aN));var aK=function(){A.text=document.getElementById("doksoft_bootstrap_button_text_"+C(aN)).value;ad(aN);};aP.onkeyup=aK;aP.onchange=aK;aP.onPaste=aK;var aJ=document.getElementById("doksoft_bootstrap_button_styles_"+C(aN));var aQ=aJ.getElementsByClassName("doksoft_bootstrap_button_selector_"+C(aN));for(var aM=0;aM<aQ.length;aM++){aQ[aM].onclick=function(){A.styleClass=this.getAttribute("data-value");ad(aN);};}aJ=document.getElementById("doksoft_bootstrap_button_sizes_"+C(aN));aQ=aJ.getElementsByClassName("doksoft_bootstrap_button_selector_"+C(aN));for(var aM=0;aM<aQ.length;aM++){aQ[aM].onclick=function(){A.sizeClass=this.getAttribute("data-value");ad(aN);};}document.getElementById("doksoft_bootstrap_button_option_enabled_"+C(aN)).onclick=function(){A.enabled=!A.enabled;ad(aN);};document.getElementById("doksoft_bootstrap_button_option_width_100_"+C(aN)).onclick=function(){A.width_100=!A.width_100;ad(aN);};var aH=document.getElementById("doksoft_bootstrap_button_option_round_"+C(aN));if(aH){aH.onchange=function(){A.round=!A.round;ad(aN);};}aH=document.getElementById("doksoft_bootstrap_button_option_radius_"+C(aN));if(aH){aH.onchange=function(){A.radius=!A.radius;ad(aN);};}var aI=document.getElementById("doksoft_bootstrap_button_tag_a_"+C(aN));if(aI){aI.onclick=function(){A.tag="a";ad(aN);};}aI=document.getElementById("doksoft_bootstrap_button_tag_input_"+C(aN));if(aI){aI.onclick=function(){A.tag="input";if(A.inputType==null||A.inputType.length==0){A.inputType=S(aN,"doksoft_bootstrap_button_default_input_type");}ad(aN);};}aI=document.getElementById("doksoft_bootstrap_button_tag_button_"+C(aN));if(aI){aI.onclick=function(){A.tag="button";ad(aN);};}var aL=document.getElementById("doksoft_bootstrap_button_input_type_button_"+C(aN));if(aL){aL.onclick=function(){A.inputType="button";ad(aN);};}aL=document.getElementById("doksoft_bootstrap_button_input_type_submit_"+C(aN));if(aL){aL.onclick=function(){A.inputType="submit";ad(aN);};}aL=document.getElementById("doksoft_bootstrap_button_input_type_cancel_"+C(aN));if(aL){aL.onclick=function(){A.inputType="cancel";ad(aN);};}}}var at=null;function G(aI,aH){at=ar(aI);if(!at){A=ac(aI);}else{A=ax(aI,at);}ad(aI);e(aI);}function z(aK,aI){var aH=aF(false);if(!at){av(aK,aH);}else{var aJ=ai(aH)[0];at.parentNode.replaceChild(aJ,at);}}function X(aJ){var aI="<style>"+".doksoft_bootstrap_button_selector_"+C(aJ)+"{cursor:pointer;padding:10px 2px; display:inline-block; border:1px solid transparent; }"+".doksoft_bootstrap_button_selector_"+C(aJ)+":hover,.doksoft_bootstrap_button_selector_"+C(aJ)+".active{border-color:#99d9ea; background-color: #f4fdff;}"+"#doksoft_bootstrap_button_preview_"+C(aJ)+" { max-width:526px; overflow-x:hidden;height:80px;border:1px solid gray; text-align:center; padding-top:30px}"+"#doksoft_bootstrap_button_preview_"+C(aJ)+" a{display:inline-block;}"+".doksoft_bootstrap_button_hidden_"+C(aJ)+" { display: none; }"+"</style>";
aI+='<table style="width:100%;border:none" class="doksoft_bootstrap_button_preview" >'+"<tbody>";aI+='<tr style="background: transparent">'+'<td colspan="2" style="text-align: center;padding:0 2px" id="doksoft_bootstrap_button_styles_'+C(aJ)+'">';for(var aH=0;aH<ap.length;aH++){aI+='<div class="doksoft_bootstrap_button_selector_'+C(aJ)+'" data-value="'+ap[aH]+'"><button type="button" style="margin-bottom:0" class="'+x+" "+ap[aH]+'" />'+t(aJ,O[aH])+"</button></div>";}aI+="</td>"+"</td>";aI+='<tr style="background: transparent">'+'<td colspan="2" style="text-align: center;padding:0 2px" id="doksoft_bootstrap_button_sizes_'+C(aJ)+'">';for(var aH=0;aH<an.length;aH++){aI+='<div class="doksoft_bootstrap_button_selector_'+C(aJ)+'"data-value="'+an[aH]+'"><button type="button" style="margin-bottom:0" class="'+x+" "+buttonStylePrimaryClass+" "+an[aH]+'" />'+t(aJ,H[aH])+"</button></div>";}aI+="</td>"+"</tr>";aI+='<tr style="background: transparent">'+'<td colspan="2" style="padding:0 2px">'+'<div style="padding:5px 0 20px 0;height:15px;">';for(var aH=0;aH<y.length;aH++){aI+='<div style="display:inline-block;float:left;padding-right:10px;">'+'<label style="font-size:12px;font-weight:normal">'+'<input style="margin-top:-2px;vertical-align:middle;margin-bottom:0;font-size:12px;font-weight:normal" value="active" id="doksoft_bootstrap_button_option_'+y[aH]+"_"+C(aJ)+'" data-id="'+y[aH]+'" type="checkbox"/>'+"&nbsp;"+t(aJ,"option_"+y[aH])+"</label>"+"</div>";}aI+="</div>"+"</td>"+"</tr>";if(N.length>1){aI+='<tr style="background: transparent">'+'<td style="width:50%;height:50px;vertical-align:top;padding:0 2px">';for(var aH=0;aH<N.length;aH++){aI+='<div id="doksoft_bootstrap_button_tag_'+N[aH]+"_"+C(aJ)+'" style="width:55px;text-align:center;font-size:12px;font-weight:normal" class="doksoft_bootstrap_button_selector_'+C(aJ)+'">&lt;'+N[aH]+"&gt;</div>";}aI+="</td>";aI+='<td style="width:50%;background: transparent;vertical-align:top;padding:7px 2px 0 2px">'+'<div id="doksoft_bootstrap_button_for_tag_a_'+C(aJ)+'">'+'<div style="text-align:right;display:inline-block;float:right;width:210px">&nbsp;<input id="doksoft_bootstrap_button_link_'+C(aJ)+'" type="text" style="vertical-align:middle;width:90%; padding:3px 4px; border:1px solid gray;font-size:12px;font-weight:normal"/></div>'+'<div style="display:inline-block;float:right;margin-top:4px;font-size:12px;font-weight:normal">'+t(aJ,"label_link")+":</div>"+"</div>"+'<div id="doksoft_bootstrap_button_for_tag_input_'+C(aJ)+'">'+'<div style="width:30%;display:inline-block;margin-top:5px"><label style="font-size:12px;font-weight:normal"><input style="margin-top:-2px;vertical-align:middle" type="radio" value="button" name="doksoft_buttons_type" id="doksoft_bootstrap_button_input_type_button_'+C(aJ)+'"/>&nbsp;button</label></div>'+'<div style="width:30%;display:inline-block;margin-top:5px"><label style="font-size:12px;font-weight:normal"><input style="margin-top:-2px;vertical-align:middle;" type="radio" name="doksoft_buttons_type" value="submit" id="doksoft_bootstrap_button_input_type_submit_'+C(aJ)+'"/>&nbsp;submit</label></div>'+'<div style="width:30%;display:inline-block;margin-top:5px"><label style="font-size:12px;font-weight:normal"><input style="margin-top:-2px;vertical-align:middle;" type="radio" name="doksoft_buttons_type" value="cancel" id="doksoft_bootstrap_button_input_type_cancel_'+C(aJ)+'"/>&nbsp;cancel</label></div>'+"</div>";aI+="</td>";aI+="</tr>";}else{aI+='<tr style="background: transparent;height:30px">'+'<td colspan="2" style="padding:0 2px">'+'<div style="width:10%;display:inline-block;float:left;padding-top:5px;font-size:12px;font-weight:normal">'+t(aJ,"label_link")+":</div>"+'<div style="width:90%;display:inline-block;float:left">'+'<input id="doksoft_bootstrap_button_link_'+C(aJ)+'" type="text" style="vertical-align:middle;width:100%; padding:3px 4px; border:1px solid gray;box-sizing:border-box;line-height:normal;margin-bottom:0;height:inherit;font-size:12px;font-weight:normal"/>'+"</div>"+"</td>"+"</tr>";}aI+='<tr style="background: transparent">'+'<td colspan="2" style="padding:0 2px">'+'<div style="width:10%;display:inline-block;float:left;padding-top:5px;font-size:12px;font-weight:normal">'+t(aJ,"label_text")+":</div>"+'<div style="width:90%;display:inline-block;float:left">'+'<input id="doksoft_bootstrap_button_text_'+C(aJ)+'" type="text" style="vertical-align:middle;width:100%; padding:3px 4px; border:1px solid gray;box-sizing:border-box;line-height:normal;margin-bottom:0;height:inherit;font-size:12px;font-weight:normal"/>'+"</div>"+"</td>"+"</tr>";aI+='<tr style="background: transparent">'+'<td colspan="2" style="padding:10px 2px 0 2px">'+'<div style="padding-bottom: 2px;font-size:12px;font-weight:normal">'+t(aJ,"label_preview")+":</div>"+'<div id="doksoft_bootstrap_button_preview_'+C(aJ)+'" style="box-sizing: content-box">'+"</div>"+"</td>"+"</tr>";aI+="</tbody>"+"</table>";return aI;}tinymce.PluginManager.requireLangPack("doksoft_bootstrap_button");tinymce.PluginManager.add("doksoft_bootstrap_button",function(aI,aH){b();
var aJ=function(aK){var aL=L(aK,"doksoft_bootstrap_button",t(aK,"doksoft_bootstrap_button_title"),550,'<div style="padding:10px">'+X(aK)+"</div>",[{title:t(aK,"btn_ok"),type:"ok"},{title:t(aK,"btn_cancel"),type:"cancel"},],function(){z(aK,aL);},function(){},function(){G(aK,aL);},function(){},function(){});aL.open();};R(aI,"doksoft_bootstrap_button",az()+"mce_icons/doksoft_bootstrap_button"+q()+".png",t(aI,"doksoft_bootstrap_button_title"),false,aJ);if(J()>3){aI.addMenuItem("doksoft_bootstrap_button",{text:t(aI,"doksoft_bootstrap_button_title"),cmd:"doksoft_bootstrap_button",context:"insert",icon:true,image:az()+"mce_icons/doksoft_bootstrap_button"+q()+".png",});}});})();