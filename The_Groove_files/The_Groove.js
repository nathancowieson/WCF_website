// Created by iWeb 3.0.4 local-build-20161206

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,196),url:'The_Groove_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'The_Groove_files/stroke_1.png'},{rect:new IWRect(2,-2,196,4),url:'The_Groove_files/stroke_2.png'},{rect:new IWRect(198,-2,4,4),url:'The_Groove_files/stroke_3.png'},{rect:new IWRect(198,2,4,196),url:'The_Groove_files/stroke_4.png'},{rect:new IWRect(198,198,4,4),url:'The_Groove_files/stroke_5.png'},{rect:new IWRect(2,198,196,4),url:'The_Groove_files/stroke_6.png'},{rect:new IWRect(-2,198,4,4),url:'The_Groove_files/stroke_7.png'}],new IWSize(200,200))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('The_Groove_files/The_GrooveMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
