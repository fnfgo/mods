gdjs.BackupCode = {};
gdjs.BackupCode.GDTankMan3Objects1= [];
gdjs.BackupCode.GDTankMan3Objects2= [];
gdjs.BackupCode.GDTankMan3Objects3= [];
gdjs.BackupCode.GDTankMan4Objects1= [];
gdjs.BackupCode.GDTankMan4Objects2= [];
gdjs.BackupCode.GDTankMan4Objects3= [];
gdjs.BackupCode.GDTankMan5Objects1= [];
gdjs.BackupCode.GDTankMan5Objects2= [];
gdjs.BackupCode.GDTankMan5Objects3= [];
gdjs.BackupCode.GDTankMan2Objects1= [];
gdjs.BackupCode.GDTankMan2Objects2= [];
gdjs.BackupCode.GDTankMan2Objects3= [];
gdjs.BackupCode.GDTankManObjects1= [];
gdjs.BackupCode.GDTankManObjects2= [];
gdjs.BackupCode.GDTankManObjects3= [];
gdjs.BackupCode.GDDPadBottomObjects1= [];
gdjs.BackupCode.GDDPadBottomObjects2= [];
gdjs.BackupCode.GDDPadBottomObjects3= [];
gdjs.BackupCode.GDDPadRightObjects1= [];
gdjs.BackupCode.GDDPadRightObjects2= [];
gdjs.BackupCode.GDDPadRightObjects3= [];
gdjs.BackupCode.GDDPadLeftObjects1= [];
gdjs.BackupCode.GDDPadLeftObjects2= [];
gdjs.BackupCode.GDDPadLeftObjects3= [];
gdjs.BackupCode.GDDPadUpObjects1= [];
gdjs.BackupCode.GDDPadUpObjects2= [];
gdjs.BackupCode.GDDPadUpObjects3= [];
gdjs.BackupCode.GDAButtonObjects1= [];
gdjs.BackupCode.GDAButtonObjects2= [];
gdjs.BackupCode.GDAButtonObjects3= [];
gdjs.BackupCode.GDBButtonObjects1= [];
gdjs.BackupCode.GDBButtonObjects2= [];
gdjs.BackupCode.GDBButtonObjects3= [];
gdjs.BackupCode.GDTCTextObjects1= [];
gdjs.BackupCode.GDTCTextObjects2= [];
gdjs.BackupCode.GDTCTextObjects3= [];
gdjs.BackupCode.GDStarRoundButtonObjects1= [];
gdjs.BackupCode.GDStarRoundButtonObjects2= [];
gdjs.BackupCode.GDStarRoundButtonObjects3= [];
gdjs.BackupCode.GDMouseObjects1= [];
gdjs.BackupCode.GDMouseObjects2= [];
gdjs.BackupCode.GDMouseObjects3= [];
gdjs.BackupCode.GDNewObjectObjects1= [];
gdjs.BackupCode.GDNewObjectObjects2= [];
gdjs.BackupCode.GDNewObjectObjects3= [];
gdjs.BackupCode.GDTestmanObjects1= [];
gdjs.BackupCode.GDTestmanObjects2= [];
gdjs.BackupCode.GDTestmanObjects3= [];
gdjs.BackupCode.GDIconObjects1= [];
gdjs.BackupCode.GDIconObjects2= [];
gdjs.BackupCode.GDIconObjects3= [];

gdjs.BackupCode.conditionTrue_0 = {val:false};
gdjs.BackupCode.condition0IsTrue_0 = {val:false};
gdjs.BackupCode.condition1IsTrue_0 = {val:false};
gdjs.BackupCode.condition2IsTrue_0 = {val:false};
gdjs.BackupCode.condition3IsTrue_0 = {val:false};
gdjs.BackupCode.conditionTrue_1 = {val:false};
gdjs.BackupCode.condition0IsTrue_1 = {val:false};
gdjs.BackupCode.condition1IsTrue_1 = {val:false};
gdjs.BackupCode.condition2IsTrue_1 = {val:false};
gdjs.BackupCode.condition3IsTrue_1 = {val:false};


