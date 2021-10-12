gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDTankMan3Objects1= [];
gdjs.New_32sceneCode.GDTankMan3Objects2= [];
gdjs.New_32sceneCode.GDTankMan4Objects1= [];
gdjs.New_32sceneCode.GDTankMan4Objects2= [];
gdjs.New_32sceneCode.GDTankMan5Objects1= [];
gdjs.New_32sceneCode.GDTankMan5Objects2= [];
gdjs.New_32sceneCode.GDTankMan2Objects1= [];
gdjs.New_32sceneCode.GDTankMan2Objects2= [];
gdjs.New_32sceneCode.GDTankManObjects1= [];
gdjs.New_32sceneCode.GDTankManObjects2= [];
gdjs.New_32sceneCode.GDDPadBottomObjects1= [];
gdjs.New_32sceneCode.GDDPadBottomObjects2= [];
gdjs.New_32sceneCode.GDDPadRightObjects1= [];
gdjs.New_32sceneCode.GDDPadRightObjects2= [];
gdjs.New_32sceneCode.GDDPadLeftObjects1= [];
gdjs.New_32sceneCode.GDDPadLeftObjects2= [];
gdjs.New_32sceneCode.GDDPadUpObjects1= [];
gdjs.New_32sceneCode.GDDPadUpObjects2= [];
gdjs.New_32sceneCode.GDAButtonObjects1= [];
gdjs.New_32sceneCode.GDAButtonObjects2= [];
gdjs.New_32sceneCode.GDBButtonObjects1= [];
gdjs.New_32sceneCode.GDBButtonObjects2= [];
gdjs.New_32sceneCode.GDTCTextObjects1= [];
gdjs.New_32sceneCode.GDTCTextObjects2= [];
gdjs.New_32sceneCode.GDStarRoundButtonObjects1= [];
gdjs.New_32sceneCode.GDStarRoundButtonObjects2= [];
gdjs.New_32sceneCode.GDMouseObjects1= [];
gdjs.New_32sceneCode.GDMouseObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition4IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition4IsTrue_1 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
gdjs.New_32sceneCode.condition3IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 88));
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObjectObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32sceneCode.condition2IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObjectObjects1[k] = gdjs.New_32sceneCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObjectObjects1.length = k;}if ( gdjs.New_32sceneCode.condition2IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition3IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22640108);
}
}}
}
}
if (gdjs.New_32sceneCode.condition3IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDNewObjectObjects1 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "agoti_voice\\introcut.ogg", 80, false, 100, 1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22640452);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "agoti_voice\\introcut.ogg", 80, false, 100, 1);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDTankMan3Objects1.length = 0;
gdjs.New_32sceneCode.GDTankMan3Objects2.length = 0;
gdjs.New_32sceneCode.GDTankMan4Objects1.length = 0;
gdjs.New_32sceneCode.GDTankMan4Objects2.length = 0;
gdjs.New_32sceneCode.GDTankMan5Objects1.length = 0;
gdjs.New_32sceneCode.GDTankMan5Objects2.length = 0;
gdjs.New_32sceneCode.GDTankMan2Objects1.length = 0;
gdjs.New_32sceneCode.GDTankMan2Objects2.length = 0;
gdjs.New_32sceneCode.GDTankManObjects1.length = 0;
gdjs.New_32sceneCode.GDTankManObjects2.length = 0;
gdjs.New_32sceneCode.GDDPadBottomObjects1.length = 0;
gdjs.New_32sceneCode.GDDPadBottomObjects2.length = 0;
gdjs.New_32sceneCode.GDDPadRightObjects1.length = 0;
gdjs.New_32sceneCode.GDDPadRightObjects2.length = 0;
gdjs.New_32sceneCode.GDDPadLeftObjects1.length = 0;
gdjs.New_32sceneCode.GDDPadLeftObjects2.length = 0;
gdjs.New_32sceneCode.GDDPadUpObjects1.length = 0;
gdjs.New_32sceneCode.GDDPadUpObjects2.length = 0;
gdjs.New_32sceneCode.GDAButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDAButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDBButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDBButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDTCTextObjects1.length = 0;
gdjs.New_32sceneCode.GDTCTextObjects2.length = 0;
gdjs.New_32sceneCode.GDStarRoundButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDStarRoundButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDMouseObjects1.length = 0;
gdjs.New_32sceneCode.GDMouseObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
