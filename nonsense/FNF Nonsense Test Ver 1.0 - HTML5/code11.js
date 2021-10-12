gdjs.TankmanS22Code = {};
gdjs.TankmanS22Code.GDTankMan3Objects1= [];
gdjs.TankmanS22Code.GDTankMan3Objects2= [];
gdjs.TankmanS22Code.GDTankMan4Objects1= [];
gdjs.TankmanS22Code.GDTankMan4Objects2= [];
gdjs.TankmanS22Code.GDTankMan5Objects1= [];
gdjs.TankmanS22Code.GDTankMan5Objects2= [];
gdjs.TankmanS22Code.GDTankMan2Objects1= [];
gdjs.TankmanS22Code.GDTankMan2Objects2= [];
gdjs.TankmanS22Code.GDTankManObjects1= [];
gdjs.TankmanS22Code.GDTankManObjects2= [];
gdjs.TankmanS22Code.GDDPadBottomObjects1= [];
gdjs.TankmanS22Code.GDDPadBottomObjects2= [];
gdjs.TankmanS22Code.GDDPadRightObjects1= [];
gdjs.TankmanS22Code.GDDPadRightObjects2= [];
gdjs.TankmanS22Code.GDDPadLeftObjects1= [];
gdjs.TankmanS22Code.GDDPadLeftObjects2= [];
gdjs.TankmanS22Code.GDDPadUpObjects1= [];
gdjs.TankmanS22Code.GDDPadUpObjects2= [];
gdjs.TankmanS22Code.GDAButtonObjects1= [];
gdjs.TankmanS22Code.GDAButtonObjects2= [];
gdjs.TankmanS22Code.GDBButtonObjects1= [];
gdjs.TankmanS22Code.GDBButtonObjects2= [];
gdjs.TankmanS22Code.GDTCTextObjects1= [];
gdjs.TankmanS22Code.GDTCTextObjects2= [];
gdjs.TankmanS22Code.GDStarRoundButtonObjects1= [];
gdjs.TankmanS22Code.GDStarRoundButtonObjects2= [];
gdjs.TankmanS22Code.GDMouseObjects1= [];
gdjs.TankmanS22Code.GDMouseObjects2= [];
gdjs.TankmanS22Code.GDNewObjectObjects1= [];
gdjs.TankmanS22Code.GDNewObjectObjects2= [];
gdjs.TankmanS22Code.GDTestmanObjects1= [];
gdjs.TankmanS22Code.GDTestmanObjects2= [];
gdjs.TankmanS22Code.GDIconObjects1= [];
gdjs.TankmanS22Code.GDIconObjects2= [];
gdjs.TankmanS22Code.GDBackgroundObjects1= [];
gdjs.TankmanS22Code.GDBackgroundObjects2= [];
gdjs.TankmanS22Code.GDSquareJoystickObjects1= [];
gdjs.TankmanS22Code.GDSquareJoystickObjects2= [];
gdjs.TankmanS22Code.GDIconMObjects1= [];
gdjs.TankmanS22Code.GDIconMObjects2= [];
gdjs.TankmanS22Code.GDTrickShakeObjects1= [];
gdjs.TankmanS22Code.GDTrickShakeObjects2= [];
gdjs.TankmanS22Code.GDWhiteboxObjects1= [];
gdjs.TankmanS22Code.GDWhiteboxObjects2= [];

gdjs.TankmanS22Code.conditionTrue_0 = {val:false};
gdjs.TankmanS22Code.condition0IsTrue_0 = {val:false};
gdjs.TankmanS22Code.condition1IsTrue_0 = {val:false};
gdjs.TankmanS22Code.condition2IsTrue_0 = {val:false};


gdjs.TankmanS22Code.eventsList0 = function(runtimeScene) {

{



}


};gdjs.TankmanS22Code.mapOfGDgdjs_46TankmanS22Code_46GDIconMObjects1Objects = Hashtable.newFrom({"IconM": gdjs.TankmanS22Code.GDIconMObjects1});gdjs.TankmanS22Code.eventsList1 = function(runtimeScene) {

{



}


{



}


{


gdjs.TankmanS22Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS22Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TankmanS22Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Whitebox"), gdjs.TankmanS22Code.GDWhiteboxObjects1);
{for(var i = 0, len = gdjs.TankmanS22Code.GDWhiteboxObjects1.length ;i < len;++i) {
    gdjs.TankmanS22Code.GDWhiteboxObjects1[i].getBehavior("Tween").addObjectOpacityTween("2", 0, "linear", 1500, false);
}
}}

}


