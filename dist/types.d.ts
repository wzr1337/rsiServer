export interface RsiClientWebSocketMessage {
    type: string;
    event: string;
    interval?: number;
    updatelimit?: number;
    Authorization?: string;
}
export interface xObject {
    id: string;
    name: string;
    uri: string;
}
/**
 * options to run the server
 */
export interface RunOptions {
    port?: number;
    verbosity?: 'silly' | 'debug' | 'verbose' | 'info' | 'warn' | 'error';
    base?: string;
    serviceRegistry?: string;
}