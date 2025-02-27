import * as $protobuf from "../..";
export interface IMessage {
    stringVal?: (string|null);
    stringRepeated?: (string[]|null);
    uint64Val?: (bigint|null);
    uint64Repeated?: (bigint[]|null);
    bytesVal?: (Uint8Array|null);
    bytesRepeated?: (Uint8Array[]|null);
    enumVal?: (Message.SomeEnum|null);
    enumRepeated?: (Message.SomeEnum[]|null);
    int64Map?: ({ [k: string]: bigint }|null);
}

export class Message implements IMessage {
    constructor(properties?: IMessage);
    public stringVal: string;
    public stringRepeated: string[];
    public uint64Val: bigint;
    public uint64Repeated: bigint[];
    public bytesVal: Uint8Array;
    public bytesRepeated: Uint8Array[];
    public enumVal: Message.SomeEnum;
    public enumRepeated: Message.SomeEnum[];
    public int64Map: { [k: string]: bigint };
    public static create(properties?: IMessage): Message;
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;
    public static verify(message: { [k: string]: any }): (string|null);
    public static fromObject(object: { [k: string]: any }): Message;
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };
    public toJSON(): { [k: string]: any };
    public static getTypeUrl(): string;
}

export namespace Message {

    enum SomeEnum {
        ONE = 1,
        TWO = 2
    }
}