{


gdjs.TankmanS22Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS22Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.TankmanS22Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TankmanS22Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("IconM"), gdjs.TankmanS22Code.GDIconMObjects1);

gdjs.TankmanS22Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS22Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS22Code.mapOfGDgdjs_46TankmanS22Code_46GDIconMObjects1Objects, runtimeScene, true, false);
}if (gdjs.TankmanS22Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TankmanS", false);
}}

}


{


gdjs.TankmanS22Code.condition0IsTrue_0.val = false;
gdjs.TankmanS22Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS22Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.TankmanS22Code.condition0IsTrue_0.val ) {
{
gdjs.TankmanS22Code.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}}
if (gdjs.TankmanS22Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{



}


{


gdjs.TankmanS22Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS22Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TankmanS22Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "voices\\Honkers.mp3", 21, true, 80, 1);
}}

}


};

gdjs.TankmanS22Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TankmanS22Code.GDTankMan3Objects1.length = 0;
gdjs.TankmanS22Code.GDTankMan3Objects2.length = 0;
gdjs.TankmanS22Code.GDTankMan4Objects1.length = 0;
gdjs.TankmanS22Code.GDTankMan4Objects2.length = 0;
gdjs.TankmanS22Code.GDTankMan5Objects1.length = 0;
gdjs.TankmanS22Code.GDTankMan5Objects2.length = 0;
gdjs.TankmanS22Code.GDTankMan2Objects1.length = 0;
gdjs.TankmanS22Code.GDTankMan2Objects2.length = 0;
gdjs.TankmanS22Code.GDTankManObjects1.length = 0;
gdjs.TankmanS22Code.GDTankManObjects2.length = 0;
gdjs.TankmanS22Code.GDDPadBottomObjects1.length = 0;
gdjs.TankmanS22Code.GDDPadBottomObjects2.length = 0;
gdjs.TankmanS22Code.GDDPadRightObjects1.length = 0;
gdjs.TankmanS22Code.GDDPadRightObjects2.length = 0;
gdjs.TankmanS22Code.GDDPadLeftObjects1.length = 0;
gdjs.TankmanS22Code.GDDPadLeftObjects2.length = 0;
gdjs.TankmanS22Code.GDDPadUpObjects1.length = 0;
gdjs.TankmanS22Code.GDDPadUpObjects2.length = 0;
gdjs.TankmanS22Code.GDAButtonObjects1.length = 0;
gdjs.TankmanS22Code.GDAButtonObjects2.length = 0;
gdjs.TankmanS22Code.GDBButtonObjects1.length = 0;
gdjs.TankmanS22Code.GDBButtonObjects2.length = 0;
gdjs.TankmanS22Code.GDTCTextObjects1.length = 0;
gdjs.TankmanS22Code.GDTCTextObjects2.length = 0;
gdjs.TankmanS22Code.GDStarRoundButtonObjects1.length = 0;
gdjs.TankmanS22Code.GDStarRoundButtonObjects2.length = 0;
gdjs.TankmanS22Code.GDMouseObjects1.length = 0;
gdjs.TankmanS22Code.GDMouseObjects2.length = 0;
gdjs.TankmanS22Code.GDNewObjectObjects1.length = 0;
gdjs.TankmanS22Code.GDNewObjectObjects2.length = 0;
gdjs.TankmanS22Code.GDTestmanObjects1.length = 0;
gdjs.TankmanS22Code.GDTestmanObjects2.length = 0;
gdjs.TankmanS22Code.GDIconObjects1.length = 0;
gdjs.TankmanS22Code.GDIconObjects2.length = 0;
gdjs.TankmanS22Code.GDBackgroundObjects1.length = 0;
gdjs.TankmanS22Code.GDBackgroundObjects2.length = 0;
gdjs.TankmanS22Code.GDSquareJoystickObjects1.length = 0;
gdjs.TankmanS22Code.GDSquareJoystickObjects2.length = 0;
gdjs.TankmanS22Code.GDIconMObjects1.length = 0;
gdjs.TankmanS22Code.GDIconMObjects2.length = 0;
gdjs.TankmanS22Code.GDTrickShakeObjects1.length = 0;
gdjs.TankmanS22Code.GDTrickShakeObjects2.length = 0;
gdjs.TankmanS22Code.GDWhiteboxObjects1.length = 0;
gdjs.TankmanS22Code.GDWhiteboxObjects2.length = 0;

gdjs.TankmanS22Code.eventsList1(runtimeScene);
return;

}

gdjs['TankmanS22Code'] = gdjs.TankmanS22Code;
