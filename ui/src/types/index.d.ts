/// <reference types="react-scripts" />

interface IConfig {
  port: string | number;
  enableTerminalTheme: boolean;
  showStatusBar: boolean;
}

interface IMyTheme {
  theme: string;
  setTheme: any;
}

interface IProjectCommand {
  _id: string;
  [name: string]: string;
}

interface IProject {
  _id?: string;
  name: string;
  type: string;
  path: string;
  configFile?: string;
  commands: IProjectCommand[];
}

interface IJobAction {
  room: string;
  type: ACTION_TYPES;
  stdout?: string;
  state?: object;
  isRunning?: boolean;
  socketId?: string;
  process?: any;
}

interface IStateAction {
  type: ACTION_TYPES;
  state: object;
}

interface Window {
  tenHands: any;
}

interface ITenHandsFile {
  name: string;
  path?: string;
  data: string | ArrayBuffer | null;
}
