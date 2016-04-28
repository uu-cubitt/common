/**
 * Interface that represents a simple <string> to <any> dictionary.
 */
export interface Dictionary<T> {
	[K: string]: T;
}
