// Created by iWeb 3.0.4 local-build-20161206

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,220),url:'WCF_Nativity_2013_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'WCF_Nativity_2013_files/stroke_1.png'},{rect:new IWRect(2,-2,296,4),url:'WCF_Nativity_2013_files/stroke_2.png'},{rect:new IWRect(298,-2,4,4),url:'WCF_Nativity_2013_files/stroke_3.png'},{rect:new IWRect(298,2,4,220),url:'WCF_Nativity_2013_files/stroke_4.png'},{rect:new IWRect(298,222,4,5),url:'WCF_Nativity_2013_files/stroke_5.png'},{rect:new IWRect(2,222,296,5),url:'WCF_Nativity_2013_files/stroke_6.png'},{rect:new IWRect(-2,222,4,5),url:'WCF_Nativity_2013_files/stroke_7.png'}],new IWSize(300,224))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('WCF_Nativity_2013_files/WCF_Nativity_2013Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id2');applyEffects()}
function onPageUnload()
{Widget.onunload();}
