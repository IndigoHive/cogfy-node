export type BaseDatabaseRecordProperty = {
    error?: {
        code?: string | null;
        message?: string;
    };
    pending?: boolean;
};
export type BooleanDatabaseRecordProperty = BaseDatabaseRecordProperty & {
    type: 'boolean';
    boolean: {
        value: boolean;
    };
};
export type ChatDatabaseRecordProperty = BaseDatabaseRecordProperty & {
    type: 'chat';
};
export type DateDatabaseRecordProperty = BaseDatabaseRecordProperty & {
    type: 'date';
    date: {
        value: string;
    };
};
export type FileDatabaseRecordProperty = BaseDatabaseRecordProperty & {
    type: 'file';
};
export type JsonDatabaseRecordProperty = BaseDatabaseRecordProperty & {
    type: 'json';
    json: {
        value: unknown;
    };
};
export type NumberDatabaseRecordProperty = BaseDatabaseRecordProperty & {
    type: 'number';
    number: {
        value: number;
    };
};
export type ReferenceDatabaseRecordProperty = BaseDatabaseRecordProperty & {
    type: 'reference';
};
export type StopwatchDatabaseRecordProperty = BaseDatabaseRecordProperty & {
    type: 'stopwatch';
    stopwatch?: {
        value?: {
            startDate?: string | null;
            elapsed?: number | null;
        };
    };
};
export type TextDatabaseRecordProperty = BaseDatabaseRecordProperty & {
    type: 'text';
    text: {
        value: string;
    };
};
export type VectorDatabaseRecordProperty = BaseDatabaseRecordProperty & {
    type: 'vector';
};
export type WhatsAppDatabaseRecordProperty = BaseDatabaseRecordProperty & {
    type: 'whatsApp';
    whatsApp?: {
        value?: {
            phoneNumber?: string;
            chatId?: string;
        };
    };
};
export type DatabaseRecordProperty = BooleanDatabaseRecordProperty | ChatDatabaseRecordProperty | DateDatabaseRecordProperty | FileDatabaseRecordProperty | JsonDatabaseRecordProperty | NumberDatabaseRecordProperty | ReferenceDatabaseRecordProperty | StopwatchDatabaseRecordProperty | TextDatabaseRecordProperty | VectorDatabaseRecordProperty | WhatsAppDatabaseRecordProperty;
