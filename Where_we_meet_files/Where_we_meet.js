// Created by iWeb 3.0.4 local-build-20161206

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,307),url:'Where_we_meet_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Where_we_meet_files/stroke_1.png'},{rect:new IWRect(2,-2,307,4),url:'Where_we_meet_files/stroke_2.png'},{rect:new IWRect(309,-2,4,4),url:'Where_we_meet_files/stroke_3.png'},{rect:new IWRect(309,2,4,307),url:'Where_we_meet_files/stroke_4.png'},{rect:new IWRect(309,309,4,4),url:'Where_we_meet_files/stroke_5.png'},{rect:new IWRect(2,309,307,4),url:'Where_we_meet_files/stroke_6.png'},{rect:new IWRect(-2,309,4,4),url:'Where_we_meet_files/stroke_7.png'}],new IWSize(311,311))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Where_we_meet_files/Where_we_meetMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
