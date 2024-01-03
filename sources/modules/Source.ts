export type Source = {
    kind: 'url',
    url: string
} | {
    kind: 'file',
    path: string
} | {
    kind: 'buffer',
    buffer: Buffer
} | {
    kind: 'react-native-asset',
    asset: any
} | {
    kind: 'custom',
    session: any
}