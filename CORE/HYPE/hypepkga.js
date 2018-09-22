//Package A, The Bones

function initalizeHypePkgA(){
 console.log("|A| |");
 //
 startHTMLBuild(MasterSettings);
 //
 console.log("| |A|");
 return CustomSite;
}

//////////////////////////////////////////////////////////////////////////////
/////////////////// Document Begins To Structure Below ///////////////////////
//////////////////////////////////////////////////////////////////////////////

var MasterSettings=[0];           
    
//Builds Each Layer
function startHTMLBuild(MasterSettings){
 if(MasterSettings[0]===0){ 
  buildCustom();
 }else if(MasterSettings[0]===1){
  buildPreset(MasterSettings[0]); //Not Made Yet
 }else if(MasterSetting[0]===2){
  buildPreset(MasterSettings[0]); //Not Made Yet
 }else if(MasterSettings[0]===3){
  buildPreset(MasterSettings[0]); //Not Made Yet
 }
 return;
}

var CustomSite = ["1W0","3H1","2H1","2V1","1H3"];     
var NavBar = true;

function buildCustom(){
 buildScreens(CustomSite,NavBar);
 buildSections(CustomSite);
 return;
}

function buildScreens(CustomSite,NavBar){
 for(var a=0;a<=CustomSite.length-1;a++){
  var b=document.createElement("div");
  b.id=("Screen"+a);
  document.body.appendChild(b);
  if(a===0 && NavBar == true){
   var c=document.createElement("div");
   c.id=("NavBar");
   b.appendChild(c); 
  }
 }
 return;
}

function buildSections(CustomSite){
 var current=0;
 for(var a=0;a<CustomSite.length;a++){
  var b=Number(CustomSite[a].substring(0,1));
  var c=Number(CustomSite[a].substring(2,3));
  var max=b+c;
  for(var d=current;d<max+current;d++){
   var e=document.createElement("div");
   e.id=("Section"+d);
   e.className=("Sections"+a);
   document.getElementById(("Screen")+[a]).appendChild(e);
  }
  current+=max;
 }
 return;
}
