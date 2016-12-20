// Created by iWeb 3.0.4 local-build-20161206

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,122),url:'News_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'News_files/stroke_1.png'},{rect:new IWRect(2,-2,156,4),url:'News_files/stroke_2.png'},{rect:new IWRect(158,-2,4,4),url:'News_files/stroke_3.png'},{rect:new IWRect(158,2,4,122),url:'News_files/stroke_4.png'},{rect:new IWRect(158,124,4,5),url:'News_files/stroke_5.png'},{rect:new IWRect(2,124,156,5),url:'News_files/stroke_6.png'},{rect:new IWRect(-2,124,4,5),url:'News_files/stroke_7.png'}],new IWSize(160,127))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('News_files/NewsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
