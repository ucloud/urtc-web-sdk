// Generated by dts-bundle v0.7.3

declare module 'urtc-sdk' {
  import Logger from '__urtc-sdk/logger';
  import Client from '__urtc-sdk/client';
  import { setServers } from '__urtc-sdk/server';
  import { getSupportProfileNames } from '__urtc-sdk/resolutions';
  import { version } from '__urtc-sdk/version';
  import { genToken } from '__urtc-sdk/token';
  import { Codecs, DeviceDetectionOptions, DeviceDetectionResult, GetDevicesOptions } from '__urtc-sdk/types';
  export * from '__urtc-sdk/types';
  function getDevices(opts: GetDevicesOptions, onSuccess: (data: MediaDeviceInfo[]) => any, onFailure: (data?: any) => any): void;
  const generateToken: typeof genToken;
  function getSupportedCodec(callback?: (data: Codecs) => any): void;
  function isSupportWebRTC(): boolean;
  function deviceDetection(options: DeviceDetectionOptions, callback: (result: DeviceDetectionResult) => any): void;
  export { Client };
  export { Logger };
  export { setServers };
  export { getDevices };
  export { getSupportProfileNames };
  export { version };
  export { generateToken };
  export { getSupportedCodec };
  export { isSupportWebRTC };
  export { deviceDetection };
  const UCloudRTC: {
    Client: typeof Client;
    setServers: typeof setServers;
    getDevices: typeof getDevices;
    getSupportProfileNames: typeof getSupportProfileNames;
    version: string;
    generateToken: typeof genToken;
    getSupportedCodec: typeof getSupportedCodec;
    isSupportWebRTC: typeof isSupportWebRTC;
    deviceDetection: typeof deviceDetection;
  };
  export default UCloudRTC;
}

declare module '__urtc-sdk/logger' {
  export enum ENUM_LOG_LEVEL {
    debug = 0,
    info = 1,
    warn = 2,
    error = 3
  }
  export class Logger {
    constructor(level?: ENUM_LOG_LEVEL);
    setLogLevel(level: string): void;
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    report(...args: any[]): void;
    onLog({}: {}): void;
    onWarn({}: {}): void;
    onError({}: {}): void;
    onReport({}: {}): void;
  }
  const _default: Logger;
  export default _default;
}