gdjs.BackupCode.eventsList0 = function(runtimeScene) {

{


gdjs.BackupCode.condition0IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.BackupCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.BackupCode.GDTankManObjects2);
{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].flipX(true);
}
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
gdjs.BackupCode.condition1IsTrue_0.val = false;
gdjs.BackupCode.condition2IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.BackupCode.condition0IsTrue_0.val ) {
{
gdjs.BackupCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}if ( gdjs.BackupCode.condition1IsTrue_0.val ) {
{
{gdjs.BackupCode.conditionTrue_1 = gdjs.BackupCode.condition2IsTrue_0;
gdjs.BackupCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22621764);
}
}}
}
if (gdjs.BackupCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\L1.mp3", 1, false, 100, 1);
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
gdjs.BackupCode.condition1IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.BackupCode.condition0IsTrue_0.val ) {
{
gdjs.BackupCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}}
if (gdjs.BackupCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.BackupCode.GDTankManObjects2);
{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].setAnimationName("left");
}
}{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].flipX(false);
}
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
gdjs.BackupCode.condition1IsTrue_0.val = false;
gdjs.BackupCode.condition2IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.BackupCode.condition0IsTrue_0.val ) {
{
gdjs.BackupCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}if ( gdjs.BackupCode.condition1IsTrue_0.val ) {
{
{gdjs.BackupCode.conditionTrue_1 = gdjs.BackupCode.condition2IsTrue_0;
gdjs.BackupCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22623828);
}
}}
}
if (gdjs.BackupCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\R.mp3", 2, false, 100, 1);
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
gdjs.BackupCode.condition1IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.BackupCode.condition0IsTrue_0.val ) {
{
gdjs.BackupCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}}
if (gdjs.BackupCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.BackupCode.GDTankManObjects2);
{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].setAnimationName("right");
}
}{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].flipX(false);
}
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
gdjs.BackupCode.condition1IsTrue_0.val = false;
gdjs.BackupCode.condition2IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.BackupCode.condition0IsTrue_0.val ) {
{
gdjs.BackupCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.BackupCode.condition1IsTrue_0.val ) {
{
{gdjs.BackupCode.conditionTrue_1 = gdjs.BackupCode.condition2IsTrue_0;
gdjs.BackupCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22625868);
}
}}
}
if (gdjs.BackupCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\SR3.mp3", 5, false, 100, 1);
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
gdjs.BackupCode.condition1IsTrue_0.val = false;
gdjs.BackupCode.condition2IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}if ( gdjs.BackupCode.condition0IsTrue_0.val ) {
{
gdjs.BackupCode.condition1IsTrue_0.val = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 5);
}if ( gdjs.BackupCode.condition1IsTrue_0.val ) {
{
{gdjs.BackupCode.conditionTrue_1 = gdjs.BackupCode.condition2IsTrue_0;
gdjs.BackupCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22626924);
}
}}
}
if (gdjs.BackupCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.BackupCode.GDTankManObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\SD.mp3", 6, false, 100, 1);
}{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].setAnimationName("down");
}
}{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].flipX(false);
}
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
gdjs.BackupCode.condition1IsTrue_0.val = false;
gdjs.BackupCode.condition2IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}if ( gdjs.BackupCode.condition0IsTrue_0.val ) {
{
gdjs.BackupCode.condition1IsTrue_0.val = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 6);
}if ( gdjs.BackupCode.condition1IsTrue_0.val ) {
{
{gdjs.BackupCode.conditionTrue_1 = gdjs.BackupCode.condition2IsTrue_0;
gdjs.BackupCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22628396);
}
}}
}
if (gdjs.BackupCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.BackupCode.GDTankManObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\SL2.mp3", 8, false, 100, 1);
}{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].setAnimationName("left");
}
}{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].flipX(false);
}
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
gdjs.BackupCode.condition1IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.BackupCode.condition0IsTrue_0.val ) {
{
{gdjs.BackupCode.conditionTrue_1 = gdjs.BackupCode.condition1IsTrue_0;
gdjs.BackupCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22629708);
}
}}
if (gdjs.BackupCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\U1.mp3", 3, false, 100, 1);
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.BackupCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.BackupCode.GDTankManObjects2);
{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].setAnimationName("up");
}
}{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].flipX(false);
}
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
gdjs.BackupCode.condition1IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.BackupCode.condition0IsTrue_0.val ) {
{
{gdjs.BackupCode.conditionTrue_1 = gdjs.BackupCode.condition1IsTrue_0;
gdjs.BackupCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22631452);
}
}}
if (gdjs.BackupCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\D1.mp3", 4, false, 100, 1);
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.BackupCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.BackupCode.GDTankManObjects2);
{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].setAnimationName("down");
}
}{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].flipX(false);
}
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
{
{gdjs.BackupCode.conditionTrue_1 = gdjs.BackupCode.condition0IsTrue_0;
gdjs.BackupCode.condition0IsTrue_1.val = false;
gdjs.BackupCode.condition1IsTrue_1.val = false;
{
gdjs.BackupCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LAlt");
if( gdjs.BackupCode.condition0IsTrue_1.val ) {
    gdjs.BackupCode.conditionTrue_1.val = true;
}
}
{
gdjs.BackupCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RAlt");
if( gdjs.BackupCode.condition1IsTrue_1.val ) {
    gdjs.BackupCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.BackupCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.BackupCode.GDTankManObjects2);
{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].setAnimationName("ugh");
}
}{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].flipX(true);
}
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
gdjs.BackupCode.condition1IsTrue_0.val = false;
{
{gdjs.BackupCode.conditionTrue_1 = gdjs.BackupCode.condition0IsTrue_0;
gdjs.BackupCode.condition0IsTrue_1.val = false;
gdjs.BackupCode.condition1IsTrue_1.val = false;
{
gdjs.BackupCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LAlt");
if( gdjs.BackupCode.condition0IsTrue_1.val ) {
    gdjs.BackupCode.conditionTrue_1.val = true;
}
}
{
gdjs.BackupCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RAlt");
if( gdjs.BackupCode.condition1IsTrue_1.val ) {
    gdjs.BackupCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.BackupCode.condition0IsTrue_0.val ) {
{
{gdjs.BackupCode.conditionTrue_1 = gdjs.BackupCode.condition1IsTrue_0;
gdjs.BackupCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22634860);
}
}}
if (gdjs.BackupCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sound\\ugh.mp3", 7, false, 100, 1);
}}

}


