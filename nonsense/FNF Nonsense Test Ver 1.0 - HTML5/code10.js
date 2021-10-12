gdjs.TankmanS2Code = {};
gdjs.TankmanS2Code.GDTankMan3Objects1= [];
gdjs.TankmanS2Code.GDTankMan3Objects2= [];
gdjs.TankmanS2Code.GDTankMan3Objects3= [];
gdjs.TankmanS2Code.GDTankMan4Objects1= [];
gdjs.TankmanS2Code.GDTankMan4Objects2= [];
gdjs.TankmanS2Code.GDTankMan4Objects3= [];
gdjs.TankmanS2Code.GDTankMan5Objects1= [];
gdjs.TankmanS2Code.GDTankMan5Objects2= [];
gdjs.TankmanS2Code.GDTankMan5Objects3= [];
gdjs.TankmanS2Code.GDTankMan2Objects1= [];
gdjs.TankmanS2Code.GDTankMan2Objects2= [];
gdjs.TankmanS2Code.GDTankMan2Objects3= [];
gdjs.TankmanS2Code.GDTankManObjects1= [];
gdjs.TankmanS2Code.GDTankManObjects2= [];
gdjs.TankmanS2Code.GDTankManObjects3= [];
gdjs.TankmanS2Code.GDDPadBottomObjects1= [];
gdjs.TankmanS2Code.GDDPadBottomObjects2= [];
gdjs.TankmanS2Code.GDDPadBottomObjects3= [];
gdjs.TankmanS2Code.GDDPadRightObjects1= [];
gdjs.TankmanS2Code.GDDPadRightObjects2= [];
gdjs.TankmanS2Code.GDDPadRightObjects3= [];
gdjs.TankmanS2Code.GDDPadLeftObjects1= [];
gdjs.TankmanS2Code.GDDPadLeftObjects2= [];
gdjs.TankmanS2Code.GDDPadLeftObjects3= [];
gdjs.TankmanS2Code.GDDPadUpObjects1= [];
gdjs.TankmanS2Code.GDDPadUpObjects2= [];
gdjs.TankmanS2Code.GDDPadUpObjects3= [];
gdjs.TankmanS2Code.GDAButtonObjects1= [];
gdjs.TankmanS2Code.GDAButtonObjects2= [];
gdjs.TankmanS2Code.GDAButtonObjects3= [];
gdjs.TankmanS2Code.GDBButtonObjects1= [];
gdjs.TankmanS2Code.GDBButtonObjects2= [];
gdjs.TankmanS2Code.GDBButtonObjects3= [];
gdjs.TankmanS2Code.GDTCTextObjects1= [];
gdjs.TankmanS2Code.GDTCTextObjects2= [];
gdjs.TankmanS2Code.GDTCTextObjects3= [];
gdjs.TankmanS2Code.GDStarRoundButtonObjects1= [];
gdjs.TankmanS2Code.GDStarRoundButtonObjects2= [];
gdjs.TankmanS2Code.GDStarRoundButtonObjects3= [];
gdjs.TankmanS2Code.GDMouseObjects1= [];
gdjs.TankmanS2Code.GDMouseObjects2= [];
gdjs.TankmanS2Code.GDMouseObjects3= [];
gdjs.TankmanS2Code.GDNewObjectObjects1= [];
gdjs.TankmanS2Code.GDNewObjectObjects2= [];
gdjs.TankmanS2Code.GDNewObjectObjects3= [];
gdjs.TankmanS2Code.GDTestmanObjects1= [];
gdjs.TankmanS2Code.GDTestmanObjects2= [];
gdjs.TankmanS2Code.GDTestmanObjects3= [];
gdjs.TankmanS2Code.GDIconObjects1= [];
gdjs.TankmanS2Code.GDIconObjects2= [];
gdjs.TankmanS2Code.GDIconObjects3= [];
gdjs.TankmanS2Code.GDBackgroundObjects1= [];
gdjs.TankmanS2Code.GDBackgroundObjects2= [];
gdjs.TankmanS2Code.GDBackgroundObjects3= [];
gdjs.TankmanS2Code.GDSquareJoystickObjects1= [];
gdjs.TankmanS2Code.GDSquareJoystickObjects2= [];
gdjs.TankmanS2Code.GDSquareJoystickObjects3= [];
gdjs.TankmanS2Code.GDIconMObjects1= [];
gdjs.TankmanS2Code.GDIconMObjects2= [];
gdjs.TankmanS2Code.GDIconMObjects3= [];
gdjs.TankmanS2Code.GDWhiteBoxObjects1= [];
gdjs.TankmanS2Code.GDWhiteBoxObjects2= [];
gdjs.TankmanS2Code.GDWhiteBoxObjects3= [];

