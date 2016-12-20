// Created by iWeb 3.0.4 local-build-20161206

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,121),url:'Small_groups_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Small_groups_files/stroke_1.png'},{rect:new IWRect(2,-2,171,4),url:'Small_groups_files/stroke_2.png'},{rect:new IWRect(173,-2,5,4),url:'Small_groups_files/stroke_3.png'},{rect:new IWRect(173,2,5,121),url:'Small_groups_files/stroke_4.png'},{rect:new IWRect(173,123,5,4),url:'Small_groups_files/stroke_5.png'},{rect:new IWRect(2,123,171,4),url:'Small_groups_files/stroke_6.png'},{rect:new IWRect(-2,123,4,4),url:'Small_groups_files/stroke_7.png'}],new IWSize(175,125))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Small_groups_files/Small_groupsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