declare module '__urtc-sdk/client' {
  import { UserRole, User, Stream, AudioStats, VideoStats, NetworkStats, LeaveRoomOptions, ClientOptions, DeviceOptions, DeviceDetectionOptions, DeviceDetectionResult, PublishOptions, AudioVolumeOptions, EventType, RecordOptions, Record, SwitchDeviceOptions, SwitchImageOptions, EffectOptions, EffectVolumeOptions, SnapshotOptions, ReplaceTrackOptions, MixOptions, StopMixOptions, MixResult, AddMixStreamsOptions, RemoveMixStreamsOptions, StartRecordOptions, RecordResult, UpdateMixStreamsOptions, StartRelayOptions, RelayResult, UpdateRelayPushURLOptions, UpdateRelayLayoutOptions, PlayOptions, VideoProfileOptions, CustomVideoProfile, GetDevicesOptions, CreateStreamOptions } from '__urtc-sdk/types';
  export default class Client {
    constructor(appId: string, token: string, options?: ClientOptions);
    setRole(role: UserRole): boolean;
    joinRoom(roomId: string, userId: string, onSuccess?: (users: Array<User>, streams: Array<Stream>) => void, onFailure?: (data?: any) => void): void;
    leaveRoom(options?: LeaveRoomOptions, onSuccess?: () => void, onFailure?: (data?: any) => void): void;
    publish(options?: PublishOptions, onFailure?: (data?: Error) => void): void;
    unpublish(streamId?: string, onSuccess?: (stream: Stream) => void, onFailure?: (data?: any) => void): void;
    subscribe(streamId: string, onFailure?: (Error?: any) => void): void;
    unsubscribe(streamId: string, onSuccess?: (stream: Stream) => void, onFailure?: (data?: any) => void): void;
    on(event: EventType, listener: (data?: any) => void): void;
    off(event: EventType, listener: (data?: any) => void): void;
    muteAudio(streamId?: string): boolean;
    unmuteAudio(streamId?: string): boolean;
    muteVideo(streamId?: string): boolean;
    unmuteVideo(streamId?: string): boolean;
    startRecording(options: RecordOptions, onSuccess?: (data: Record) => void, onFailure?: (data?: any) => void): void;
    stopRecording(onSuccess?: () => void, onFailure?: (data?: any) => void): void;
    getUser(): User | undefined;
    getUsers(): User[];
    sync(cb: (err?: Error) => void): void;
    getStream(streamId?: string): Stream | undefined;
    getLocalStreams(): Stream[];
    getRemoteStreams(): Stream[];
    getStreams(): Stream[];
    getMediaStream(streamId?: string): MediaStream | undefined;
    getLocalMediaStream(streamId?: string): MediaStream | undefined;
    getRemoteMediaStream(streamId: string): MediaStream | undefined;
    play(options: PlayOptions, callback: (err?: Error) => void): void;
    resume(streamId: string, callback: (err?: Error) => void): void;
    pause(streamId: string, callback: (err?: Error) => void): void;
    stop(streamId: string, callback: (err?: Error) => void): void;
    getMicrophones(opts?: GetDevicesOptions, onSuccess?: (data: MediaDeviceInfo[]) => void, onFailure?: (data?: any) => void): void;
    getCameras(opts?: GetDevicesOptions, onSuccess?: (data: MediaDeviceInfo[]) => void, onFailure?: (data?: any) => void): void;
    getLoudspeakers(onSuccess?: (data: MediaDeviceInfo[]) => void, onFailure?: (data?: any) => void): void;
    setVideoProfile(options: string | CustomVideoProfile | VideoProfileOptions, onSuccess?: () => void, onFailure?: (data?: any) => void): void;
    switchDevice(options: SwitchDeviceOptions, onSuccess?: (data?: any) => void, onFailure?: (data?: any) => void): void;
    switchScreen(streamId?: string, onSuccess?: (data?: any) => void, onFailure?: (data?: any) => void): void;
    switchImage(options: SwitchImageOptions, onSuccess?: (data?: any) => void, onFailure?: (data?: any) => void): void;
    getAudioVolume(streamId?: string): number;
    setAudioVolume(options: AudioVolumeOptions, callback?: (data?: any) => void): void;
    getAudioStats(streamId?: string, onSuccess?: (data: AudioStats) => void, onFailure?: (data?: any) => void): void;
    getVideoStats(streamId?: string, onSuccess?: (data: VideoStats) => void, onFailure?: (data?: any) => void): void;
    getNetworkStats(streamId?: string, onSuccess?: (data: NetworkStats) => void, onFailure?: (data?: any) => void): void;
    preloadEffect(effectId: number, filePath: string, callback?: (data?: any) => void): void;
    unloadEffect(effectId: number): void;
    playEffect(options: EffectOptions, callback?: (data?: any) => void): void;
    pauseEffect(options: EffectOptions, callback?: (data?: any) => void): void;
    resumeEffect(options: EffectOptions, callback?: (data?: any) => void): void;
    stopEffect(options: EffectOptions, callback?: (data?: any) => void): void;
    setEffectVolume(options: EffectVolumeOptions, callback?: (data?: any) => void): void;
    snapshot(options?: SnapshotOptions, onSuccess?: (data: string) => void, onFailure?: (data?: any) => void): void;
    startPreviewing(options?: DeviceOptions, onSuccess?: (stream: MediaStream) => void, onFailure?: (data?: any) => void): void;
    stopPreviewing(): void;
    deviceDetection(options: DeviceDetectionOptions, callback: (result: DeviceDetectionResult) => void): void;
    replaceTrack(options: ReplaceTrackOptions, callback?: (err?: any, track?: MediaStreamTrack) => void): void;
    startMix(options: MixOptions, callback?: (err?: Error, data?: MixResult) => void): void;
    stopMix(options: StopMixOptions, callback?: (err?: Error, data?: MixResult) => void): void;
    queryMix(callback?: (err?: Error, data?: MixResult) => void): void;
    addMixStreams(options: AddMixStreamsOptions, callback?: (err?: Error, data?: MixResult) => void): void;
    removeMixStreams(options: RemoveMixStreamsOptions, callback?: (err?: Error, data?: MixResult) => void): void;
    startRecord(options: StartRecordOptions, callback?: (err?: Error, data?: RecordResult) => void): void;
    stopRecord(callback?: (err?: Error, data?: RecordResult) => void): void;
    updateRecordStreams(options: UpdateMixStreamsOptions, callback?: (err?: Error, data?: RecordResult) => void): void;
    startRelay(options: StartRelayOptions, callback?: (err?: Error, data?: RelayResult) => void): void;
    stopRelay(callback?: (err?: Error, data?: RelayResult) => void): void;
    updateRelayStreams(options: UpdateMixStreamsOptions, callback?: (err?: Error, data?: RelayResult) => void): void;
    updateRelayPushURL(options: UpdateRelayPushURLOptions, callback?: (err?: Error, data?: RelayResult) => void): void;
    updateRelayLayout(options: UpdateRelayLayoutOptions, callback?: (err?: Error, data?: RelayResult) => void): void;
    createStream(options: CreateStreamOptions, callback: (err?: Error, stream?: Stream) => void): void;
    publishStream(previewId: string, callback: (err?: Error, stream?: Stream) => void): void;
    unpublishStream(previewId: string, callback: (err?: Error, stream?: Stream) => void): void;
    removeStream(previewId: string, callback: (err?: Error) => void): void;
    destroyStream(previewId: string, callback: (err?: Error) => void): void;
    enableAudioVolumeIndicator(interval?: number): void;
    logoff(action: 'quit' | 'reconnect' | 'switch' | 'refresh', users: string[], callback: (err?: Error) => void): void;
  }
}

