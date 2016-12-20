// Created by iWeb 3.0.4 local-build-20161206

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,121),url:'Mission_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Mission_files/stroke_1.png'},{rect:new IWRect(2,-2,296,4),url:'Mission_files/stroke_2.png'},{rect:new IWRect(298,-2,4,4),url:'Mission_files/stroke_3.png'},{rect:new IWRect(298,2,4,121),url:'Mission_files/stroke_4.png'},{rect:new IWRect(298,123,4,4),url:'Mission_files/stroke_5.png'},{rect:new IWRect(2,123,296,4),url:'Mission_files/stroke_6.png'},{rect:new IWRect(-2,123,4,4),url:'Mission_files/stroke_7.png'}],new IWSize(300,125))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Mission_files/MissionMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');detectBrowser();Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id6');applyEffects()}
function onPageUnload()
{Widget.onunload();}
