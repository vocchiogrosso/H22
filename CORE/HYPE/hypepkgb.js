//Package B, The skin

function initalizeHypePkgB(CustomSite){
 console.log("|B| |");
 var Dimensions = getScreenSettings();
 setScreenSettings(Dimensions);
 positionScreens(Dimensions);
 setScreenColorScheme();
 makeNavBar(Dimensions);

 console.log("| |B|");
 return;
}

var Dimensions = ["N/A"];

//Gets Users Screen Settings
function getScreenSettings(){
 var a = [];
 a.push("N/A");
 a.push($(window).height()); 
 a.push($(window).width());
 a.push((a[2]/a[1]));
 return a;
}

//Sets Users Screen Settings
function setScreenSettings(Dimensions){
 //General Screen Settings For Standard Devices
   
   //To Do In Full

 //General Screen Settings For Non Standard Devices    
 if(Dimensions[3]<=1){Dimensions[0] = "Mobile";}
 if(Dimensions[3]>1){Dimensions[0] = "Desktop"}
 if(Dimensions[3]>=3){Dimensions[0] = "Widescreen";   }
 if(Dimensions[3]>=5.25){Dimensions[0] = "Unsupported";}
 console.log(Dimensions);
 return;
} 

function positionScreens(Dimensions){
 var PositionHeight=0;
 for(var a=0;a<=CustomSite.length-1;a++){
  $("#Screen"+a).css("position","absolute");
  $("#Screen"+a).css("height",(Dimensions[1]+"px"));
  $("#Screen"+a).css("width",(Dimensions[2]+"px"));
  $("#Screen"+a).css("top",((PositionHeight)+"px"));
  $("#Screen"+a).css("left","0px");
  PositionHeight+=Dimensions[1];   
 }
 return;
}

function setScreenColorScheme(){
 var scheme = ["white","yellow","green","blue","lightgray"]; //*Reverse*/
 for(var a=0;a<=CustomSite.length;a++){
   var choice = scheme.pop(); 
   $("#Screen"+a).css("backgroundColor",(choice)); 
   $("#Screen"+a).css("borderTop","1px solid black");
 }    
 return;
}

function makeNavBar(Dimensions){
 $("#NavBar").css("position","absolute");
 $("#NavBar").css("height",((Dimensions[1]/6)+"px"));
 $("#NavBar").css("width",(Dimensions[2]+"px"));
 $("#NavBar").css("top","0px");
 $("#NavBar").css("left","0px");
 $("#NavBar").css("zindex","1");
 $("#NavBar").css("backgroundColor","#3E94D1"); 
 return;
}

//No Working
function setSections(Dimensions){
$("#SectionOne").css((Dimensions[1]/6),);
}

function tempFunction(){

 return;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Managing Sections - Max 99 Sections
var SectionNum = [6,1,1,0];
function setSectionNumbers(){
  SectionNum[3]=0;
  //Header
 if(SectionNum[1]>1){
  console.log("To Many Headers");
 }else if(SectionNum[1]==1){
  $("#Header").css("backgroundColor","white");
  $("#Header").css("border-bottom","1px solid black");
  $("#Header").css("height",(ScreenScale[1]+"px"));
  $("#Header").css("width",(ScreenScale[2]+"px"));
  $("#Header").css("position","absolute");
  $("#Header").css("left","0px");
  $("#Header").css("top",((SectionNum[3])+"px"));
  $("#Header").css("z-index",(SectionNum[1]+1).toString());
  SectionNum[3] = SectionNum[3] + ScreenScale[1];
 }
 for(var x=0;x<SectionNum[0];x++){
  $(("#Section"+x)).css("backgroundColor",colorScheme(x));
  $(("#Section"+x)).css("borderBottom","1px solid black");
  $(("#Section"+x)).css("height",(ScreenScale[1]+"px"));
  $(("#Section"+x)).css("width",(ScreenScale[2]+"px"));
  $(("#Section"+x)).css("position","absolute");
  $(("#Section"+x)).css("left","0px");
  $(("#Section"+x)).css("text-align","center");
  $(("#Section"+x)).css("top",((SectionNum[3])+"px"));
  $(("#Section"+x)).css("z-index",(SectionNum[1]-x).toString());
  SectionNum[3] = SectionNum[3] + ScreenScale[1];
 }
 //Footer
 if(SectionNum[2]>1){
  console.log("To Many Footers");
 }else if(SectionNum[1]==1){
  $("#Footer").css("backgroundColor","lightgray");
  $("#Footer").css("borderTop","1px solid black");
  $("#Footer").css("height",(ScreenScale[1]+"px"));
  $("#Footer").css("width",(ScreenScale[2]+"px"));
  $("#Footer").css("position","absolute");
  $("#Footer").css("left","0px");
  $("#Footer").css("top",((SectionNum[3])+"px"));
  $("#Footer").css("z-index",(SectionNum[1]-x).toString());
  SectionNum[3] = SectionNum[3] + ScreenScale[1];
 }
}

function colorScheme(x){
 if(x%2!=0){
  return "#9c9dab";
 }else{
  return "#0059b3";
 }
}

var NavBar=[0,0];
function navbarBuild(){
if(NavBar[0]==0){
  $("#NavBar").css("backgroundColor","purple");
  $("#NavBar").css("borderTop","1px solid black");
  $("#NavBar").css("height",(((ScreenScale[1]/5)*1)+"px"));
  $("#NavBar").css("width",(ScreenScale[2]+"px"));
  $("#NavBar").css("left","0px");
  $("#NavBar").css("top","0px");
  getNavBarPosition();
}
}

function getNavBarPosition(){
  if(NavBar[1]==0){
    $("#NavBar").css("position","absolute");
  }else if(NavBar[1]==1){
    $("#NavBar").css("position","fixed");
  }else if(NavBar[1]==2){
    $("#NavBar").css("position","relative");
  }
}

function setData(){
  $("#Test1").css("position","relative");
  $("#Test1").css("top",((ScreenScale[1]/5)*2.5));
  $("#Test1").css("text-align","center");
}