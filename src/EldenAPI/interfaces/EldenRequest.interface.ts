export interface EldenRequest<T> {
    data: [{
        results: T
    }]
}