gdjs.TankmanS2Code.conditionTrue_0 = {val:false};
gdjs.TankmanS2Code.condition0IsTrue_0 = {val:false};
gdjs.TankmanS2Code.condition1IsTrue_0 = {val:false};
gdjs.TankmanS2Code.condition2IsTrue_0 = {val:false};
gdjs.TankmanS2Code.condition3IsTrue_0 = {val:false};
gdjs.TankmanS2Code.condition4IsTrue_0 = {val:false};
gdjs.TankmanS2Code.condition5IsTrue_0 = {val:false};
gdjs.TankmanS2Code.condition6IsTrue_0 = {val:false};
gdjs.TankmanS2Code.condition7IsTrue_0 = {val:false};
gdjs.TankmanS2Code.conditionTrue_1 = {val:false};
gdjs.TankmanS2Code.condition0IsTrue_1 = {val:false};
gdjs.TankmanS2Code.condition1IsTrue_1 = {val:false};
gdjs.TankmanS2Code.condition2IsTrue_1 = {val:false};
gdjs.TankmanS2Code.condition3IsTrue_1 = {val:false};
gdjs.TankmanS2Code.condition4IsTrue_1 = {val:false};
gdjs.TankmanS2Code.condition5IsTrue_1 = {val:false};
gdjs.TankmanS2Code.condition6IsTrue_1 = {val:false};
gdjs.TankmanS2Code.condition7IsTrue_1 = {val:false};


gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDIconMObjects2Objects = Hashtable.newFrom({"IconM": gdjs.TankmanS2Code.GDIconMObjects2});gdjs.TankmanS2Code.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition1IsTrue_0;
gdjs.TankmanS2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22405844);
}
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "voices\\3.mp3", 1, false, 100, 1);
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimationName("left2");
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1.1);
}
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition1IsTrue_0;
gdjs.TankmanS2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22407796);
}
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "voices\\4.mp3", 2, false, 100, 1);
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimationName("right2");
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1.35);
}
}}

}


{



}


{



}


{



}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition1IsTrue_0;
gdjs.TankmanS2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22413684);
}
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "voices\\2.mp3", 3, false, 100, 1);
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimationName("up2");
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1);
}
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition1IsTrue_0;
gdjs.TankmanS2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22415644);
}
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "voices\\1.mp3", 4, false, 100, 1);
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimationName("down2");
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1.11);
}
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition0IsTrue_0;
gdjs.TankmanS2Code.condition0IsTrue_1.val = false;
gdjs.TankmanS2Code.condition1IsTrue_1.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LAlt");
if( gdjs.TankmanS2Code.condition0IsTrue_1.val ) {
    gdjs.TankmanS2Code.conditionTrue_1.val = true;
}
}
{
gdjs.TankmanS2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RAlt");
if( gdjs.TankmanS2Code.condition1IsTrue_1.val ) {
    gdjs.TankmanS2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimationName("right2");
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1.35);
}
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition0IsTrue_0;
gdjs.TankmanS2Code.condition0IsTrue_1.val = false;
gdjs.TankmanS2Code.condition1IsTrue_1.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LAlt");
if( gdjs.TankmanS2Code.condition0IsTrue_1.val ) {
    gdjs.TankmanS2Code.conditionTrue_1.val = true;
}
}
{
gdjs.TankmanS2Code.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RAlt");
if( gdjs.TankmanS2Code.condition1IsTrue_1.val ) {
    gdjs.TankmanS2Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition1IsTrue_0;
gdjs.TankmanS2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22419524);
}
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "voices\\5.mp3", 7, false, 100, 1);
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1);
}
}}

}


{



}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Back");
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition1IsTrue_0;
gdjs.TankmanS2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22424380);
}
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WhiteBox"), gdjs.TankmanS2Code.GDWhiteBoxObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDWhiteBoxObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDWhiteBoxObjects2[i].getBehavior("Tween").addObjectOpacityTween("1", 255, "linear", 1500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteBox"), gdjs.TankmanS2Code.GDWhiteBoxObjects1);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TankmanS2Code.GDWhiteBoxObjects1.length;i<l;++i) {
    if ( gdjs.TankmanS2Code.GDWhiteBoxObjects1[i].getOpacity() == 255 ) {
        gdjs.TankmanS2Code.condition0IsTrue_0.val = true;
        gdjs.TankmanS2Code.GDWhiteBoxObjects1[k] = gdjs.TankmanS2Code.GDWhiteBoxObjects1[i];
        ++k;
    }
}
gdjs.TankmanS2Code.GDWhiteBoxObjects1.length = k;}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TankmanS22", false);
}}

}


};gdjs.TankmanS2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("IconM"), gdjs.TankmanS2Code.GDIconMObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDIconMObjects2Objects, runtimeScene, true, false);
}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TankmanS", false);
}}

}


