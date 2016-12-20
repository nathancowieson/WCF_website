// Created by iWeb 3.0.4 local-build-20161206

function createMediaStream_id3()
{return IWCreatePhotocast("http://www.wantagechristianfellowship.org.uk/WCF/Galleries/Pages/Bonfire_2013_files/rss.xml",true);}
function initializeMediaStream_id3()
{createMediaStream_id3().load('http://www.wantagechristianfellowship.org.uk/WCF/Galleries/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id3',{pageIndex:0}));});}
function layoutMediaGrid_id3(range)
{createMediaStream_id3().load('http://www.wantagechristianfellowship.org.uk/WCF/Galleries/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id3',new IWPhotoGridLayout(2,new IWSize(273,273),new IWSize(273,0),new IWSize(328,288),27,27,0,new IWSize(26,26)),new IWPhotoFrame([IWCreateImage('Bonfire_2013_files/Hardcover_bevel_01.png'),IWCreateImage('Bonfire_2013_files/Hardcover_bevel_02.png'),IWCreateImage('Bonfire_2013_files/Hardcover_bevel_03.png'),IWCreateImage('Bonfire_2013_files/Hardcover_bevel_06.png'),IWCreateImage('Bonfire_2013_files/Hardcover_bevel_09.png'),IWCreateImage('Bonfire_2013_files/Hardcover_bevel_08.png'),IWCreateImage('Bonfire_2013_files/Hardcover_bevel_07.png'),IWCreateImage('Bonfire_2013_files/Hardcover_bevel_04.png')],null,0,0.750000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,17.000000,403.000000,295.000000,403.000000,295.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:0,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id3(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id3(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id3(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Bonfire_2013_files/Bonfire_2013Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');NotificationCenter.addObserver(null,relayoutMediaGrid_id3,'RangeChanged','id3')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../../Media/transparent.gif');fixupIECSS3Opacity('id4');initializeMediaStream_id3()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
