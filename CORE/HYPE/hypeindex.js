//Shows Project Information
function showProjectInfo(ProjectInfo){
 if(ProjectInfo===true){
  console.log("|   This Project Was Built By   |");
  console.log("|      Vincent Occhiogrosso     |");
 }else if(ProjectInfo===false){
  console.log("|       (C)2017 Kava Labs       |");
 }
}

//Variables
var FilePathInfo = [];
var SyncFilesList = ["CORE/HYPE/hypepkga.js","CORE/HYPE/hypepkgb.js","CORE/HYPE/hypepkgc.js","CORE/HYPE/hypepkgd.js"];

//This Is The Systems Inital Function
function intialSystemBoot(){
 showProjectInfo(false);
 if(checkRequirements()==true){
  //System Executes Below//
  FilePathInfo = getFilePathInfo(FilePathInfo);
  syncCoreFiles(SyncFilesList);
  syncJSONFiles(FilePathInfo)
  //System Executes Above//
 }else{
  console.log("Error: Requirements Not Met, Closing Program...");
  location.replace("http://www.google.com");
 }
}

//This Tests Requirements
function checkRequirements(){
 // Checkpoint A - jQuery
 if(jQueryInstalled == true){
  return true;
 }else{
  return false;
 }
 //Checkpoint B - TBD
}

//Builds A File Path For The syncCoreFiles Function
function getFilePathInfo(FilePathInfo){
 var RootFolder = "H22-MHacksNano";
 var loc = location.href;
 var dir = loc.substring(loc.lastIndexOf(RootFolder),loc.length);
 var fin = loc.substring(loc.lastIndexOf('/')+1,loc.length);
 var lay = dir.split("/").length-2;
 FilePathInfo.push(dir);
 FilePathInfo.push(Number(lay));
 FilePathInfo.push(fin);
 console.log(FilePathInfo);
 return FilePathInfo;
}

//Syncs Files And Runs The Main Script
function syncCoreFiles(SyncFilesList){
 // Currently Implemented Manually
 var a=document.createElement("link");
 a.rel="stylesheet";
 a.type="text/javascript";
 a.href="../../../CORE/HYPE/hypepkga.js";
 document.body.appendChild(a);
 var b=document.createElement("script");
 b.src="../../../CORE/HYPE/hypepkga.js";
 b.onload = function(){initalizeHypePkgA();}
 document.body.appendChild(b);

 var c=document.createElement("link");
 c.rel="stylesheet";
 c.type="text/javascript";
 c.href="../../../CORE/HYPE/hypepkgb.js";
 document.body.appendChild(c);
 var d=document.createElement("script");
 d.src="../../../CORE/HYPE/hypepkgb.js";
 d.onload = function(){initalizeHypePkgB(CustomSite);}
 document.body.appendChild(d);

 var e=document.createElement("link");
 e.rel="stylesheet";
 e.type="text/javascript";
 e.href="../../../CORE/HYPE/hypepkgc.js";
 document.body.appendChild(e);
 var f=document.createElement("script");
 f.src="../../../CORE/HYPE/hypepkgc.js";
 f.onload = function(){initalizeHypePkgC();}
 document.body.appendChild(f);

 var g=document.createElement("link");
 g.rel="stylesheet";
 g.type="text/javascript";
 g.href="../../../CORE/HYPE/hypepkgd.js";
 document.body.appendChild(g);
 var h=document.createElement("script");
 h.src="../../../CORE/HYPE/hypepkgd.js";
 h.onload = function(){initalizeHypePkgD();}
 document.body.appendChild(h);
}

function syncJSONFiles(FilePathInfo){
 var i=document.createElement("link");
 i.rel="stylesheet";
 i.type="text/javascript";
 i.href="Home.json";
 document.body.appendChild(i);
 var j=document.createElement("script");
 j.src="Home.json";
 j.onload = function(){initalizeHypePkgD();}
 document.body.appendChild(j);
}
