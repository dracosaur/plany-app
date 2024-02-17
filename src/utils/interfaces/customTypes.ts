export type withChildren<T = {}> = T & { children?: React.ReactNode };
export type IStringMap = { [key: string]: string };

export interface IAppContext {
  api: string;
  socket: string;
  theme: string;
}

export interface IClientContext {
  pro: string;
  dev: string;
  socket: string;
  theme: string;
}

export type IClient = "sinaf";
export type IBaseContext = "pro" | "dev";

export type IClientsContext = Record<IClient, IClientContext>;