declare module '__urtc-sdk/server' {
  export interface ServerConfig {
    api: string;
    log: string;
    signal: string;
  }
  export const SERVER_CONFIG: ServerConfig;
  export function setServers(conf: ServerConfig): void;
}

declare module '__urtc-sdk/resolutions' {
  import { CustomVideoProfile } from '__urtc-sdk/types';
  export const SUPPORT_RESOLUTIONS: {
    '240*180': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '320*180': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '320*240': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '480*360': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '640*360': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '640*480': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '640*480_1': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '1280*720': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '1280*720_1': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '1280*720_2': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '1280*720_3': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '1920*1080': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '1920*1080_1': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '1920*1080_2': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
    '1920*1080_3': {
      width: number;
      height: number;
      minFrameRate: number;
      maxFrameRate: number;
      minVideoBW: number;
      maxVideoBW: number;
    };
  };
  export const INTERNAL_SUPPORT_RESOLUTIONS: {};
  export const DEFAULT_PROFILE = "640*480";
  export function getSupportProfileNames(): Array<string>;
  export function getInternalSupportProfileNames(): Array<string>;
  export interface ResolutionAttributes {
    videoWidth: number;
    videoHeight: number;
    minFrameRate: number;
    maxFrameRate: number;
    minVideoBW: number;
    maxVideoBW: number;
  }
  export interface Resolution {
    profileName: string;
    video: MediaTrackConstraints;
    attributes: ResolutionAttributes;
  }
  export function getResolution(profile: string): Resolution;
  export function getCustomResolution(profile: CustomVideoProfile): Resolution;
}

declare module '__urtc-sdk/version' {
  export const version = "1.6.27";
}

declare module '__urtc-sdk/token' {
  export function genToken(appId: string, appKey: string, roomId: string, userId: string): string;
  export function decode(token: string): any;
  export function encode(data: any): string;
  const service: {
    genToken: typeof genToken;
    decode: typeof decode;
    encode: typeof encode;
  };
  export default service;
}

