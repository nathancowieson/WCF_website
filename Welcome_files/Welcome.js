// Created by iWeb 3.0.4 local-build-20161218

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,250),url:'Welcome_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(2,-2,497,4),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(499,-2,5,4),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(499,2,5,250),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(499,252,5,4),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(2,252,497,4),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-2,252,4,4),url:'Welcome_files/stroke_7.png'}],new IWSize(501,254)),stroke_1:new IWStrokeParts([{rect:new IWRect(-2,2,4,28),url:'Welcome_files/stroke_8.png'},{rect:new IWRect(-2,-2,4,4),url:'Welcome_files/stroke_9.png'},{rect:new IWRect(2,-2,79,4),url:'Welcome_files/stroke_10.png'},{rect:new IWRect(81,-2,5,4),url:'Welcome_files/stroke_11.png'},{rect:new IWRect(81,2,5,28),url:'Welcome_files/stroke_12.png'},{rect:new IWRect(81,30,5,4),url:'Welcome_files/stroke_13.png'},{rect:new IWRect(2,30,79,4),url:'Welcome_files/stroke_14.png'},{rect:new IWRect(-2,30,4,4),url:'Welcome_files/stroke_15.png'}],new IWSize(83,32))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