{


gdjs.BackupCode.condition0IsTrue_0.val = false;
{
gdjs.BackupCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}if (gdjs.BackupCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.BackupCode.GDTankManObjects2);
{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.BackupCode.GDTankManObjects2.length ;i < len;++i) {
    gdjs.BackupCode.GDTankManObjects2[i].flipX(true);
}
}}

}


{



}


};gdjs.BackupCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.BackupCode.eventsList0(runtimeScene);
}


};

gdjs.BackupCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BackupCode.GDTankMan3Objects1.length = 0;
gdjs.BackupCode.GDTankMan3Objects2.length = 0;
gdjs.BackupCode.GDTankMan3Objects3.length = 0;
gdjs.BackupCode.GDTankMan4Objects1.length = 0;
gdjs.BackupCode.GDTankMan4Objects2.length = 0;
gdjs.BackupCode.GDTankMan4Objects3.length = 0;
gdjs.BackupCode.GDTankMan5Objects1.length = 0;
gdjs.BackupCode.GDTankMan5Objects2.length = 0;
gdjs.BackupCode.GDTankMan5Objects3.length = 0;
gdjs.BackupCode.GDTankMan2Objects1.length = 0;
gdjs.BackupCode.GDTankMan2Objects2.length = 0;
gdjs.BackupCode.GDTankMan2Objects3.length = 0;
gdjs.BackupCode.GDTankManObjects1.length = 0;
gdjs.BackupCode.GDTankManObjects2.length = 0;
gdjs.BackupCode.GDTankManObjects3.length = 0;
gdjs.BackupCode.GDDPadBottomObjects1.length = 0;
gdjs.BackupCode.GDDPadBottomObjects2.length = 0;
gdjs.BackupCode.GDDPadBottomObjects3.length = 0;
gdjs.BackupCode.GDDPadRightObjects1.length = 0;
gdjs.BackupCode.GDDPadRightObjects2.length = 0;
gdjs.BackupCode.GDDPadRightObjects3.length = 0;
gdjs.BackupCode.GDDPadLeftObjects1.length = 0;
gdjs.BackupCode.GDDPadLeftObjects2.length = 0;
gdjs.BackupCode.GDDPadLeftObjects3.length = 0;
gdjs.BackupCode.GDDPadUpObjects1.length = 0;
gdjs.BackupCode.GDDPadUpObjects2.length = 0;
gdjs.BackupCode.GDDPadUpObjects3.length = 0;
gdjs.BackupCode.GDAButtonObjects1.length = 0;
gdjs.BackupCode.GDAButtonObjects2.length = 0;
gdjs.BackupCode.GDAButtonObjects3.length = 0;
gdjs.BackupCode.GDBButtonObjects1.length = 0;
gdjs.BackupCode.GDBButtonObjects2.length = 0;
gdjs.BackupCode.GDBButtonObjects3.length = 0;
gdjs.BackupCode.GDTCTextObjects1.length = 0;
gdjs.BackupCode.GDTCTextObjects2.length = 0;
gdjs.BackupCode.GDTCTextObjects3.length = 0;
gdjs.BackupCode.GDStarRoundButtonObjects1.length = 0;
gdjs.BackupCode.GDStarRoundButtonObjects2.length = 0;
gdjs.BackupCode.GDStarRoundButtonObjects3.length = 0;
gdjs.BackupCode.GDMouseObjects1.length = 0;
gdjs.BackupCode.GDMouseObjects2.length = 0;
gdjs.BackupCode.GDMouseObjects3.length = 0;
gdjs.BackupCode.GDNewObjectObjects1.length = 0;
gdjs.BackupCode.GDNewObjectObjects2.length = 0;
gdjs.BackupCode.GDNewObjectObjects3.length = 0;
gdjs.BackupCode.GDTestmanObjects1.length = 0;
gdjs.BackupCode.GDTestmanObjects2.length = 0;
gdjs.BackupCode.GDTestmanObjects3.length = 0;
gdjs.BackupCode.GDIconObjects1.length = 0;
gdjs.BackupCode.GDIconObjects2.length = 0;
gdjs.BackupCode.GDIconObjects3.length = 0;

gdjs.BackupCode.eventsList1(runtimeScene);
return;

}

gdjs['BackupCode'] = gdjs.BackupCode;