declare module '__urtc-sdk/types' {
  export type VideoCodec = 'vp8' | 'h264';
  export type AudioCodec = 'opus';
  export type RoomType = 'rtc' | 'live';
  export type UserRole = 'pull' | 'push' | 'push-and-pull';
  export type DeviceType = 'audio' | 'video';
  export type EventType = 'user-added' | 'user-removed' | 'stream-added' | 'stream-removed' | 'stream-published' | 'stream-subscribed' | 'mute-video' | 'unmute-video' | 'mute-audio' | 'unmute-audio' | 'screenshare-stopped' | 'connection-state-change' | 'kick-off' | 'network-quality' | 'stream-reconnected' | 'record-notify' | 'relay-notify' | 'volume-indicator' | 'error-notify' | 'stream-playing' | 'stream-paused' | 'player-status-change';
  export type ConnectionState = 'OPEN' | 'CONNECTING' | 'CLOSING' | 'RECONNECTING' | 'CLOSED';
  export type WaterMarkPosition = 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  export type WaterMarkType = 'time' | 'image' | 'text';
  export type MainViewType = 'desktop' | 'screen' | 'camera';
  export type NetworkQuality = '0' | '1' | '2' | '3' | '4' | '5' | '6';
  export interface ClientOptions {
    type?: RoomType;
    role?: UserRole;
    codec?: VideoCodec;
  }
  export interface Codecs {
    audio: Array<AudioCodec>;
    video: Array<VideoCodec>;
  }
  export type FacingMode = 'user' | 'environment' | 'left' | 'right';
  export interface PublishOptions {
    audio: boolean;
    video: boolean;
    screenAudio?: boolean;
    screen: boolean;
    facingMode?: FacingMode;
    microphoneId?: string;
    cameraId?: string;
    extensionId?: string;
    mediaStream?: MediaStream;
    file?: File;
    filePath?: string;
  }
  export interface CreateStreamOptions extends PublishOptions {
    userId?: string;
    streamId?: string;
  }
  export interface DeviceOptions {
    audio: boolean;
    video: boolean;
    facingMode?: FacingMode;
    microphoneId?: string;
    cameraId?: string;
  }
  export interface DeviceDetectionOptions {
    audio: boolean;
    video: boolean;
    microphoneId?: string;
    cameraId?: string;
  }
  export interface DeviceDetectionResult {
    audio: boolean;
    audioError?: string;
    video: boolean;
    videoError?: string;
  }
  export interface User {
    uid: string;
  }
  export interface Stream {
    sid: string;
    uid: string;
    type: 'publish' | 'subscribe' | 'preview';
    mediaType?: 'camera' | 'screen';
    video: boolean;
    audio: boolean;
    muteAudio: boolean;
    muteVideo: boolean;
    mediaStream?: MediaStream;
    sourceAudioMuted?: boolean;
    sourceVideoMuted?: boolean;
    audioMuted: boolean;
    videoMuted: boolean;
    previewId?: string;
  }
  export interface LeaveRoomOptions {
    keepRecording: boolean;
  }
  export interface AudioVolumeOptions {
    streamId?: string;
    element?: HTMLMediaElement;
    volume: number;
  }
  export interface WaterMarkOptions {
    position?: WaterMarkPosition;
    type?: WaterMarkType;
    remarks?: string;
  }
  export interface MixStreamOptions {
    width?: number;
    height?: number;
    template?: number;
    isAverage?: boolean;
  }
  export interface RelayOptions {
    time?: number;
    fragment: number;
  }
  export interface RecordOptions {
    bucket: string;
    region: string;
    uid?: string;
    mainViewType?: MainViewType;
    mixStream?: MixStreamOptions;
    waterMark?: WaterMarkOptions;
    relay?: RelayOptions;
  }
  export interface Record {
    FileName: string;
    RecordId: string;
  }
  export interface EffectOptions {
    streamId?: string;
    effectId: number;
    filePath?: string;
    loop?: boolean;
    playTime?: number;
    replace?: boolean;
  }
  export interface EffectVolumeOptions {
    streamId?: string;
    effectId: number;
    volume: number;
  }
  export interface SwitchDeviceOptions {
    streamId?: string;
    type: DeviceType;
    deviceId: string;
  }
  export interface SwitchImageOptions {
    streamId?: string;
    file?: File;
    filePath?: string;
  }
  export interface SnapshotOptions {
    streamId?: string;
    download?: string | boolean;
  }
  export interface AudioStats {
    br: number;
    lostpre: number;
    vol: number;
    mime: string;
  }
  export interface VideoStats {
    br: number;
    lostpre: number;
    frt: number;
    w: number;
    h: number;
    mime: string;
  }
  export interface NetworkStats {
    rtt: number;
  }
  export interface ReplaceTrackOptions {
    streamId?: string;
    track: MediaStreamTrack;
    retain?: boolean;
  }
  export type MixType = 'relay' | 'record' | 'relay-and-record' | 'update-config';
  export type MixLayoutType = 'flow' | 'main' | 'custom' | 'customMain' | 'customFlow' | 'single';
  export type MixAudioCodec = 'aac';
  export type MixVideoCodec = 'h264' | 'h265';
  export type H264Quality = 'B' | 'CB' | 'M' | 'E' | 'H';
  export type MixOutputMode = 'audio-video' | 'audio';
  export type MixStreamAddMode = 'automatic' | 'manual';
  export interface MixLayoutOptions {
    type: MixLayoutType;
    standbyTypes?: MixLayoutType[];
    custom?: Array<object>;
    mainViewUId?: string;
    mainViewType?: MainViewType;
  }
  export interface MixAudioOptions {
    codec: MixAudioCodec;
  }
  export interface MixVideoOptions {
    codec: MixVideoCodec;
    quality?: H264Quality;
    frameRate?: number;
    bitRate?: number;
  }
  export interface BackgroundColorOptions {
    r: number;
    g: number;
    b: number;
  }
  export interface MixOptions {
    type?: MixType;
    bucket?: string;
    region?: string;
    pushURL?: string[];
    layout?: MixLayoutOptions;
    audio?: MixAudioOptions;
    video?: MixVideoOptions;
    outputMode?: MixOutputMode;
    width?: number;
    height?: number;
    backgroundColor?: BackgroundColorOptions;
    waterMark?: WaterMarkOptions;
    streams?: MixStream[];
    streamAddMode?: MixStreamAddMode;
    timeoutPeriod?: number;
    keyUser?: string;
  }
  export interface StopMixOptions {
    type?: MixType;
    pushURL?: string[];
  }
  export interface MixResult {
    MixId: string;
    FileName?: string;
    Type?: MixType;
    PushURL?: string[];
  }
  export interface MixStream {
    uid: string;
    mediaType: 'camera' | 'screen';
  }
  export interface AddMixStreamsOptions {
    streams: MixStream[];
  }
  export interface RemoveMixStreamsOptions {
    streams: MixStream[];
  }
  export interface StartRecordOptions {
    bucket: string;
    region: string;
    layout?: MixLayoutOptions;
    audio?: MixAudioOptions;
    video?: MixVideoOptions;
    width?: number;
    height?: number;
    backgroundColor?: BackgroundColorOptions;
    waterMark?: WaterMarkOptions;
    streams?: MixStream[];
    outputMode?: MixOutputMode;
    streamAddMode?: MixStreamAddMode;
    keyUser?: string;
  }
  export interface RecordResult {
    Id: string;
    FileName?: string;
  }
  export type UpdateMixStreamsType = 'add' | 'remove' | 'replace';
  export interface UpdateMixStreamsOptions {
    type: UpdateMixStreamsType;
    streams: MixStream[];
  }
  export interface StartRelayOptions {
    pushURL?: string[];
    layout?: MixLayoutOptions;
    audio?: MixAudioOptions;
    video?: MixVideoOptions;
    width?: number;
    height?: number;
    backgroundColor?: BackgroundColorOptions;
    waterMark?: WaterMarkOptions;
    streams?: MixStream[];
    outputMode?: MixOutputMode;
    streamAddMode?: MixStreamAddMode;
    keyUser?: string;
  }
  export interface RelayResult {
    Id: string;
    PushURL?: string[];
  }
  export type UpdateRelayPushURLType = 'add' | 'remove' | 'replace';
  export interface UpdateRelayPushURLOptions {
    type: UpdateRelayPushURLType;
    pushURL: string[];
  }
  export interface UpdateRelayLayoutOptions {
    layout: MixLayoutOptions;
  }
  export interface UpdateRelayWaterMarkOptions {
    waterMark: WaterMarkOptions;
  }
  export type VideoFitType = 'cover' | 'contain';
  export type PlayControlsOption = 'show' | 'hide' | 'auto';
  export interface PlayOptions {
    streamId: string;
    container: HTMLElement | string;
    mute?: boolean;
    mirror?: boolean;
    fit?: VideoFitType;
    controls?: PlayControlsOption;
  }
  export interface CustomVideoProfile {
    width: number;
    height: number;
    framerate: number;
    bitrate: number;
  }
  export interface VideoProfileOptions {
    streamId?: string;
    previewId?: string;
    profile: string | CustomVideoProfile;
  }
  export interface MixNotification {
    code: string;
    message: string;
  }
  export interface ErrorNotification {
    code: string;
    message: string;
  }
  export interface AudioVolume {
    sid: string;
    uid: string;
    mediaType: 'camera' | 'screen';
    volume: number;
  }
  export interface PlayerStatusEvent {
    type: 'audio' | 'video';
    status: 'playing' | 'paused';
    stream: Stream;
  }
  export interface GetDevicesOptions {
    microphone?: boolean;
    camera?: boolean;
  }
}

