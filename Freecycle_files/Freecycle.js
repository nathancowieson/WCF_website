// Created by iWeb 3.0.4 local-build-20161206

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,56),url:'Freecycle_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Freecycle_files/stroke_1.png'},{rect:new IWRect(2,-2,116,4),url:'Freecycle_files/stroke_2.png'},{rect:new IWRect(118,-2,4,4),url:'Freecycle_files/stroke_3.png'},{rect:new IWRect(118,2,4,56),url:'Freecycle_files/stroke_4.png'},{rect:new IWRect(118,58,4,4),url:'Freecycle_files/stroke_5.png'},{rect:new IWRect(2,58,116,4),url:'Freecycle_files/stroke_6.png'},{rect:new IWRect(-2,58,4,4),url:'Freecycle_files/stroke_7.png'}],new IWSize(120,60)),stroke_1:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Freecycle_files/FreecycleMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id4');applyEffects()}
function onPageUnload()
{Widget.onunload();}
