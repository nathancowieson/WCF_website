// Created by iWeb 3.0.4 local-build-20161206

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,495),url:'Hogmanay_Ceilidh_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Hogmanay_Ceilidh_files/stroke_1.png'},{rect:new IWRect(2,-2,357,4),url:'Hogmanay_Ceilidh_files/stroke_2.png'},{rect:new IWRect(359,-2,5,4),url:'Hogmanay_Ceilidh_files/stroke_3.png'},{rect:new IWRect(359,2,5,495),url:'Hogmanay_Ceilidh_files/stroke_4.png'},{rect:new IWRect(359,497,5,4),url:'Hogmanay_Ceilidh_files/stroke_5.png'},{rect:new IWRect(2,497,357,4),url:'Hogmanay_Ceilidh_files/stroke_6.png'},{rect:new IWRect(-2,497,4,4),url:'Hogmanay_Ceilidh_files/stroke_7.png'}],new IWSize(361,499))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Hogmanay_Ceilidh_files/Hogmanay_CeilidhMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
