export interface DAppMessage {
    id: number;
    method: string;
    params: unknown[];
    origin: string;
}

export type PANDAWALLETRApiMessage = PANDAWALLETRApiResponse | PANDAWALLETRApiTonConnectEvent;

export interface PANDAWALLETRError {
    message: string;
    code: number;
    description?: string;
}

export interface PANDAWALLETRApiResponse {
    type: 'PANDAWALLETRAPI';
    message: {
        jsonrpc: '2.0';
        id: number;
        method: string;
        result: undefined | unknown;
        error?: PANDAWALLETRError;
    };
}

export interface PANDAWALLETRApiTonConnectEvent {
    type: 'PANDAWALLETRAPI';
    message: {
        jsonrpc: '2.0';
        id?: undefined;
        event: string;
        payload: Record<string, unknown>;
    };
}
