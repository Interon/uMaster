(function(){function ah(){return"tinymce";}function f(aF){return G()!="3"&&aF.inline;}function y(aF){return aF.id.replace(/\[/,"_").replace(/\]/,"_");}function h(aG){if(G()=="3"||!f(aG)){return aG.getContainer();}var aF=window.document.getElementById(aG.theme.panel._id);return aF;}function c(aF){return aF.getDoc();}function P(aF){return tinymce.activeEditor.selection.getNode();}function L(){return tinymce.baseURL;}function au(){return g("doksoft_bootstrap_label");}function g(aF){return L()+"/plugins/"+aF+"/";}function G(){return tinymce.majorVersion=="4"?4:3;}function q(aG,aF){return window["doksoft_bootstrap_label_i18n"][aF];}function N(aG,aF){return K(aG,"doksoft_bootstrap_label_"+aF);}var X={};function K(aG,aF){if(typeof(X[aF])!="undefined"){return aG.getParam(aF,X[aF]);}else{return aG.getParam(aF);}}function p(aF,aG){O("doksoft_bootstrap_label_"+aF,aG);}function O(aF,aG){X[aF]=aG;}function ap(aG,aF){if(G()==4){aG.insertContent(aF);}else{aG.execCommand("mceInsertContent",false,aF);}}function n(){if(G()==3){return"_3";}v=(tinymce.minorVersion.split("."))[0];if(v=="0"){return"_4.0";}return"";}var z={};var ar=0;function ay(aH,aF){var aG=y(aH)+"$"+aF;if(aG in z){return z[aG];}return null;}function I(aI,a0,aZ,aQ,aM,aT,aY,aN,aK,aH,aW){var aX=y(aI)+"$"+a0;if(aX in z){return z[aX];}ar++;var aR="";var aO={};for(var aS=aT.length-1;aS>=0;aS--){var aF=aT[aS];var aL=y(aI)+"_doksoft_bootstrap_label_"+ar+"_"+aS;var aJ=null;if(aF.type=="ok"){aJ=-1;}else{if(aF.type=="cancel"){aJ=-2;}else{if(aF.type=="custom"&&typeof(aF.onclick)!="undefined"&&aF.onclick!=null){aJ=aF.onclick;}}}aO[aL]=aJ;if(G()==3){var aU="border: 1px solid #b1b1b1;"+"border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25) rgba(0,0,0,.25);position: relative;"+"text-shadow: 0 1px 1px rgba(255,255,255,.75);"+"display: inline-block;"+"-webkit-border-radius: 3px;"+"-moz-border-radius: 3px;"+"border-radius: 3px;"+"-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"-moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"background-color: #f0f0f0;"+"background-image: -moz-linear-gradient(top,#fff,#d9d9d9);"+"background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#d9d9d9));"+"background-image: -webkit-linear-gradient(top,#fff,#d9d9d9);"+"background-image: -o-linear-gradient(top,#fff,#d9d9d9);"+"background-image: linear-gradient(to bottom,#fff,#d9d9d9);"+"background-repeat: repeat-x;"+"filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffd9d9d9', GradientType=0);";if(aF.type=="ok"){aU="text-shadow: 0 1px 1px rgba(255,255,255,.75);"+"display: inline-block;"+"-webkit-border-radius: 3px;"+"-moz-border-radius: 3px;"+"border-radius: 3px;"+"-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"-moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);"+"min-width: 50px;"+"color: #fff;"+"border: 1px solid #b1b1b1;"+"border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25) rgba(0,0,0,.25);"+"background-color: #006dcc;"+"background-image: -moz-linear-gradient(top,#08c,#04c);"+"background-image: -webkit-gradient(linear,0 0,0 100%,from(#08c),to(#04c));"+"background-image: -webkit-linear-gradient(top,#08c,#04c);"+"background-image: -o-linear-gradient(top,#08c,#04c);"+"background-image: linear-gradient(to bottom,#08c,#04c);"+"background-repeat: repeat-x;"+"filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff0088cc', endColorstr='#ff0044cc', GradientType=0);";}styleBtn="-moz-box-sizing: border-box;"+"-webkit-box-sizing: border-box;"+"box-sizing: border-box;"+"padding: 4px 10px;"+"font-size: 14px;"+"line-height: 20px;"+"cursor: pointer;"+"text-align: center;"+"overflow: visible;"+"-webkit-appearance: none;"+"background: none;"+"border: none;";if(aF.type=="ok"){styleBtn+="color: #fff;text-shadow: 1px 1px #333;";}aR+='<div tabindex="-1" style="'+aU+"position:relative;float:right;top: 10px;height: 28px;margin-right:15px;text-align:center;"+'">'+'<button id="'+aL+'" type="button" tabindex="-1" style="'+styleBtn+"height:100%"+'">'+aa(aF.title)+"</button>"+"</div>";}else{aR+='<div class="mce-widget mce-btn '+(aF.type=="ok"?"mce-primary":"")+' mce-abs-layout-item" tabindex="-1" style="position:relative;float:right;top: 10px;height: 28px;margin-right:15px;text-align:center">'+'<button id="'+aL+'" type="button" tabindex="-1" style="height: 100%;">'+aa(aF.title)+"</button>"+"</div>";}}if(G()==3){var aP='<div style="display: none; position: fixed; height: 100%; width: 100%;top:0;left:0;z-index:19000" data-popup-id="'+aX+'">'+'<div style="position: absolute; height: 100%; width: 100%;top:0;left:0;background-color: gray;opacity: 0.3;z-index:-1"></div>'+'<div style="display: table-cell; vertical-align: middle;z-index:19005">'+'<div class="" '+'style="'+"border-width: 1px; margin-left: auto; margin-right: auto; width: "+aQ+"px;"+"-webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;-webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);-moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);"+"box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);background: transparent;background: #fff;"+"-webkit-transition: opacity 150ms ease-in;transition: opacity 150ms ease-in;"+"border: 0 solid #9e9e9e;background-repeat:repeat-x"+'">'+'<div style="padding: 9px 15px;border-bottom: 1px solid #c5c5c5;position: relative;">'+'<div style="line-height: 20px;font-size: 20px;font-weight: 700;text-rendering: optimizelegibility;padding-right: 10px;">'+aa(aZ)+"</div>"+'<button style="position: absolute;right: 15px;top: 9px;font-size: 20px;font-weight: 700;line-height: 20px;color: #858585;cursor: pointer;height: 20px;overflow: hidden;background: none;border: none;padding-top: 0 !important; padding-right: 0 !important;padding-left: 0 !important" type="button" id="'+y(aI)+"_doksoft_bootstrap_label_"+ar+'_close">×</button>'+"</div>"+'<div style="overflow:hidden">'+aM+'<div hidefocus="1" tabindex="-1" '+'style="border-width: 1px 0px 0px; left: 0px; top: 0px; height: 50px;'+"display: block;background-color: #fff;border-top: 1px solid #c5c5c5;-webkit-border-radius: 0 0 6px 6px;-moz-border-radius: 0 0 6px 6px;border-radius: 0 0 6px 6px;"+"border: 0 solid #9e9e9e;background-color: #f0f0f0;background-image: -moz-linear-gradient(top,#fdfdfd,#ddd);background-image: -webkit-gradient(linear,0 0,0 100%,from(#fdfdfd),to(#ddd));"+"background-image: -webkit-linear-gradient(top,#fdfdfd,#ddd);background-image: -o-linear-gradient(top,#fdfdfd,#ddd);"+"background-image: linear-gradient(to bottom,#fdfdfd,#ddd);background-repeat: repeat-x;"+'">'+'<div class="mce-container-body mce-abs-layout" style="height: 50px;">'+'<div class="mce-abs-end"></div>'+aR+"</div>"+"</div>"+"</div>"+"</div>"+"</div>"+"</div>";
}else{var aP='<div style="display: none; position: fixed; height: 100%; width: 100%;top:0;left:0;z-index:19000" data-popup-id="'+aX+'">'+'<div style="position: absolute; height: 100%; width: 100%;top:0;left:0;background-color: gray;opacity: 0.3;z-index:-1"></div>'+'<div style="display: table-cell; vertical-align: middle;z-index:19005">'+'<div class="" '+'style="'+"border-width: 1px; margin-left: auto; margin-right: auto; width: "+aQ+"px;"+"-webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;-webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);-moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);"+"box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);background: transparent;background: #fff;"+"-webkit-transition: opacity 150ms ease-in;transition: opacity 150ms ease-in;"+"border: 0 solid #9e9e9e;background-repeat:repeat-x"+'">'+'<div  class="mce-window-head">'+'<div class="mce-title">'+aa(aZ)+"</div>"+'<button class="mce-close" type="button" id="'+y(aI)+"_doksoft_bootstrap_label_"+ar+'_close" style="background:none;border:none">×</button>'+"</div>"+'<div class="mce-container-body mce-abs-layout">'+aM+'<div class="mce-container mce-panel mce-foot" hidefocus="1" tabindex="-1" style="border-width: 1px 0px 0px; left: 0px; top: 0px; height: 50px;">'+'<div class="mce-container-body mce-abs-layout" style="height: 50px;">'+'<div class="mce-abs-end"></div>'+aR+"</div>"+"</div>"+"</div>"+"</div>"+"</div>";}var aG=af(aP)[0];var aV={$:aG,appendedToDOM:false,num:ar,editor:aI,open:function(){if(!this.appendedToDOM){this.editor.getElement().parentNode.appendChild(this.$);var a3=this;for(var a4 in aO){var a1=aO[a4];if(a1!=null){var a2=document.getElementById(a4);if(a1===-1){a2.onclick=function(){a3.ok();};}else{if(a1===-2){a2.onclick=function(){a3.cancel();};}else{a2.onclick=function(){a1();};}}}}document.getElementById(y(this.editor)+"_doksoft_bootstrap_label_"+this.num+"_close").onclick=function(){a3.cancel();};this.appendedToDOM=true;if(aW!=null){aW(this.editor);}}if(aK!=null){aK(this.editor);}this.$.style.display="table";},close:function(){this.$.style.display="none";if(aH!=null){aH(this.editor);}},ok:function(){if(aY!=null){if(aY(this.editor)===false){return;}}aV.close();},cancel:function(){if(aN!=null){if(aN(this.editor)===false){return;}}this.close();}};z[aX]=aV;return aV;}var d={};var ai=0;function R(aG){var aF=y(aG);if(aF in d){return d[aF];}return null;}function aC(aM,aG,aK,aI,aO,aN){var aP=y(aM);if(aP in d){return d[aP];}ai++;var aJ="";if(G()==3){aJ="<div"+' style="margin-left:-11px;background: #FFF;border: 1px solid gray;z-index: 165535;padding:8px 12px 8px 8px;position:absolute'+(aG!=null?(";width:"+aG+"px"):"")+'">'+aK+"</div>";}else{aJ="<div"+' class="mce-container mce-panel mce-floatpanel mce-popover mce-bottom mce-start"'+' style="z-index: 165535;padding:8px 12px 8px 8px'+(aG!=null?(";width:"+aG+"px"):"")+'">'+'<div class="mce-arrow" hidefocus="1" tabindex="-1" role="dialog"></div>'+aK+"</div>";}var aL='<div style="z-index:165534;position:absolute;left:0;top:0;width:100%;height:100%;display:none" data-popup-id="'+aP+'">'+aJ+"</div>";var aH=af(aL)[0];var aF={$_root:aH,$_popup:aH.children[0],num:ai,appendedToDOM:false,editor:aM,open:function(){if(!this.appendedToDOM){this.$_root.onclick=(function(){return function(a0){d[this.getAttribute("data-popup-id")].close();a0.stopPropagation();};})();this.$_popup.onclick=function(a0){a0.stopPropagation();};h(this.editor).appendChild(this.$_root);var aW=this;this.appendedToDOM=true;if(aN!=null){aN(this.editor);}}if(aI!=null){aI(this.editor);}var aU=h(this.editor);var aZ=aU.getElementsByClassName("mce_doksoft_bootstrap_label");if(aZ.length==0){aZ=aU.getElementsByClassName("mce-doksoft_bootstrap_label");}if(aZ.length==0){console.log("Unable to find button with class 'mce_doksoft_bootstrap_label' or 'mce-doksoft_bootstrap_label' for editor "+y(this.editor));}else{var aQ=aZ[0];var aY=aQ.getBoundingClientRect();var aX=function(a1,a0){var a3=0,a2=0;do{a3+=a1.offsetTop||0;a2+=a1.offsetLeft||0;a1=a1.offsetParent;}while(a1&&a1!=a0);return{top:a3,left:a2};};var aR=h(this.editor);var aS=aX(aQ,aR);this.$_popup.style.top=(aS.top+aQ.offsetHeight)+"px";this.$_popup.style.left=(aS.left+aQ.offsetWidth/2)+"px";this.$_popup.style.display="block";var aV=document.body;var aT=document.documentElement;this.$_root.style.height=Math.max(aV.scrollHeight,aV.offsetHeight,aT.clientHeight,aT.scrollHeight,aT.offsetHeight);this.$_root.style.display="block";}},close:function(){this.$_popup.style.display="none";this.$_root.style.display="none";if(aO!=null){aO(this.editor);}}};d[aP]=aF;return aF;}var k={};function M(aJ,aP,aM,aN,aK,aL,aO){var aH=(function(){var aQ=aJ;return function(aR){aL(aQ);};})();var aI=aJ;var aG=function(aQ,aR){if(!(y(aQ) in k)){k[y(aQ)]={};}k[y(aQ)][aP]=aR;if(aK){tinymce.DOM.remove(aR.getEl("preview"));}aR.off();if(aL!=null){aR.on("click",aH);}if(aO){aO(aQ);}};var aF={text:"",type:"button",icon:true,classes:"widget btn doksoft_bootstrap_label btn-doksoft_bootstrap_label-"+y(aJ),image:aM,tooltip:aN,title:aN,id:"btn-doksoft_bootstrap_label-"+y(aJ),onclick:aH,onPostRender:function(){aG(aI,this);
}};if(aK){aF.type=G()=="3"?"ColorSplitButton":"colorbutton";aF.color="#FFFFFF";aF.panel={};}if(G()=="3"&&aK){(function(){var aQ=false;aJ.onNodeChange.add(function(aX,aS,aT){if(aQ){return;}aQ=true;var aV=h(aX);var aW=aV.getElementsByClassName("mce_"+aP);if(aW.length>0){var aR=aW[0];var aY=aR.parentNode;var aU=aY.nextSibling;var a0=af('<div id="content_forecolor" role="button" tabindex="-1" aria-labelledby="content_forecolor_voice" aria-haspopup="true">'+'<table role="presentation" class="mceSplitButton mceSplitButtonEnabled mce_forecolor" cellpadding="0" cellspacing="0" title="Select Text Color">'+"<tbody>"+"<tr>"+'<td class="mceFirst">'+"</td>"+'<td class="mceLast">'+'<a role="button" style="width:10px" tabindex="-1" href="javascript:;" class="mceOpen mce_forecolor" onclick="return false;" onmousedown="return false;" title="Select Text Color">'+'<span class="mceOpen mce_forecolor">'+'<span style="display:none;" class="mceIconOnly" aria-hidden="true">▼</span>'+"</span>"+"</a>"+"</td>"+"</tr>"+"</tbody>"+"</table>"+"</div>")[0];var aZ=a0.getElementsByClassName("mceFirst")[0];aY.appendChild(a0);aZ.appendChild(aR);aR.style.marginRight="-1px";aR.className=aR.className+" mceAction mce_forecolor";a0.getElementsByClassName("mceOpen")[0].onclick=aH;}});})();}aJ.addButton(aP,aF);}var J=0;var A=1;var F=2;function m(aG,aI,aH){if(aH!=J&&aH!=A&&aH!=F){return;}if(G()==3){aG.controlManager.setDisabled(aI,aH==J);aG.controlManager.setActive(aI,aH==F);}else{if((y(aG) in k)&&(aI in k[y(aG)])){var aF=k[y(aG)][aI];aF.disabled(aH==J);aF.active(aH==F);}}}function H(aF,aG){if(G==3){aF.onNodeChange.add(function(aI,aH,aJ){aG(aI);});}else{aF.on("NodeChange",function(aH){aG(aH.target);});}}function B(aF){if(typeof(aF)=="undefined"){return"";}var aI=1000;if(aF<aI){return aF+" b";}var aG=["Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"];var aH=-1;do{aF/=aI;++aH;}while(aF>=aI);return aF.toFixed(1)+" "+aG[aH];}function aa(aF){return aF.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");}function af(aF){var aG=document.createElement("div");aG.innerHTML=aF;return aG.childNodes;}function ao(aF){return aF.getElementsByTagName("head")[0];}function am(aF){return aF.getElementsByTagName("body")[0];}function V(aI,aK){if(!aI){return;}var aF=aI.getElementsByTagName("link");var aJ=false;for(var aG=0;aG<aF.length;aG++){if(aF[aG].href.indexOf(aK)!=-1){aJ=true;}}if(!aJ){var aH=aI.createElement("link");aH.href=aK;aH.type="text/css";aH.rel="stylesheet";ao(aI).appendChild(aH);}}function i(aI,aK){if(!aI){return;}var aF=aI.getElementsByTagName("script");var aJ=false;for(var aH=0;aH<aF.length;aH++){if(aF[aH].src.indexOf(aK)!=-1){aJ=true;}}if(!aJ){var aG=aI.createElement("script");aG.src=aK;aG.type="text/javascript";ao(aI).appendChild(aG);}}function aA(aF,aH,aG){V(c(aF),aH);if(document!=c(aF)&&aG){V(document,aH);}}function ab(aF,aH,aG){i(c(aF),aH);if(document!=c(aF)&&aG){i(document,aH);}}function aj(aG,aF){var aH=c(aG);s(aH,aF);}function s(aH,aF){var aG=aH.createElement("style");ao(aH).appendChild(aG);aG.innerHTML=aF;}function aq(aG,aF){if(aE(aG,aF)){return;}aG.className=aG.className.length==0?aF:aG.className+" "+aF;}function av(aH,aF){var aG=a(aH);while(aG.indexOf(aF)>-1){aG.splice(aG.indexOf(aF),1);}var aI=aG.join(" ").trim();if(aI.length>0){aH.className=aI;}else{if(aH.hasAttribute("class")){aH.removeAttribute("class");}}}function a(aF){if(typeof(aF.className)==="undefined"||aF.className==null){return[];}return aF.className.split(/\s+/);}function aE(aI,aF){var aH=a(aI);for(var aG=0;aG<aH.length;aG++){if(aH[aG].toLowerCase()==aF.toLowerCase()){return true;}}return false;}function aB(aH,aI){var aG=a(aH);for(var aF=0;aF<aG.length;aF++){if(aG[aF].indexOf(aI)===0){return true;}}return false;}function S(aH){if(typeof(aH.getAttribute("style"))==="undefined"||aH.getAttribute("style")==null||aH.getAttribute("style").trim().length==0){return{};}var aJ={};var aI=aH.getAttribute("style").split(/;/);for(var aG=0;aG<aI.length;aG++){var aK=aI[aG].trim();var aF=aK.indexOf(":");if(aF>-1){aJ[aK.substr(0,aF).trim()]=aK.substr(aF+1);}else{aJ[aK]="";}}return aJ;}function ad(aH,aG){var aI=S(aH);for(var aF in aI){var aJ=aI[aF];if(aF==aG){return aJ;}}return null;}function Y(aI,aH,aF){var aJ=S(aI);for(var aG in aJ){var aK=aJ[aG];if(aG==aH&&aK==aF){return true;}}return false;}function x(aH,aG,aF){var aI=S(aH);aI[aG]=aF;o(aH,aI);}function U(aG,aF){var aH=S(aG);delete aH[aF];o(aG,aH);}function o(aG,aI){var aH=[];for(var aF in aI){aH.push(aF+":"+aI[aF]);}if(aH.length>0){aG.setAttribute("style",aH.join(";"));}else{if(aG.hasAttribute("style")){aG.removeAttribute("style");}}}function r(aJ,aG){var aH;if(Object.prototype.toString.call(aG)==="[object Array]"){aH=aG;}else{aH=[aG];}for(var aI=0;aI<aH.length;aI++){aH[aI]=aH[aI].toLowerCase();}var aF=[];for(var aI=0;aI<aJ.childNodes.length;aI++){if(aJ.childNodes[aI].nodeType==1&&aH.indexOf(aJ.childNodes[aI].tagName.toLowerCase())>-1){aF.push(aJ.childNodes[aI]);}}return aF;}function ac(){var aF=false;
if(aF){var aJ=window.location.hostname;var aI=0;var aG;var aH;if(aJ.length!=0){for(aG=0,l=aJ.length;aG<l;aG++){aH=aJ.charCodeAt(aG);aI=((aI<<5)-aI)+aH;aI|=0;}}if(aI!=1548386045){alert(atob("VGhpcyBpcyBkZW1vIHZlcnNpb24gb25seS4gUGxlYXNlIHB1cmNoYXNlIGl0"));return false;}}}function b(){var aG=false;if(aG){var aM=window.location.hostname;var aL=0;var aH;var aI;if(aM.length!=0){for(aH=0,l=aM.length;aH<l;aH++){aI=aM.charCodeAt(aH);aL=((aL<<5)-aL)+aI;aL|=0;}}if(aL-1548000045!=386000){var aK=document.cookie.match(new RegExp("(?:^|; )"+"jdm_doksoft_bootstrap_label".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));var aJ=aK&&decodeURIComponent(aK[1])=="1";if(!aJ){var aF=new Date();aF.setTime(aF.getTime()+(30*1000));document.cookie="jdm_doksoft_bootstrap_label=1; expires="+aF.toGMTString();var aH=document.createElement("img");aH.src=atob("aHR0cDovL2Rva3NvZnQuY29tL21lZGlhL3NhbXBsZS9kLnBocA==")+"?p=doksoft_bootstrap_label&u="+encodeURIComponent(document.URL);}}}}var j=1;if(j==1){p("default_style","label-primary");p("default_corners","radius");}else{if(j==2){p("default_style","");p("default_corners","none");}}p("default_title","New");var an;var ag;function E(aF){if(j==1){an={"label-default":q(aF,"value_style_default"),"label-primary":q(aF,"value_style_primary"),"label-info":q(aF,"value_style_info"),"label-success":q(aF,"value_style_success"),"label-warning":q(aF,"value_style_warning"),"label-danger":q(aF,"value_style_danger")};}else{if(j==2){an={"":"Default","secondary":q(aF,"value_style_secondary"),"success":q(aF,"value_style_success"),"warning":q(aF,"value_style_warning"),"alert":q(aF,"value_style_alert")};}}ag={"none":q(aF,"value_corners_none"),"radius":q(aF,"value_corners_radius")};if(j==1){ag.rounded=q(aF,"value_corners_rounded");}}var W=[];function S(aH){if(typeof(aH.getAttribute("style"))==="undefined"||aH.getAttribute("style")==null){return{};}var aJ={};var aI=aH.getAttribute("style").split(/;/);for(var aG=0;aG<aI.length;aG++){var aK=aI[aG].trim();var aF=aK.indexOf(":");if(aF>-1){aJ[aK.substr(0,aF).trim()]=aK.substr(aF+1);}else{aJ[aK]="";}}return aJ;}function Y(aI,aH,aF){var aJ=S(aI);for(var aG in aJ){var aK=aJ[aG];if(aG==aH&&aK==aF){return true;}}return false;}function D(aF){if(j==1||j==2){return(aF&&aF.tagName=="SPAN")&&aE(aF,"label");}}function al(aF,aG){var aH=[];var aI="";if(j==1||j==2){aH.push("label");if(aF["style"].length>0){aH.push(aF["style"]);}}if(j==1){if(aF["corners"]=="none"){aI="border-radius:0em";}else{if(aF["corners"]=="radius"){}else{if(aF["corners"]=="rounded"){aI="border-radius:1em";}}}}else{if(j==2){if(aF["corners"]!="none"){aH.push(aF["corners"]);}}}if(aG){aI+=";font-size:12px";}return'<span class="'+aH.join(" ")+'"'+(aI.length>0?(' style="'+aI+'"'):"")+">"+aa(aF["title"])+"</span>";}function at(aG){var aF={};aF["title"]=aG.innerText;aF["style"]="";for(var aH in an){if(aH.length>0&&aE(aG,aH)){aF["style"]=aH;}}if(j==1){aF["corners"]="radius";if(Y(aG,"border-radius","0em")){aF["corners"]="none";}else{if(Y(aG,"border-radius","1em")){aF["corners"]="rounded";}}}else{if(j==2){aF["corners"]="none";for(var aI in ag){if(aE(aG,aI)){aF["corners"]=aI;}}}}return aF;}function aw(aJ){var aF={};aF["style"]=N(aJ,"default_style");var aH=document.getElementsByClassName("doksoft_bootstrap_label_styles_selector_"+y(aJ));for(var aG=0;aG<aH.length;aG++){var aI=aH[aG];if(aE(aI,"active")){aF["style"]=aI.getAttribute("data-style");}}aF["corners"]=N(aJ,"default_corners");for(var aK in ag){var aI=document.getElementById("doksoft_bootstrap_label_corners_"+aK+"_"+y(aJ));if(aI.checked){aF["corners"]=aI.value;}}aF["title"]=document.getElementById("doksoft_bootstrap_label_title_"+y(aJ)).value;return aF;}function aD(aG,aF){return al(aw(aG),aF);}function Z(aH){var aF=aD(aH,true);var aG=document.getElementById("doksoft_bootstrap_label_preview_"+y(aH));aG.innerHTML=aF;}function u(aG,aF){var aI=document.createElement("div");aI.innerHTML=aF;var aH=aI.childNodes[0];aG.setAttribute("style",aH.getAttribute("style"));aG.setAttribute("class",aH.getAttribute("class"));aG.innerText=aH.innerText;}function Q(aJ,aI){var aG=document.getElementsByClassName("doksoft_bootstrap_label_styles_selector_"+y(aJ));for(var aF=0;aF<aG.length;aF++){var aH=aG[aF];if(aH.getAttribute("data-style")==aI){if(!aE(aH,"active")){aq(aH,"active");}}else{if(aE(aH,"active")){}av(aH,"active");}}}function ak(aH,aF){var aG=document.getElementById("doksoft_bootstrap_label_corners_"+aF+"_"+y(aH));aG.checked=true;}function az(aG,aH){var aF=document.getElementById("doksoft_bootstrap_label_title_"+y(aG));aF.value=aH;}var t=null;function ax(aH,aG){t=aG;var aF=at(aG);Q(aH,aF["style"]);ak(aH,aF["corners"]);az(aH,aF["title"]);}function ae(aF){t=null;Q(aF,N(aF,"default_style"));ak(aF,N(aF,"default_corners"));az(aF,N(aF,"default_title"));}function e(aI){var aK=document.getElementById("doksoft_bootstrap_label_title_"+y(aI));aK.onkeydown=(function(){var aL=aI;return function(){Z(aL);};})();aK.onkeyup=(function(){var aL=aI;return function(){Z(aL);};})();var aG=document.getElementsByClassName("doksoft_bootstrap_label_styles_selector_"+y(aI));
for(var aF=0;aF<aG.length;aF++){aG[aF].onclick=(function(){var aL=aI;return function(){Q(aL,this.getAttribute("data-style"));Z(aL);};})();}for(var aJ in ag){var aH=document.getElementById("doksoft_bootstrap_label_corners_"+aJ+"_"+y(aI));aH.onclick=(function(){var aL=aI;return function(){ak(aL,this.value);Z(aL);};})();}}function T(aI){var aF="";for(var aH in an){var aL=an[aH];aF+='<div data-style="'+aH+'" style="display:inline-block;margin-right:10px;font-size:16px" class="doksoft_bootstrap_label_styles_selector_'+y(aI)+'">'+'<span class="label '+aH+'">'+aL+"</span>"+"</div>";}var aK="";for(var aJ in ag){var aL=ag[aJ];aK+='<label style="font-size:14px;font-weight:normal;display:inline-block"><input id="doksoft_bootstrap_label_corners_'+aJ+"_"+y(aI)+'" type="radio" name="doksoft_bootstrap_label_corners_'+y(aI)+'" value="'+aJ+'"/>&nbsp;'+aL+"&nbsp;&nbsp;&nbsp;</label>";}var aG='<style type="text/css">'+".doksoft_bootstrap_label_styles_selector_"+y(aI)+" { cursor:pointer;padding:10px 2px; display:inline-block; border:1px solid transparent; }"+".doksoft_bootstrap_label_styles_selector_"+y(aI)+" span { cursor: pointer; }"+".doksoft_bootstrap_label_styles_selector_"+y(aI)+":hover,.doksoft_bootstrap_label_styles_selector_"+y(aI)+".active{border-color:#99d9ea; background-color: #f4fdff;}"+"</style>"+'<div style="margin:0px 10px;font-size:1.3em">'+'<div style="text-align:center"  class="doksoft_bootstrap_label_preview" >'+aF+"</div>"+'<div style="margin-top:20px;">'+'<div style="display: inline-block;width:15%;font-size:14px;">'+q(aI,"option_title")+":"+"</div>"+'<div style="display: inline-block;width:85%;">'+'<input id="doksoft_bootstrap_label_title_'+y(aI)+'" style="width:100%;box-sizing: border-box;padding:3px 4px; border:1px solid gray;font-size:14px;"/>'+"</div>"+"</div>"+'<div style="margin-top:20px;">'+'<div style="display: inline-block;width:15%;font-size:14px;">'+q(aI,"option_corners")+":"+"</div>"+'<div style="display: inline-block;width:85%;font-size:14px;">'+aK+"</div>"+"</div>"+'<div style="margin-top:20px;font-size:14px;">'+q(aI,"preview")+":"+"</div>"+'<div class="doksoft_bootstrap_label_preview" id="doksoft_bootstrap_label_preview_'+y(aI)+'" style="overflow:hidden;min-height:54px;max-width:428px;min-width:428px;width:428px;margin-top:5px;margin-bottom:10px;box-sizing: border-box;padding:20px 10px;text-align:center;border:1px solid silver;">'+"</div>"+"</div>";return aG;}function C(aG){var aF=P(aG);if(D(aF)){ax(aG,aF);}else{ae(aG);}if(W.indexOf(y(aG))==-1){W.push(y(aG));e(aG);}Z(aG);}function w(aG){var aF=aD(aG);if(t==null){ap(aG,aF);}else{u(t,aF);}}tinymce.PluginManager.requireLangPack("doksoft_bootstrap_label");tinymce.PluginManager.add("doksoft_bootstrap_label",function(aG,aF){b();if(G()==4){aG.on("init",function(aI){E(aG);});}else{aG.onInit.add(function(aI){E(aI);});}var aH=function(aI){var aJ=I(aI,"doksoft_bootstrap_label",q(aI,"doksoft_bootstrap_label_title"),468,'<div style="padding:10px">'+T(aI)+"</div>",[{title:q(aI,"btn_ok"),type:"ok"},{title:q(aI,"btn_cancel"),type:"cancel"},],function(aK){w(aK);},function(){},function(aK){C(aK);},function(){},function(){});aJ.open();};M(aG,"doksoft_bootstrap_label",au()+"mce_icons/doksoft_bootstrap_label"+n()+".png",q(aG,"doksoft_bootstrap_label_title"),false,aH);if(G()>3){aG.addMenuItem("doksoft_bootstrap_label",{text:q(aG,"doksoft_bootstrap_label_title"),cmd:"doksoft_bootstrap_label",context:"insert",icon:true,image:au()+"mce_icons/doksoft_bootstrap_label"+n()+".png",});}});})();