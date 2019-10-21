tocData = [
  ["快速参考","AutoHotkey.htm"],
  ["常见问题(FAQ)","FAQ.htm"],
  ["初学者向导(快速入门)","Tutorial.htm"],
  ["更新历史","ChangeLog.htm"],
  ["脚本展示","scripts/index.htm"],
  ["脚本兼容性(1.*)","Compat.htm"],
  ["函数列表","commands/index.htm"],
  ["使用和语法","",
  [
    ["程序的使用","Program.htm"],
    ["概念和约定","Concepts.htm"],
    ["脚本语言","Language.htm"],
    ["热键","Hotkeys.htm"],
    ["热字串","Hotstrings.htm"],
    ["重映射按键","misc/Remap.htm"],
    ["按键列表","KeyList.htm"],
    ["脚本(杂项)","Scripts.htm"],
    ["变量和表达式","Variables.htm"],
    ["函数","Functions.htm"],
    ["标签","misc/Labels.htm"],
    ["线程","misc/Threads.htm"],
    ["调试客户端","AHKL_DBGPClients.htm"],
    ["对象","Objects.htm",
    [
      ["基本用法","Objects.htm#Usage"],
      ["扩展用法","Objects.htm#Extended_Usage"],
      ["自定义对象","Objects.htm#Custom_Objects"],
      ["Primitive Values","Objects.htm#primitive"],
      ["实现","Objects.htm#Implementation"]
    ]]
  ]],
  ["驱动器", "commands/Drive.htm",
  [
    ["DriveEject", "commands/DriveEject.htm"],
    ["DriveGetCapacity", "commands/DriveGetCapacity.htm"],
    ["DriveGetFileSystem", "commands/DriveGetFileSystem.htm"],
    ["DriveGetLabel", "commands/DriveGetLabel.htm"],
    ["DriveGetList", "commands/DriveGetList.htm"],
    ["DriveGetSerial", "commands/DriveGetSerial.htm"],
    ["DriveGetSpaceFree", "commands/DriveGetSpaceFree.htm"],
    ["DriveGetStatus", "commands/DriveGetStatus.htm"],
    ["DriveGetStatusCD", "commands/DriveGetStatusCD.htm"],
    ["DriveLock", "commands/DriveLock.htm"],
    ["DriveSetLabel", "commands/DriveSetLabel.htm"],
    ["DriveUnlock", "commands/DriveUnlock.htm"],
    ["DriveGetType", "commands/DriveGetType.htm"]
  ]],
  ["环境变量","",
  [
    ["ClipboardAll","commands/ClipboardAll.htm"],
    ["ClipWait","commands/ClipWait.htm"],
    ["EnvGet","commands/EnvGet.htm"],
    ["EnvSet","commands/EnvSet.htm"],
    ["OnClipboardChange","commands/OnClipboardChange.htm"],
    ["SysGet","commands/SysGet.htm"],
    ["SysGetIPAddresses","commands/SysGetIPAddresses.htm"],
  ]],
  ["外部库","",
  [
    ["缓冲对象","objects/Buffer.htm"],
    ["BufferAlloc","commands/BufferAlloc.htm"],
    ["CallbackCreate","commands/CallbackCreate.htm"],
    ["ComCall","commands/ComCall.htm"],
    ["DllCall","commands/DllCall.htm"],
    ["NumGet","commands/NumGet.htm"],
    ["NumPut","commands/NumPut.htm"],
    ["StrGet","commands/StrGet.htm"],
    ["StrPut","commands/StrPut.htm"],
    ["VarSetCapacity","commands/VarSetCapacity.htm"],
    ["COM","",
    [
      ["ComObjActive","commands/ComObjActive.htm"],
      ["ComObjArray","commands/ComObjArray.htm"],
      ["ComCall","commands/ComCall.htm"],
      ["ComObjConnect","commands/ComObjConnect.htm"],
      ["ComObjCreate","commands/ComObjCreate.htm"],
      ["ComObjGet","commands/ComObjGet.htm"],
      ["ComObject","commands/ComObject.htm"],
      ["ComObjError","commands/ComObjError.htm"],
      ["ComObjFlags","commands/ComObjFlags.htm"],
      ["ComObjQuery","commands/ComObjQuery.htm"],
      ["ComObjType","commands/ComObjType.htm"],
      ["ComObjValue","commands/ComObjValue.htm"],
      ["ObjAddRef / ObjRelease","commands/ObjAddRef.htm"]
    ]]
  ]],
  ["文件和目录","",
  [
    ["DirCopy","commands/DirCopy.htm"],
    ["DirCreate","commands/DirCreate.htm"],
    ["DirDelete","commands/DirDelete.htm"],
    ["DirExist","commands/DirExist.htm"],
    ["DirMove","commands/DirMove.htm"],
    ["DirSelect","commands/DirSelect.htm"],
    ["FileAppend","commands/FileAppend.htm"],
    ["FileCopy","commands/FileCopy.htm"],
    ["FileCreateShortcut","commands/FileCreateShortcut.htm"],
    ["FileDelete","commands/FileDelete.htm"],
    ["FileEncoding","commands/FileEncoding.htm"],
    ["FileExist","commands/FileExist.htm"],
    ["FileGetAttrib","commands/FileGetAttrib.htm"],
    ["FileGetShortcut","commands/FileGetShortcut.htm"],
    ["FileGetSize","commands/FileGetSize.htm"],
    ["FileGetTime","commands/FileGetTime.htm"],
    ["FileGetVersion","commands/FileGetVersion.htm"],
    ["FileInstall","commands/FileInstall.htm"],
    ["FileMove","commands/FileMove.htm"],
    ["FileOpen","commands/FileOpen.htm"],
    ["FileRead","commands/FileRead.htm"],
    ["FileRecycle","commands/FileRecycle.htm"],
    ["FileRecycleEmpty","commands/FileRecycleEmpty.htm"],
    ["FileSelect","commands/FileSelect.htm"],
    ["FileSetAttrib","commands/FileSetAttrib.htm"],
    ["FileSetTime","commands/FileSetTime.htm"],
    ["IniDelete","commands/IniDelete.htm"],
    ["IniRead","commands/IniRead.htm"],
    ["IniWrite","commands/IniWrite.htm"],
    ["Long Paths","misc/LongPaths.htm"],
    ["Loop Files (and folders)","commands/LoopFiles.htm"],
    ["Loop Read (file contents)","commands/LoopRead.htm"],
    ["SetWorkingDir","commands/SetWorkingDir.htm"],
    ["SplitPath","commands/SplitPath.htm"]
  ]],
  ["流程控制","",
  [
    ["#Include[Again]","commands/_Include.htm"],
    ["{ ... } (block)","commands/Block.htm"],
    ["Break","commands/Break.htm"],
    ["Catch","commands/Catch.htm"],
    ["Continue","commands/Continue.htm"],
    ["Critical","commands/Critical.htm"],
    ["Else","commands/Else.htm"],
    ["Exit","commands/Exit.htm"],
    ["ExitApp","commands/ExitApp.htm"],
    ["Finally","commands/Finally.htm"],
    ["For-loop","commands/For.htm"],
    ["Gosub","commands/Gosub.htm"],
    ["Goto","commands/Goto.htm"],
    ["If","commands/If.htm"],
    ["Loop","commands/Loop.htm",
    [
      ["Loop","commands/Loop.htm"],
      ["Loop Files (和文件夹)","commands/LoopFiles.htm"],
      ["Loop Parse (字符串)","commands/LoopParse.htm"],
      ["Loop Read (文件内容)","commands/LoopRead.htm"],
      ["Loop Reg (注册表)","commands/LoopReg.htm"]
    ]],
    ["OnError","commands/OnError.htm"],
    ["OnExit","commands/OnExit.htm"],
    ["Pause","commands/Pause.htm"],
    ["Reload","commands/Reload.htm"],
    ["Return","commands/Return.htm"],
    ["SetTimer","commands/SetTimer.htm"],
    ["Sleep","commands/Sleep.htm"],
    ["Suspend","commands/Suspend.htm"],
    ["Switch","commands/Switch.htm"],
    ["Thread","commands/Thread.htm"],
    ["Throw","commands/Throw.htm"],
    ["Try","commands/Try.htm"],
    ["Until","commands/Until.htm"],
    ["While-loop","commands/While.htm"]
  ]],
  ["图形用户界面","",
  [
    ["DirSelect","commands/DirSelect.htm"],
    ["FileSelect","commands/FileSelect.htm"],
    ["Gui 控件类型","commands/GuiControls.htm"],
    ["Gui object","objects/Gui.htm"],
    ["GuiControl object","objects/GuiControl.htm"],
    ["GuiCreate","commands/GuiCreate.htm"],
    ["GuiCtrlFromHwnd","commands/GuiCtrlFromHwnd.htm"],
    ["GuiFromHwnd","commands/GuiFromHwnd.htm"],
    ["Gui ListView control","commands/ListView.htm"],
    ["Gui TreeView control","commands/TreeView.htm"],
    ["Image Handles","misc/ImageHandles.htm"],
    ["InputBox","commands/InputBox.htm"],
    ["LoadPicture","commands/LoadPicture.htm"],
    ["Menu/MenuBar object","objects/Menu.htm"],
    ["MenuBarCreate","commands/MenuBarCreate.htm"],
    ["MenuCreate","commands/MenuCreate.htm"],
    ["MenuFromHandle","commands/MenuFromHandle.htm"],
    ["MsgBox","commands/MsgBox.htm"],
    ["OnMessage","commands/OnMessage.htm"],
    ["Standard Windows Fonts","misc/FontsStandard.htm"],
    ["Styles for a window/control","misc/Styles.htm"],
    ["ToolTip","commands/ToolTip.htm"],
    ["TraySetIcon","commands/TraySetIcon.htm"],
    ["TrayTip","commands/TrayTip.htm"]
  ]],
  ["数学","commands/Math.htm",
  [
    ["Abs","commands/Math.htm#Abs"],
    ["Ceil","commands/Math.htm#Ceil"],
    ["DateAdd","commands/DateAdd.htm"],
    ["DateDiff","commands/DateDiff.htm"],
    ["Exp","commands/Math.htm#Exp"],
    ["Float","commands/Float.htm"],
    ["Floor","commands/Math.htm#Floor"],
    ["Integer","commands/Integer.htm"],
    ["Log","commands/Math.htm#Log"],
    ["Ln","commands/Math.htm#Ln"],
    ["Max","commands/Math.htm#Max"],
    ["Min","commands/Math.htm#Min"],
    ["Mod","commands/Math.htm#Mod"],
    ["Random","commands/Random.htm"],
    ["Round","commands/Math.htm#Round"],
    ["Sqrt","commands/Math.htm#Sqrt"],
    ["Sin/Cos/Tan","commands/Math.htm#Sin"],
    ["ASin/ACos/ATan","commands/Math.htm#ASin"]
  ]],
  ["监视器","commands/Monitor.htm",
  [
    ["MonitorGet","commands/MonitorGet.htm"],
    ["MonitorGetCount","commands/MonitorGetCount.htm"],
    ["MonitorGetName","commands/MonitorGetName.htm"],
    ["MonitorGetPrimary","commands/MonitorGetPrimary.htm"],
    ["MonitorGetWorkArea","commands/MonitorGetWorkArea.htm"]
  ]],
  ["鼠标和键盘","",
  [
    ["热键和热字串","Hotkeys.htm",
    [
      ["#HotkeyInterval","commands/_HotkeyInterval.htm"],
      ["#HotkeyModifierTimeout","commands/_HotkeyModifierTimeout.htm"],
      ["#Hotstring","commands/_Hotstring.htm"],
      ["#If","commands/_If.htm"],
      ["#IfTimeOut","commands/_IfTimeout.htm"],
      ["#InputLevel","commands/_InputLevel.htm"],
      ["#MaxHotkeysPerInterval","commands/_MaxHotkeysPerInterval.htm"],
      ["#MaxThreads","commands/_MaxThreads.htm"],
      ["#MaxThreadsBuffer","commands/_MaxThreadsBuffer.htm"],
      ["#MaxThreadsPerHotkey","commands/_MaxThreadsPerHotkey.htm"],
      ["#MenuMaskKey","commands/_MenuMaskKey.htm"],
      ["#SuspendExempt","commands/_SuspendExempt.htm"],
      ["#UseHook","commands/_UseHook.htm"],
      ["Hotkey","commands/Hotkey.htm"],
      ["Hotstring","commands/Hotstring.htm"],
      ["Hotstrings & auto-replace","Hotstrings.htm"],
      ["ListHotkeys","commands/ListHotkeys.htm"],
      ["Suspend","commands/Suspend.htm"]
    ]],
    ["#InstallKeybdHook","commands/_InstallKeybdHook.htm"],
    ["#InstallMouseHook","commands/_InstallMouseHook.htm"],
    ["#KeyHistory","commands/_KeyHistory.htm"],
    ["BlockInput","commands/BlockInput.htm"],
    ["CaretGetPos","commands/CaretGetPos.htm"],
    ["Click","commands/Click.htm"],
    ["ControlClick","commands/ControlClick.htm"],
    ["ControlSend[Raw]","commands/ControlSend.htm"],
    ["CoordMode","commands/CoordMode.htm"],
    ["GetKeyName","commands/GetKeyName.htm"],
    ["GetKeySC","commands/GetKeySC.htm"],
    ["GetKeyState","commands/GetKeyState.htm"],
    ["GetKeyVK","commands/GetKeyVK.htm"],
    ["List of Keys","KeyList.htm"],
    ["KeyHistory","commands/KeyHistory.htm"],
    ["KeyWait","commands/KeyWait.htm"],
    ["Input","commands/Input.htm"],
    ["InputHook","commands/InputHook.htm"],
    ["MouseClick","commands/MouseClick.htm"],
    ["MouseClickDrag","commands/MouseClickDrag.htm"],
    ["MouseGetPos","commands/MouseGetPos.htm"],
    ["MouseMove","commands/MouseMove.htm"],
    ["Send[Raw|Input|Play|Event]","commands/Send.htm"],
    ["SendLevel","commands/SendLevel.htm"],
    ["SendMode","commands/SendMode.htm"],
    ["SetCapsLockState","commands/SetNumScrollCapsLockState.htm"],
    ["SetDefaultMouseSpeed","commands/SetDefaultMouseSpeed.htm"],
    ["SetKeyDelay","commands/SetKeyDelay.htm"],
    ["SetMouseDelay","commands/SetMouseDelay.htm"],
    ["SetNumLockState","commands/SetNumScrollCapsLockState.htm"],
    ["SetScrollLockState","commands/SetNumScrollCapsLockState.htm"],
    ["SetStoreCapsLockMode","commands/SetStoreCapsLockMode.htm"]
  ]],
  ["杂项","",
  [
    ["Download","commands/Download.htm"],
    ["Edit","commands/Edit.htm"],
    ["Func","commands/Func.htm"],
    ["GetMethod","commands/GetMethod.htm"],
    ["HasBase","commands/HasBase.htm"],
    ["HasMethod","commands/HasMethod.htm"],
    ["HasProp","commands/HasProp.htm"],
    ["IsByRef","commands/IsByRef.htm"],
    ["IsFunc","commands/IsFunc.htm"],
    ["IsLabel","commands/IsLabel.htm"],
    ["IsObject","commands/IsObject.htm"],
    ["IsSet","commands/IsSet.htm"],
    ["ListLines","commands/ListLines.htm"],
    ["ListVars","commands/ListVars.htm"],
    ["OutputDebug","commands/OutputDebug.htm"],
    ["VarSetCapacity","commands/VarSetCapacity.htm"]
  ]],
  ["对象类型","",
  [
    ["对象","objects/Object.htm"],
    ["数组对象","objects/Array.htm"],
    ["缓冲对象","objects/Buffer.htm"],
    ["Class 对象","objects/Class.htm"],
    ["枚举器对象 ","objects/Enumerator.htm"],
    ["异常对象","commands/Throw.htm#Exception"],
    ["文件对象","objects/File.htm"],
    ["Func 对象","objects/Func.htm"],
    ["函数对象","objects/Functor.htm"],
    ["Gui 对象","objects/Gui.htm"],
    ["GuiControl 对象","objects/GuiControl.htm"],
    ["Map 对象","objects/Map.htm"],
    ["Menu/MenuBar 对象","objects/Menu.htm"],
    ["正则匹配对象","commands/RegExMatch.htm#MatchObject"],
    ["Any Prototype","objects/Any.htm"]
  ]],
  ["进程","commands/Process.htm",
  [
    ["ProcessClose","commands/ProcessClose.htm"],
    ["ProcessExist","commands/ProcessExist.htm"],
    ["ProcessSetPriority","commands/ProcessSetPriority.htm"],
    ["ProcessWait","commands/ProcessWait.htm"],
    ["ProcessWaitClose","commands/ProcessWaitClose.htm"],
    ["Run[Wait]","commands/Run.htm"],
    ["RunAs","commands/RunAs.htm"],
    ["Shutdown","commands/Shutdown.htm"]
  ]],
  ["注册表","",
  [
    ["Loop Reg","commands/LoopReg.htm"],
    ["RegDelete","commands/RegDelete.htm"],
    ["RegDeleteKey","commands/RegDeleteKey.htm"],
    ["RegRead","commands/RegRead.htm"],
    ["RegWrite","commands/RegWrite.htm"],
    ["SetRegView","commands/SetRegView.htm"]
  ]],
  ["屏幕","",
  [
    ["ImageSearch","commands/ImageSearch.htm"],
    ["PixelGetColor","commands/PixelGetColor.htm"],
    ["PixelSearch","commands/PixelSearch.htm"]
  ]],
  ["声音","",
  [
    ["SoundBeep","commands/SoundBeep.htm"],
    ["SoundGet","commands/SoundGet.htm"],
    ["SoundPlay","commands/SoundPlay.htm"],
    ["SoundSet","commands/SoundSet.htm"]
  ]],
  ["字符串","",
  [
    ["Chr","commands/Chr.htm"],
    ["Format","commands/Format.htm"],
    ["FormatTime","commands/FormatTime.htm"],
    ["InStr","commands/InStr.htm"],
    ["Loop Parse (strings)","commands/LoopParse.htm"],
    ["Ord","commands/Ord.htm"],
    ["RegEx Quick Reference","misc/RegEx-QuickRef.htm"],
    ["RegExMatch","commands/RegExMatch.htm"],
    ["RegExReplace","commands/RegExReplace.htm"],
    ["Sort","commands/Sort.htm"],
    ["StrCompare","commands/StrCompare.htm"],
    ["String","commands/String.htm"],
    ["StringCaseSense","commands/StringCaseSense.htm"],
    ["StrLower/StrUpper","commands/StrLower.htm"],
    ["StrLen","commands/StrLen.htm"],
    ["StrGet","commands/StrGet.htm"],
    ["StrPut","commands/StrPut.htm"],
    ["StrReplace","commands/StrReplace.htm"],
    ["StrSplit","commands/StrSplit.htm"],
    ["SubStr","commands/SubStr.htm"],
    ["Trim","commands/Trim.htm"]
  ]],
  ["窗口","commands/Win.htm",
  [
    ["Controls","commands/Control.htm",
    [
      ["ControlAddItem","commands/ControlAddItem.htm"],
      ["ControlChoose","commands/ControlChoose.htm"],
      ["ControlChooseString","commands/ControlChooseString.htm"],
      ["ControlClick","commands/ControlClick.htm"],
      ["ControlDeleteItem","commands/ControlDeleteItem.htm"],
      ["ControlEditPaste","commands/ControlEditPaste.htm"],
      ["ControlFindItem","commands/ControlFindItem.htm"],
      ["ControlFocus","commands/ControlFocus.htm"],
      ["ControlGetChecked","commands/ControlGetChecked.htm"],
      ["ControlGetChoice","commands/ControlGetChoice.htm"],
      ["ControlGetClassNN","commands/ControlGetClassNN.htm"],
      ["ControlGetCurrentCol","commands/ControlGetCurrentCol.htm"],
      ["ControlGetCurrentLine","commands/ControlGetCurrentLine.htm"],
      ["ControlGetEnabled","commands/ControlGetEnabled.htm"],
      ["ControlGetFocus","commands/ControlGetFocus.htm"],
      ["ControlGetHwnd","commands/ControlGetHwnd.htm"],
      ["ControlGetLine","commands/ControlGetLine.htm"],
      ["ControlGetLineCount","commands/ControlGetLineCount.htm"],
      ["ControlGetList","commands/ControlGetList.htm"],
      ["ControlGetPos","commands/ControlGetPos.htm"],
      ["ControlGetSelected","commands/ControlGetSelected.htm"],
      ["ControlGet[Ex]Style","commands/ControlGetStyle.htm"],
      ["ControlGetTab","commands/ControlGetTab.htm"],
      ["ControlGetText","commands/ControlGetText.htm"],
      ["ControlGetVisible","commands/ControlGetVisible.htm"],
      ["ControlHide","commands/ControlHide.htm"],
      ["ControlHideDropDown","commands/ControlHideDropDown.htm"],
      ["ControlMove","commands/ControlMove.htm"],
      ["ControlSend[Text]","commands/ControlSend.htm"],
      ["ControlSetChecked","commands/ControlSetChecked.htm"],
      ["ControlSetEnabled","commands/ControlSetEnabled.htm"],
      ["ControlSet[Ex]Style","commands/ControlSetStyle.htm"],
      ["ControlSetTab","commands/ControlSetTab.htm"],
      ["ControlSetText","commands/ControlSetText.htm"],
      ["ControlShow","commands/ControlShow.htm"],
      ["ControlShowDropDown","commands/ControlShowDropDown.htm"],
      ["MenuSelect","commands/MenuSelect.htm"],
      ["PostMessage","commands/PostMessage.htm"],
      ["SendMessage","commands/SendMessage.htm"],
      ["SetControlDelay","commands/SetControlDelay.htm"]
    ]],
    ["Window Groups","",
    [
      ["GroupActivate","commands/GroupActivate.htm"],
      ["GroupAdd","commands/GroupAdd.htm"],
      ["GroupClose","commands/GroupClose.htm"],
      ["GroupDeactivate","commands/GroupDeactivate.htm"]
    ]],
    ["Window Titles","misc/WinTitle.htm"],
    ["#WinActivateForce","commands/_WinActivateForce.htm"],
    ["DetectHiddenText","commands/DetectHiddenText.htm"],
    ["DetectHiddenWindows","commands/DetectHiddenWindows.htm"],
    ["SetTitleMatchMode","commands/SetTitleMatchMode.htm"],
    ["SetWinDelay","commands/SetWinDelay.htm"],
    ["StatusBarGetText","commands/StatusBarGetText.htm"],
    ["StatusBarWait","commands/StatusBarWait.htm"],
    ["WinActivate","commands/WinActivate.htm"],
    ["WinActivateBottom","commands/WinActivateBottom.htm"],
    ["WinActive","commands/WinActive.htm"],
    ["WinClose","commands/WinClose.htm"],
    ["WinExist","commands/WinExist.htm"],
    ["WinGetClass","commands/WinGetClass.htm"],
    ["WinGetClientPos","commands/WinGetClientPos.htm"],
    ["WinGetControls","commands/WinGetControls.htm"],
    ["WinGetControlsHwnd","commands/WinGetControlsHwnd.htm"],
    ["WinGetCount","commands/WinGetCount.htm"],
    ["WinGetID","commands/WinGetID.htm"],
    ["WinGetIDLast","commands/WinGetIDLast.htm"],
    ["WinGetList","commands/WinGetList.htm"],
    ["WinGetMinMax","commands/WinGetMinMax.htm"],
    ["WinGetPID","commands/WinGetPID.htm"],
    ["WinGetPos","commands/WinGetPos.htm"],
    ["WinGetProcessName","commands/WinGetProcessName.htm"],
    ["WinGetProcessPath","commands/WinGetProcessPath.htm"],
    ["WinGet[Ex]Style","commands/WinGetStyle.htm"],
    ["WinGetText","commands/WinGetText.htm"],
    ["WinGetTitle","commands/WinGetTitle.htm"],
    ["WinGetTransColor","commands/WinGetTransColor.htm"],
    ["WinGetTransparent","commands/WinGetTransparent.htm"],
    ["WinHide","commands/WinHide.htm"],
    ["WinKill","commands/WinKill.htm"],
    ["WinMaximize","commands/WinMaximize.htm"],
    ["WinMinimize","commands/WinMinimize.htm"],
    ["WinMinimizeAll[Undo]","commands/WinMinimizeAll.htm"],
    ["WinMove","commands/WinMove.htm"],
    ["WinMoveBottom","commands/WinMoveBottom.htm"],
    ["WinMoveTop","commands/WinMoveTop.htm"],
    ["WinRedraw","commands/WinRedraw.htm"],
    ["WinRestore","commands/WinRestore.htm"],
    ["WinSetAlwaysOnTop","commands/WinSetAlwaysOnTop.htm"],
    ["WinSetEnabled","commands/WinSetEnabled.htm"],
    ["WinSetRegion","commands/WinSetRegion.htm"],
    ["WinSet[Ex]Style","commands/WinSetStyle.htm"],
    ["WinSetTitle","commands/WinSetTitle.htm"],
    ["WinSetTransColor","commands/WinSetTransColor.htm"],
    ["WinSetTransparent","commands/WinSetTransparent.htm"],
    ["WinShow","commands/WinShow.htm"],
    ["WinWait","commands/WinWait.htm"],
    ["WinWait[Not]Active","commands/WinWaitActive.htm"],
    ["WinWaitClose","commands/WinWaitClose.htm"]
  ]],
  ["#指令","",
  [
    ["#ClipboardTimeout","commands/_ClipboardTimeout.htm"],
    ["#DllLoad","commands/_DllLoad.htm"],
    ["#ErrorStdOut","commands/_ErrorStdOut.htm"],
    ["#HotkeyInterval","commands/_HotkeyInterval.htm"],
    ["#HotkeyModifierTimeout","commands/_HotkeyModifierTimeout.htm"],
    ["#Hotstring","commands/_Hotstring.htm"],
    ["#If","commands/_If.htm"],
    ["#IfTimeout","commands/_IfTimeout.htm"],
    ["#Include[Again]","commands/_Include.htm"],
    ["#InputLevel","commands/_InputLevel.htm"],
    ["#InstallKeybdHook","commands/_InstallKeybdHook.htm"],
    ["#InstallMouseHook","commands/_InstallMouseHook.htm"],
    ["#KeyHistory","commands/_KeyHistory.htm"],
    ["#MaxHotkeysPerInterval","commands/_MaxHotkeysPerInterval.htm"],
    ["#MaxThreads","commands/_MaxThreads.htm"],
    ["#MaxThreadsBuffer","commands/_MaxThreadsBuffer.htm"],
    ["#MaxThreadsPerHotkey","commands/_MaxThreadsPerHotkey.htm"],
    ["#MenuMaskKey","commands/_MenuMaskKey.htm"],
    ["#NoTrayIcon","commands/_NoTrayIcon.htm"],
    ["#Persistent","commands/_Persistent.htm"],
    ["#SingleInstance","commands/_SingleInstance.htm"],
    ["#UseHook","commands/_UseHook.htm"],
    ["#Warn","commands/_Warn.htm"],
    ["#WinActivateForce","commands/_WinActivateForce.htm"]
  ]]
];