{


gdjs.TankmanS2Code.eventsList0(runtimeScene);
}


};gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadLeftObjects2Objects = Hashtable.newFrom({"DPadLeft": gdjs.TankmanS2Code.GDDPadLeftObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadLeftObjects2Objects = Hashtable.newFrom({"DPadLeft": gdjs.TankmanS2Code.GDDPadLeftObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadRightObjects2Objects = Hashtable.newFrom({"DPadRight": gdjs.TankmanS2Code.GDDPadRightObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadRightObjects2Objects = Hashtable.newFrom({"DPadRight": gdjs.TankmanS2Code.GDDPadRightObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadUpObjects2Objects = Hashtable.newFrom({"DPadUp": gdjs.TankmanS2Code.GDDPadUpObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadUpObjects2Objects = Hashtable.newFrom({"DPadUp": gdjs.TankmanS2Code.GDDPadUpObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadBottomObjects2Objects = Hashtable.newFrom({"DPadBottom": gdjs.TankmanS2Code.GDDPadBottomObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadBottomObjects2Objects = Hashtable.newFrom({"DPadBottom": gdjs.TankmanS2Code.GDDPadBottomObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDAButtonObjects2Objects = Hashtable.newFrom({"AButton": gdjs.TankmanS2Code.GDAButtonObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDAButtonObjects2Objects = Hashtable.newFrom({"AButton": gdjs.TankmanS2Code.GDAButtonObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDBButtonObjects2Objects = Hashtable.newFrom({"BButton": gdjs.TankmanS2Code.GDBButtonObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDAButtonObjects2Objects = Hashtable.newFrom({"AButton": gdjs.TankmanS2Code.GDAButtonObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadLeftObjects2Objects = Hashtable.newFrom({"DPadLeft": gdjs.TankmanS2Code.GDDPadLeftObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadRightObjects2Objects = Hashtable.newFrom({"DPadRight": gdjs.TankmanS2Code.GDDPadRightObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadUpObjects2Objects = Hashtable.newFrom({"DPadUp": gdjs.TankmanS2Code.GDDPadUpObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadBottomObjects2Objects = Hashtable.newFrom({"DPadBottom": gdjs.TankmanS2Code.GDDPadBottomObjects2});gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDIconMObjects2Objects = Hashtable.newFrom({"IconM": gdjs.TankmanS2Code.GDIconMObjects2});gdjs.TankmanS2Code.eventsList2 = function(runtimeScene) {

{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DPadLeft"), gdjs.TankmanS2Code.GDDPadLeftObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
gdjs.TankmanS2Code.condition2IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadLeftObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition1IsTrue_0;
gdjs.TankmanS2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22426484);
}
}if ( gdjs.TankmanS2Code.condition1IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
}
if (gdjs.TankmanS2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "voices\\3.mp3", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DPadLeft"), gdjs.TankmanS2Code.GDDPadLeftObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadLeftObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimationName("left2");
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1.1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DPadRight"), gdjs.TankmanS2Code.GDDPadRightObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
gdjs.TankmanS2Code.condition2IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadRightObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition1IsTrue_0;
gdjs.TankmanS2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22428932);
}
}if ( gdjs.TankmanS2Code.condition1IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
}
if (gdjs.TankmanS2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "voices\\4.mp3", 2, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DPadRight"), gdjs.TankmanS2Code.GDDPadRightObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadRightObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimationName("right2");
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1.35);
}
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

gdjs.copyArray(runtimeScene.getObjects("DPadUp"), gdjs.TankmanS2Code.GDDPadUpObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
gdjs.TankmanS2Code.condition2IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition1IsTrue_0;
gdjs.TankmanS2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22436140);
}
}if ( gdjs.TankmanS2Code.condition1IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
}
if (gdjs.TankmanS2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "voices\\2.mp3", 3, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DPadUp"), gdjs.TankmanS2Code.GDDPadUpObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadUpObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimationName("up2");
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DPadBottom"), gdjs.TankmanS2Code.GDDPadBottomObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
gdjs.TankmanS2Code.condition2IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadBottomObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition1IsTrue_0;
gdjs.TankmanS2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22438516);
}
}if ( gdjs.TankmanS2Code.condition1IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
}
if (gdjs.TankmanS2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "voices\\1.mp3", 4, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DPadBottom"), gdjs.TankmanS2Code.GDDPadBottomObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadBottomObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimationName("down2");
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1.11);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.TankmanS2Code.GDAButtonObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDAButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimationName("left2");
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1.1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.TankmanS2Code.GDAButtonObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
gdjs.TankmanS2Code.condition2IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDAButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
{gdjs.TankmanS2Code.conditionTrue_1 = gdjs.TankmanS2Code.condition1IsTrue_0;
gdjs.TankmanS2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(22442164);
}
}if ( gdjs.TankmanS2Code.condition1IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
}
if (gdjs.TankmanS2Code.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "voices\\5.mp3", 7, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.TankmanS2Code.GDAButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("BButton"), gdjs.TankmanS2Code.GDBButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("DPadBottom"), gdjs.TankmanS2Code.GDDPadBottomObjects2);
gdjs.copyArray(runtimeScene.getObjects("DPadLeft"), gdjs.TankmanS2Code.GDDPadLeftObjects2);
gdjs.copyArray(runtimeScene.getObjects("DPadRight"), gdjs.TankmanS2Code.GDDPadRightObjects2);
gdjs.copyArray(runtimeScene.getObjects("DPadUp"), gdjs.TankmanS2Code.GDDPadUpObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
gdjs.TankmanS2Code.condition2IsTrue_0.val = false;
gdjs.TankmanS2Code.condition3IsTrue_0.val = false;
gdjs.TankmanS2Code.condition4IsTrue_0.val = false;
gdjs.TankmanS2Code.condition5IsTrue_0.val = false;
gdjs.TankmanS2Code.condition6IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDBButtonObjects2Objects, runtimeScene, true, true);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDAButtonObjects2Objects, runtimeScene, true, true);
}if ( gdjs.TankmanS2Code.condition1IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadLeftObjects2Objects, runtimeScene, true, true);
}if ( gdjs.TankmanS2Code.condition2IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition3IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadRightObjects2Objects, runtimeScene, true, true);
}if ( gdjs.TankmanS2Code.condition3IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition4IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadUpObjects2Objects, runtimeScene, true, true);
}if ( gdjs.TankmanS2Code.condition4IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition5IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDDPadBottomObjects2Objects, runtimeScene, true, true);
}if ( gdjs.TankmanS2Code.condition5IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition6IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}}
}
}
}
}
}
if (gdjs.TankmanS2Code.condition6IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TankMan"), gdjs.TankmanS2Code.GDTankManObjects2);
{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.TankmanS2Code.GDTankManObjects2.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDTankManObjects2[i].setScale(1);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("IconM"), gdjs.TankmanS2Code.GDIconMObjects2);

gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TankmanS2Code.mapOfGDgdjs_46TankmanS2Code_46GDIconMObjects2Objects, runtimeScene, true, false);
}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TankmanS", false);
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
gdjs.TankmanS2Code.condition1IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.TankmanS2Code.condition0IsTrue_0.val ) {
{
gdjs.TankmanS2Code.condition1IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}}
if (gdjs.TankmanS2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Control");
}}

}


{



}


};gdjs.TankmanS2Code.eventsList3 = function(runtimeScene) {

{



}


{



}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WhiteBox"), gdjs.TankmanS2Code.GDWhiteBoxObjects1);
{for(var i = 0, len = gdjs.TankmanS2Code.GDWhiteBoxObjects1.length ;i < len;++i) {
    gdjs.TankmanS2Code.GDWhiteBoxObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.TankmanS2Code.condition0IsTrue_0.val = false;
{
gdjs.TankmanS2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.TankmanS2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TankmanS2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.TankmanS2Code.eventsList2(runtimeScene);
}


};

gdjs.TankmanS2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TankmanS2Code.GDTankMan3Objects1.length = 0;
gdjs.TankmanS2Code.GDTankMan3Objects2.length = 0;
gdjs.TankmanS2Code.GDTankMan3Objects3.length = 0;
gdjs.TankmanS2Code.GDTankMan4Objects1.length = 0;
gdjs.TankmanS2Code.GDTankMan4Objects2.length = 0;
gdjs.TankmanS2Code.GDTankMan4Objects3.length = 0;
gdjs.TankmanS2Code.GDTankMan5Objects1.length = 0;
gdjs.TankmanS2Code.GDTankMan5Objects2.length = 0;
gdjs.TankmanS2Code.GDTankMan5Objects3.length = 0;
gdjs.TankmanS2Code.GDTankMan2Objects1.length = 0;
gdjs.TankmanS2Code.GDTankMan2Objects2.length = 0;
gdjs.TankmanS2Code.GDTankMan2Objects3.length = 0;
gdjs.TankmanS2Code.GDTankManObjects1.length = 0;
gdjs.TankmanS2Code.GDTankManObjects2.length = 0;
gdjs.TankmanS2Code.GDTankManObjects3.length = 0;
gdjs.TankmanS2Code.GDDPadBottomObjects1.length = 0;
gdjs.TankmanS2Code.GDDPadBottomObjects2.length = 0;
gdjs.TankmanS2Code.GDDPadBottomObjects3.length = 0;
gdjs.TankmanS2Code.GDDPadRightObjects1.length = 0;
gdjs.TankmanS2Code.GDDPadRightObjects2.length = 0;
gdjs.TankmanS2Code.GDDPadRightObjects3.length = 0;
gdjs.TankmanS2Code.GDDPadLeftObjects1.length = 0;
gdjs.TankmanS2Code.GDDPadLeftObjects2.length = 0;
gdjs.TankmanS2Code.GDDPadLeftObjects3.length = 0;
gdjs.TankmanS2Code.GDDPadUpObjects1.length = 0;
gdjs.TankmanS2Code.GDDPadUpObjects2.length = 0;
gdjs.TankmanS2Code.GDDPadUpObjects3.length = 0;
gdjs.TankmanS2Code.GDAButtonObjects1.length = 0;
gdjs.TankmanS2Code.GDAButtonObjects2.length = 0;
gdjs.TankmanS2Code.GDAButtonObjects3.length = 0;
gdjs.TankmanS2Code.GDBButtonObjects1.length = 0;
gdjs.TankmanS2Code.GDBButtonObjects2.length = 0;
gdjs.TankmanS2Code.GDBButtonObjects3.length = 0;
gdjs.TankmanS2Code.GDTCTextObjects1.length = 0;
gdjs.TankmanS2Code.GDTCTextObjects2.length = 0;
gdjs.TankmanS2Code.GDTCTextObjects3.length = 0;
gdjs.TankmanS2Code.GDStarRoundButtonObjects1.length = 0;
gdjs.TankmanS2Code.GDStarRoundButtonObjects2.length = 0;
gdjs.TankmanS2Code.GDStarRoundButtonObjects3.length = 0;
gdjs.TankmanS2Code.GDMouseObjects1.length = 0;
gdjs.TankmanS2Code.GDMouseObjects2.length = 0;
gdjs.TankmanS2Code.GDMouseObjects3.length = 0;
gdjs.TankmanS2Code.GDNewObjectObjects1.length = 0;
gdjs.TankmanS2Code.GDNewObjectObjects2.length = 0;
gdjs.TankmanS2Code.GDNewObjectObjects3.length = 0;
gdjs.TankmanS2Code.GDTestmanObjects1.length = 0;
gdjs.TankmanS2Code.GDTestmanObjects2.length = 0;
gdjs.TankmanS2Code.GDTestmanObjects3.length = 0;
gdjs.TankmanS2Code.GDIconObjects1.length = 0;
gdjs.TankmanS2Code.GDIconObjects2.length = 0;
gdjs.TankmanS2Code.GDIconObjects3.length = 0;
gdjs.TankmanS2Code.GDBackgroundObjects1.length = 0;
gdjs.TankmanS2Code.GDBackgroundObjects2.length = 0;
gdjs.TankmanS2Code.GDBackgroundObjects3.length = 0;
gdjs.TankmanS2Code.GDSquareJoystickObjects1.length = 0;
gdjs.TankmanS2Code.GDSquareJoystickObjects2.length = 0;
gdjs.TankmanS2Code.GDSquareJoystickObjects3.length = 0;
gdjs.TankmanS2Code.GDIconMObjects1.length = 0;
gdjs.TankmanS2Code.GDIconMObjects2.length = 0;
gdjs.TankmanS2Code.GDIconMObjects3.length = 0;
gdjs.TankmanS2Code.GDWhiteBoxObjects1.length = 0;
gdjs.TankmanS2Code.GDWhiteBoxObjects2.length = 0;
gdjs.TankmanS2Code.GDWhiteBoxObjects3.length = 0;

gdjs.TankmanS2Code.eventsList3(runtimeScene);
return;

}

gdjs['TankmanS2Code'] = gdjs.TankmanS2Code;
