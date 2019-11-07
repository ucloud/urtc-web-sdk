# UCloudRTC Web SDK API 说明

UCloudRTC 包含以下方法、类或对象：

* [Client 类](#client)
* [getDevices 方法](#getdevices)
* [getSupportProfileNames 方法](#getsupportprofilenames)
* [version 属性](#version)
* [genToken 方法](#genToken)
* [Logger 对象](#logger)
* [setServers 方法](#setservers)

---

## 一、Client 类 <a name='client'></a>

Client 类包含以下方法：

* [构建函数](#client-constructor)
* [joinRoom 方法](#client-joinroom)
* [leaveRoom 方法](#client-leaveroom)
* [publish 方法](#client-publish)
* [unpublish 方法](#client-unpublish)
* [subscribe 方法](#client-subscribe)
* [unsubscribe 方法](#client-unsubscribe)
* [on 方法](#client-on)
* [off 方法](#client-off)
* [muteAudio 方法](#client-muteaudio)
* [unmuteAudio 方法](#client-unmuteaudio)
* [muteVideo 方法](#client-mutevideo)
* [unmuteVideo 方法](#client-unmutevideo)
* [startRecording 方法](#client-startrecording)
* [stopRecording 方法](#client-stoprecording)
* [getUser 方法](#client-getuser)
* [getUsers 方法](#client-getusers)
* [getStream 方法](#client-getstream)
* [getStreams 方法](#client-getstreams)
* [getLocalMediaStream 方法](#client-getlocalmediastream)
* [getRemoteMediaStream 方法](#client-getremotemediastream)
* [getMicrophones 方法](#client-getmicrophones)
* [getCameras 方法](#client-getcameras)
* [getLoudspeakers 方法](#client-getloudspeakers)
* [setVideoProfile 方法](#client-setvideoprofile)
* [switchDevice 方法](#client-switchdevice)
* [getAudioVolume 方法](#client-getaudiovolume)
* [getAudioStats 方法](#client-getaudiostats)
* [getVideoStats 方法](#client-getvideostats)
* [getNetworkStats 方法](#client-getnetworkstats)

### 1. 构建函数 <a name="client-constructor"></a>

用于创建一个 URTC Client 对象，示例代码：

```
new Client(AppId, Token, Options);
```

#### 参数说明

- AppId: string 类型, 必传，可从 UCloud 控制台查看

- Token: string 类型, 必传，需按规则生成，测试阶段，可使用 [genToken](#genToken) 临时生成

- Options: object 类型, 选传，类型说明如下

```
{
  type?: "live"|"rtc",  // 选填，设置房间类型，有两种 "live" 和 "rtc" 类型可选 ，分别对应直播模式和连麦模式，默认为 live
  role?: "pull" | "push" | "push-and-pull",   // 选填，设置用户角色，可设 "pull" | "push" | "push-and-pull" 三种角色，分别对应拉流、推流、推+拉流，默认为 "pull"，特别地，当房间类型为连麦模式时，此参数将被忽视，会强制为 "push-and-pull"，即推+拉流
  codec?: "vp8"|"h264", // 选填，设置视频编码格式，可设 "vp8" 或 "h264"，默认为 "vp8"
}
```

### 2. joinRoom 方法 <a name="client-joinroom"></a>

加入房间，示例代码：

```
client.joinRoom(RoomId, UserId, onSuccess, onFailure)
```

#### 参数说明

- RoomId: string 类型，必传，房间号

- UserId: string 类型，必传，用户ID

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(User) {}
```

函数参数 User 为返回值，Object 类型，为用户信息。User 类型说明如下

<a name='user'></a>
```
{
  uid: string   // 为用户ID
}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

### 3. leaveRoom 方法 <a name="client-leaveroom"></a>

离开房间，示例代码：

```
client.leaveRoom(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(User) {}
```

函数参数 User 为返回值，类型说明见 [User](#user)

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

### 4. publish 方法 <a name="client-publish"></a>

发布本地流，示例代码：

```
client.publish(Options, onSuccess, onFailure)
```

#### 参数说明

- Options: object 类型，选传，类型说明如下

```
{
  audio: boolean          // 必填，指定是否使用麦克风设备
  video: boolean          // 必填，指定是否使用摄像头设备
  screen: boolean         // 必填，Boolean 类型，指定是否为桌面共享，注：暂未开放，默认为 false
  microphoneId?: string   // 选填，指定使用的麦克风设备的ID，可通过 getMicrophones 方法查询获得该ID，不填时，将使用默认麦克风设备
  cameraId?: string       // 选填，指定使用的摄像头设备的ID，可以通过 getCameras 方法查询获得该ID，不填时，将使用默认的摄像头设备
}
```

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(Stream) {}
```

函数参数 Stream 为返回值，Object 类型，为流信息。Stream 类型说明如下

<a name='stream'></a>
```
{
  sid: string                     // 流ID
  uid: string                     // 对应的用户的ID
  type: 'publish'|'subscribe'     // 流类型，分别为 publish 和 subscribe 两种，
  video: boolean                  // 是否包含音频
  audio: boolean                  // 是否包含视频
  muteAudio: boolean              // 音频是否静音
  muteVideo: boolean              // 视频是否静音
  mediaStream?: MediaStream       // 使用的媒体流，可用 HTMLVideoElement 进行播放，此属性的值可能为空，当流被正常发布或订阅流，此值有效
}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

### 5. unpublish 方法 <a name="client-unpublish"></a>

取消发布本地流，示例代码：

```
client.unpublish(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(Stream) {}
```

函数参数 Stream 为返回值，Object 类型，为流信息，类型说明见 [Stream](#stream)

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

### 6. subscribe 方法 <a name="client-subscribe"></a>

订阅远端流，，示例代码：

```
client.subscribe(StreamId, onSuccess, onFailure)
```

#### 参数说明

- StreamId: string 类型，必传，为需要订阅的远端流的 sid
- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(Stream) {}
```

函数参数 Stream 为返回值，Object 类型，为流信息，类型说明见 [Stream](#stream)

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


### 7. unsubscribe 方法 <a name="client-unsubscribe"></a>

取消订阅远端流，示例代码：

```
client.unsubscribe(StreamId, onSuccess, onFailure)
```

#### 参数说明

- StreamId: string 类型，必传，为需要订阅的远端流的 sid
- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(Stream) {}
```

函数参数 Stream 为返回值，Object 类型，为流信息，类型说明见 [Stream](#stream)

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


### 8. on 方法 <a name="client-on"></a>

给事件绑定监听函数，示例代码：

```
client.on(EventType, Listener)
```

#### 参数说明

- EventType: string 类型， 必传，目前有 'user-added' | 'user-removed' |
  'stream-added'|'stream-removed'| 'stream-published' | 'stream-subscribed' |
  'mute-video' | 'unmute-video' | 'mute-audio' | 'unmute-audio' 这些事件可绑定监听函数
- Listener: function 类型，事件监听函数
  - 当事件类型为 'user-added' | 'user-removed' 时，可用 `function Listener(User) {}` 类型的函数，其中函数的参数类型见 [User](#user)
  - 当事件类型为 'stream-added'|'stream-removed'| 'stream-published' | 'stream-subscribed' | 'mute-video' | 'unmute-video' | 'mute-audio' | 'unmute-audio' 时，可用 `function Listener(Stream) {}` 类型的函数，其中函数的参数类型见 [Stream](#stream)

### 9. off 方法 <a name="client-off"></a>

解除绑定事件的监听函数，示例代码：

```
client.off(EventType, Listener)
```

#### 参数说明

- EventType: 参见 on 方法
- Listener: 为调用 on 方法时绑定的监听函数

### 10. muteAudio 方法 <a name="client-muteaudio"></a>

关闭本地流的音频，示例代码：

```
const result = client.muteAudio()
```

#### 返回值说明

- result: boolean 类型，成功时为 true，失败时为 false


### 11. unmuteAudio 方法 <a name="client-unmuteaudio"></a>

启用本地流的音频，示例代码：

```
const result = client.unmuteAudio()
```

#### 返回值说明

- result: boolean 类型，成功时为 true，失败时为 false

### 12. muteVideo 方法 <a name="client-mutevideo"></a>

关闭本地流的视频，示例代码：

```
const result = client.muteVideo()
```

#### 返回值说明

- result: boolean 类型，成功时为 true，失败时为 false


### 13. unmuteVideo 方法 <a name="client-unmutevideo"></a>

启用本地流的视频，示例代码：

```
const result = client.unmuteVideo()
```

#### 返回值说明

- result: boolean 类型，成功时为 true，失败时为 false

### 14. startRecording 方法 <a name="client-startrecording"></a>

开始录制音视频，示例代码：

```
client.startRecording(RecordOptions, onSuccess, onFailure)
```

#### 参数说明

- RecordOptions: object 类型，必传，录制的配置信息，类型说明如下

```
{
  waterMarkPosition: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom'    // 必填，指定水印的位置，前面四种类型分别对应 左上，左下，右上，右下
  bucket: string  // 存储的 bucket, URTC 使用 UCloud 的 UFile 产品进行在存储，相关信息见控制台操作文档
  region: string  // 存储服务所在的地域
}
```
- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下
```
function onSuccess(Record) {}
```

函数参数 Record 为返回值，Object 类型，为流信息，类型说明如下
```
{
  FileName: string  // 录制到的文件的名称
  RecordId: string  // 录制 ID
}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

### 15. stopRecording 方法 <a name="client-stoprecording"></a>

停止录制音视频，示例代码：

```
client.stopRecording(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下
```
function onSuccess() {}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


### 16. getUser 方法 <a name="client-getuser"></a>

获取本地用户的信息，示例代码：

```
const result = client.getUser()
```

#### 返回值说明

- result: User 类型，类型说明见 [User](#user)

### 17. getUsers 方法 <a name="client-getusers"></a>

获取当前加入房间的远端用户的信息，示例代码：

```
const result = client.getUsers()
```

#### 返回值说明

- result: User 类型的数组，User 类型说明见 [User](#user)


### 18. getStream 方法 <a name="client-getstream"></a>

获取本地发布流的信息，示例代码：

```
const result = client.getStream()
```

#### 返回值说明

- result: Stream 类型，Stream 类型说明见 [Stream](#stream)


### 19. getStreams 方法 <a name="client-getstreams"></a>

获取订阅流（远端流）的信息，示例代码：

```
const result = client.getStreams()
```

#### 返回值说明

- result: Stream 类型的数组，Stream 类型说明见 [Stream](#stream)


### 20. getLocalMediaStream 方法 <a name="client-getlocalmediastream"></a>

获取本地流对应的媒体流，示例代码：
```
const result = client.getLocalMediaStream()
```

#### 返回值说明

- result: MediaStream 类型，类型说明见 [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream)


### 21. getRemoteMediaStream 方法 <a name="client-unpugetremotemediastreamblish"></a> 

获取订阅流（远端流）对应的媒体流，示例代码：
```
const result = client.getLocalMediaStream()
```

#### 返回值说明

- result: MediaStream 类型，类型说明见 [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream)


### 22. getMicrophones 方法 <a name="client-getmicrophones"></a>

获取麦克风设备，示例代码：

```
client.getMicrophones(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下
```
function onSuccess(MediaDeviceInfos) {}
```

函数参数 MediaDeviceInfos 为返回值，为 MediaDeviceInfo 类型的数组，点击 [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) 查看 MediaDeviceInfo 详情


- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

### 23. getCameras 方法 <a name="client-getcameras"></a>

获取摄像头设备，示例代码：

```
client.getCameras(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下
```
function onSuccess(MediaDeviceInfos) {}
```

函数参数 MediaDeviceInfos 为返回值，为 MediaDeviceInfo 类型的数组，点击 [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) 查看 MediaDeviceInfo 详情


- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

### 24. getLoudspeakers 方法 <a name="client-getloudspeakers"></a>

获取音响/声音输出设备，示例代码：

```
client.getLoudspeakers(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下
```
function onSuccess(MediaDeviceInfos) {}
```

函数参数 MediaDeviceInfos 为返回值，为 MediaDeviceInfo 类型的数组，点击 [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) 查看 MediaDeviceInfo 详情


- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


### 25. setVideoProfile 方法 <a name="client-setvideoprofile"></a>

设置视频的 profile，限制 client 使用的视频大小、帧率、带宽等，示例代码：

```
client.setVideoProfile(Profile, onSuccess, onFailure)
```

#### 参数说明

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下
```
function onSuccess() {}
```
- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


### 26. switchDevice 方法 <a name="client-switchdevice"></a>

当本地流已经发布，可通过此方法来改变当前正在使用的音频或视频采集设备，示例代码：

```
client.switchDevice(DeviceType, DeviceId, onSuccess, onFailure)
```

#### 参数说明
- DeviceType: string 类型，有 'audio' | 'video' 两种可选
- DeviceId: string 类型，设备ID，可通过 sdk 的 getDevices 方法或 client 的 getMicrophones 和 getCameras 方法获取

- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下
```
function onSuccess() {}
```
- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


### 27. getAudioVolume 方法 <a name="client-getaudiovolume"></a>

获取流的音量大小，返回值范围 [0,100]，示例代码：

```
client.getAudioVolume(StreamId)
```

#### 参数说明

- StreamId: string 类型，可选，本地或远端流的 ID 即 [Stream](#stream) 的 sid 属性值，当不传时，默认获取本地流的音量大小

### 28. getAudioStats 方法 <a name="client-getaudiostats"></a>

获取流的音频状态，示例代码：

```
client.getAudioStats(StreamId, onSuccess, onFailure)
```

#### 参数说明

- StreamId: string 类型，可选，本地或远端流的 ID 即 [Stream](#stream) 的 sid 属性值，当不传时，默认获取本地流的音频状态
  
- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(AudioStats) {}
```
函数参数 AudioStats 为返回值，为 object 类型，类型说明如下：
```
{
  br: number        // 码率
  lostpre: number   // 丢包率
  vol: number       // 声音大小
  mime: string      // 编码格式，固定为 opus
}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


### 29. getVideoStats 方法 <a name="client-getvideostats"></a>

获取流的视频状态，示例代码：

```
client.getVideoStats(StreamId, onSuccess, onFailure)
```

#### 参数说明

- StreamId: string 类型，可选，本地或远端流的 ID 即 [Stream](#stream) 的 sid 属性值，当不传时，默认获取本地流的视频状态
  
- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(VideoStats) {}
```
函数参数 VideoStats 为返回值，为 object 类型，类型说明如下：
```
{
  br: number        // 码率
  lostpre: number   // 丢包率
  frt: number       // 帧率
  w: number         // 视频宽度
  h: number         // 视频高度
  mime: string      // 编码格式，'vp8' 或 'h264'
}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息


### 30. getNetworkStats 方法 <a name="client-getnetworkstats"></a>

获取流的网络状态，示例代码：

```
client.getNetworkStats(StreamId, onSuccess, onFailure)
```

#### 参数说明

- StreamId: string 类型，可选，本地或远端流的 ID 即 [Stream](#stream) 的 sid 属性值，当不传时，默认获取本地流的网络状态
  
- onSuccess: function 类型，选传，方法调用成功时执行的回调函数，函数说明如下

```
function onSuccess(NetworkStats) {}
```
函数参数 NetworkStats 为返回值，为 object 类型，类型说明如下：
```
{
  rtt: number   //  往返时延，单位 ms
}
```

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

----

## 二、getDevices 方法 <a name='getdevices'></a>

用于获取当前浏览器可访问的音视频设备的设备信息，包括麦克风、摄像头、视频输出设备

```
getDevices(onSuccess, onFailure)
```

#### 参数说明

- onSuccess: 必传，函数类型，方法调用成功时执行的回调函数。

```
function(MediaDeviceInfos) {}
```

函数参数 MediaDeviceInfos 为返回值，MediaDeviceInfo 类型的数组，为一组输入、输出设备的描述信息，点击
[MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) 查看其详情。

- onFailure: 选传，函数类型，方法调用失败时执行的回调函数。

```
function(Err) {}
```
Err 为错误信息

----

## 三、getSupportProfileNames 方法 <a name='getsupportprofilenames'></a>

用于获取当前 SDK 支持的视频质量的名称

```
const profileNames = getSupportProfileNames();
```

#### 返回值说明

profileNames: String 类型的数组，如当前可用的 ["240\*180", "480\*360", "640\*360", "640\*480", "1280\*720", "1920\*1080"]

名称 | 视频宽高 | 帧率 | 视频最大带宽
-|-|-|-
"240\*180" | 240\*180 | 20 | 200
"480\*360" | 480\*360 | 20 | 300
"640\*360" | 640\*360 | 20 | 400
"640\*480" | 640\*480 | 20 | 500
"1280\*720" | 1280\*720 | 20 | 1000
"1920\*1080" | 1920\*1080 | 20 | 1500

---

## 四、version 属性 <a name='version'></a>

version 属性用于显示当前 sdk 的版本

---

## 五、genToken 方法 <a name='genToken'></a>

genToken 方法仅用于试用 URTC 产品时替代服务器生成 sdk 所需 token 的方法，正式使用 URTC 产品时，需要搭建后台服务按规则生成 token

```
const token = genToken(AppId, AppKey, RoomId, UserId);
```

#### 参数说明

- AppId: string 类型, 必传，可从 UCloud 控制台查看

- AppKey: string 类型, 必传，可从 UCloud 控制台查看（请注意此 AppKey 不可暴露给其他人）

- RoomId: string 类型, 必传，将要加入的房间的 ID

- UserId: string 类型，必传，将要加入的用户的 ID

---

## 六、Logger 对象 <a name='logger'></a>

Logger 对象用于调试时打印内部日志，包含以下方法：

* [setLogLevel 方法](#logger-setloglevel)
* [debug 方法](#logger-debug)
* [info 方法](#logger-info)
* [warn 方法](#logger-warn)
* [error 方法](#logger-error)

### 1. setLogLevel 方法 <a name='logger-setloglevel'></a>

用于设置 Logger 打印日志的级别

```
Logger.setLogLevel(Level)
```

#### 参数说明

Level: 必传，有 "debug" | "info" | "warn" | "error" 四个日志级别，默认为 "error" 级别

### 2. debug 方法 <a name='logger-debug'></a>

用于调试代码时，打印 debug 日志

```
Logger.debug(a, ...)  // 可传任意数量的任意类型的变量作为参数
```

### 3. info 方法 <a name='logger-info'></a>
### 4. warn 方法 <a name='logger-warn'></a>
### 5. error 方法 <a name='logger-error'></a>

以上三种方法分别打印对应级别的日志，使用方法与 debug 方法相同

---

## 七、setServers 方法 <a name='setservers'></a>

可配置 URTC 服务的域名，用于私有化部署，目前有房间服务器和日志服务器的两种域名可进行配置，示例代码：

```
setServers({
  api: "https://env1.urtc.com",   // api 为 URTC 房间服务的访问域名
  log: "https://env1.urtclog.com" // log 为 URTC 日志服务器的访问域名
})
```
