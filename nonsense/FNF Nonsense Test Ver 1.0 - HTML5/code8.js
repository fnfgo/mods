gdjs.TabiEXCode = {};
gdjs.TabiEXCode.GDTankMan3Objects1= [];
gdjs.TabiEXCode.GDTankMan3Objects2= [];
gdjs.TabiEXCode.GDTankMan4Objects1= [];
gdjs.TabiEXCode.GDTankMan4Objects2= [];
gdjs.TabiEXCode.GDTankMan5Objects1= [];
gdjs.TabiEXCode.GDTankMan5Objects2= [];
gdjs.TabiEXCode.GDTankMan2Objects1= [];
gdjs.TabiEXCode.GDTankMan2Objects2= [];
gdjs.TabiEXCode.GDTankManObjects1= [];
gdjs.TabiEXCode.GDTankManObjects2= [];
gdjs.TabiEXCode.GDDPadBottomObjects1= [];
gdjs.TabiEXCode.GDDPadBottomObjects2= [];
gdjs.TabiEXCode.GDDPadRightObjects1= [];
gdjs.TabiEXCode.GDDPadRightObjects2= [];
gdjs.TabiEXCode.GDDPadLeftObjects1= [];
gdjs.TabiEXCode.GDDPadLeftObjects2= [];
gdjs.TabiEXCode.GDDPadUpObjects1= [];
gdjs.TabiEXCode.GDDPadUpObjects2= [];
gdjs.TabiEXCode.GDAButtonObjects1= [];
gdjs.TabiEXCode.GDAButtonObjects2= [];
gdjs.TabiEXCode.GDBButtonObjects1= [];
gdjs.TabiEXCode.GDBButtonObjects2= [];
gdjs.TabiEXCode.GDTCTextObjects1= [];
gdjs.TabiEXCode.GDTCTextObjects2= [];
gdjs.TabiEXCode.GDStarRoundButtonObjects1= [];
gdjs.TabiEXCode.GDStarRoundButtonObjects2= [];
gdjs.TabiEXCode.GDMouseObjects1= [];
gdjs.TabiEXCode.GDMouseObjects2= [];
gdjs.TabiEXCode.GDNewObjectObjects1= [];
gdjs.TabiEXCode.GDNewObjectObjects2= [];
gdjs.TabiEXCode.GDTestmanObjects1= [];
gdjs.TabiEXCode.GDTestmanObjects2= [];
gdjs.TabiEXCode.GDIconObjects1= [];
gdjs.TabiEXCode.GDIconObjects2= [];
gdjs.TabiEXCode.GDBackgroundObjects1= [];
gdjs.TabiEXCode.GDBackgroundObjects2= [];
gdjs.TabiEXCode.GDSquareJoystickObjects1= [];
gdjs.TabiEXCode.GDSquareJoystickObjects2= [];
gdjs.TabiEXCode.GDIconMObjects1= [];
gdjs.TabiEXCode.GDIconMObjects2= [];
gdjs.TabiEXCode.GDSwitchObjects1= [];
gdjs.TabiEXCode.GDSwitchObjects2= [];
gdjs.TabiEXCode.GDWhiteboxObjects1= [];
gdjs.TabiEXCode.GDWhiteboxObjects2= [];
gdjs.TabiEXCode.GDblackObjects1= [];
gdjs.TabiEXCode.GDblackObjects2= [];

gdjs.TabiEXCode.conditionTrue_0 = {val:false};
gdjs.TabiEXCode.condition0IsTrue_0 = {val:false};
gdjs.TabiEXCode.condition1IsTrue_0 = {val:false};
gdjs.TabiEXCode.condition2IsTrue_0 = {val:false};
gdjs.TabiEXCode.conditionTrue_1 = {val:false};
gdjs.TabiEXCode.condition0IsTrue_1 = {val:false};
gdjs.TabiEXCode.condition1IsTrue_1 = {val:false};
gdjs.TabiEXCode.condition2IsTrue_1 = {val:false};


gdjs.TabiEXCode.eventsList0 = function(runtimeScene) {

{


gdjs.TabiEXCode.condition0IsTrue_0.val = false;
{
gdjs.TabiEXCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TabiEXCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Whitebox"), gdjs.TabiEXCode.GDWhiteboxObjects1);
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.TabiEXCode.GDblackObjects1);
{for(var i = 0, len = gdjs.TabiEXCode.GDblackObjects1.length ;i < len;++i) {
    gdjs.TabiEXCode.GDblackObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TabiEXCode.GDWhiteboxObjects1.length ;i < len;++i) {
    gdjs.TabiEXCode.GDWhiteboxObjects1[i].getBehavior("Tween").addObjectOpacityTween("w1", 0, "linear", 1200, false);
}
}}

}


{


gdjs.TabiEXCode.condition0IsTrue_0.val = false;
{
gdjs.TabiEXCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "cs");
}if (gdjs.TabiEXCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.TabiEXCode.GDblackObjects1);
{for(var i = 0, len = gdjs.TabiEXCode.GDblackObjects1.length ;i < len;++i) {
    gdjs.TabiEXCode.GDblackObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.TabiEXCode.GDblackObjects1);

gdjs.TabiEXCode.condition0IsTrue_0.val = false;
gdjs.TabiEXCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TabiEXCode.GDblackObjects1.length;i<l;++i) {
    if ( gdjs.TabiEXCode.GDblackObjects1[i].isVisible() ) {
        gdjs.TabiEXCode.condition0IsTrue_0.val = true;
        gdjs.TabiEXCode.GDblackObjects1[k] = gdjs.TabiEXCode.GDblackObjects1[i];
        ++k;
    }
}
gdjs.TabiEXCode.GDblackObjects1.length = k;}if ( gdjs.TabiEXCode.condition0IsTrue_0.val ) {
{
gdjs.TabiEXCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6.5, "cs");
}}
if (gdjs.TabiEXCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TabiEX2", false);
}}

}


