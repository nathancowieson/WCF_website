// Created by iWeb 3.0.4 local-build-20161213

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,143),url:'Elders_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Elders_files/stroke_1.png'},{rect:new IWRect(2,-2,100,4),url:'Elders_files/stroke_2.png'},{rect:new IWRect(102,-2,5,4),url:'Elders_files/stroke_3.png'},{rect:new IWRect(102,2,5,143),url:'Elders_files/stroke_4.png'},{rect:new IWRect(102,145,5,4),url:'Elders_files/stroke_5.png'},{rect:new IWRect(2,145,100,4),url:'Elders_files/stroke_6.png'},{rect:new IWRect(-2,145,4,4),url:'Elders_files/stroke_7.png'}],new IWSize(104,147))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Elders_files/EldersMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
