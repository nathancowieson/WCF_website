// Created by iWeb 3.0.4 local-build-20161206

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id5" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="211" height="16"><param name="src" value="../../../../Media/Sunday%2011%20August%202013.mp3" /><param name="endtime" value="01:05:31:7.3" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id5" type="video/quicktime" width="211" height="16"><param name="src" value="../../../../Media/Sunday%2011%20August%202013.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id5" type="video/quicktime" width="211" height="16" data="../../../../Media/Sunday%2011%20August%202013.mp3" endtime="01:05:31:7.3"><param name="src" value="../../../../Media/Sunday%2011%20August%202013.mp3"/><param name="endtime" value="01:05:31:7.3"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('11_Family_service_files/11_Family_serviceMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../../../../Media/transparent.gif');fixupIECSS3Opacity('id6');BlogFixupPreviousNext();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