{


gdjs.TabiEXCode.condition0IsTrue_0.val = false;
gdjs.TabiEXCode.condition1IsTrue_0.val = false;
{
gdjs.TabiEXCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.TabiEXCode.condition0IsTrue_0.val ) {
{
{gdjs.TabiEXCode.conditionTrue_1 = gdjs.TabiEXCode.condition1IsTrue_0;
gdjs.TabiEXCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22169060);
}
}}
if (gdjs.TabiEXCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan5"), gdjs.TabiEXCode.GDTankMan5Objects1);
{for(var i = 0, len = gdjs.TabiEXCode.GDTankMan5Objects1.length ;i < len;++i) {
    gdjs.TabiEXCode.GDTankMan5Objects1[i].setAnimationSpeedScale(0.25);
}
}{for(var i = 0, len = gdjs.TabiEXCode.GDTankMan5Objects1.length ;i < len;++i) {
    gdjs.TabiEXCode.GDTankMan5Objects1[i].setAnimation(0);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "tabi_voice\\TabiExp.mp3", 111, false, 100, 1);
}}

}


{



}


{



}


{



}


{



}


{



}


};

gdjs.TabiEXCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TabiEXCode.GDTankMan3Objects1.length = 0;
gdjs.TabiEXCode.GDTankMan3Objects2.length = 0;
gdjs.TabiEXCode.GDTankMan4Objects1.length = 0;
gdjs.TabiEXCode.GDTankMan4Objects2.length = 0;
gdjs.TabiEXCode.GDTankMan5Objects1.length = 0;
gdjs.TabiEXCode.GDTankMan5Objects2.length = 0;
gdjs.TabiEXCode.GDTankMan2Objects1.length = 0;
gdjs.TabiEXCode.GDTankMan2Objects2.length = 0;
gdjs.TabiEXCode.GDTankManObjects1.length = 0;
gdjs.TabiEXCode.GDTankManObjects2.length = 0;
gdjs.TabiEXCode.GDDPadBottomObjects1.length = 0;
gdjs.TabiEXCode.GDDPadBottomObjects2.length = 0;
gdjs.TabiEXCode.GDDPadRightObjects1.length = 0;
gdjs.TabiEXCode.GDDPadRightObjects2.length = 0;
gdjs.TabiEXCode.GDDPadLeftObjects1.length = 0;
gdjs.TabiEXCode.GDDPadLeftObjects2.length = 0;
gdjs.TabiEXCode.GDDPadUpObjects1.length = 0;
gdjs.TabiEXCode.GDDPadUpObjects2.length = 0;
gdjs.TabiEXCode.GDAButtonObjects1.length = 0;
gdjs.TabiEXCode.GDAButtonObjects2.length = 0;
gdjs.TabiEXCode.GDBButtonObjects1.length = 0;
gdjs.TabiEXCode.GDBButtonObjects2.length = 0;
gdjs.TabiEXCode.GDTCTextObjects1.length = 0;
gdjs.TabiEXCode.GDTCTextObjects2.length = 0;
gdjs.TabiEXCode.GDStarRoundButtonObjects1.length = 0;
gdjs.TabiEXCode.GDStarRoundButtonObjects2.length = 0;
gdjs.TabiEXCode.GDMouseObjects1.length = 0;
gdjs.TabiEXCode.GDMouseObjects2.length = 0;
gdjs.TabiEXCode.GDNewObjectObjects1.length = 0;
gdjs.TabiEXCode.GDNewObjectObjects2.length = 0;
gdjs.TabiEXCode.GDTestmanObjects1.length = 0;
gdjs.TabiEXCode.GDTestmanObjects2.length = 0;
gdjs.TabiEXCode.GDIconObjects1.length = 0;
gdjs.TabiEXCode.GDIconObjects2.length = 0;
gdjs.TabiEXCode.GDBackgroundObjects1.length = 0;
gdjs.TabiEXCode.GDBackgroundObjects2.length = 0;
gdjs.TabiEXCode.GDSquareJoystickObjects1.length = 0;
gdjs.TabiEXCode.GDSquareJoystickObjects2.length = 0;
gdjs.TabiEXCode.GDIconMObjects1.length = 0;
gdjs.TabiEXCode.GDIconMObjects2.length = 0;
gdjs.TabiEXCode.GDSwitchObjects1.length = 0;
gdjs.TabiEXCode.GDSwitchObjects2.length = 0;
gdjs.TabiEXCode.GDWhiteboxObjects1.length = 0;
gdjs.TabiEXCode.GDWhiteboxObjects2.length = 0;
gdjs.TabiEXCode.GDblackObjects1.length = 0;
gdjs.TabiEXCode.GDblackObjects2.length = 0;

gdjs.TabiEXCode.eventsList0(runtimeScene);
return;

}

gdjs['TabiEXCode'] = gdjs.TabiEXCode;
