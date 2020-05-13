interface IProjectCommand {
  [name: string]: string;
}

interface IProject {
  _id?: string;
  name: string;
  type: string;
  path: string;
  configFile?: string;
  shell?: string;
  commands: IProjectCommand[];
}
