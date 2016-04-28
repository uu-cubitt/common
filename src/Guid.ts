/**
 * Global unique identifiers, RFC4122 v4 compatible.
 */
export class Guid {
	/**
	 * Internal string representation of the GUID.
	 */
	private guid: string;

	/**
	 * Create a new Guid.
	 * @param g A GUID formatted string.
	 */
	constructor (g: string) {
		this.guid = g;
	}

	/**
	 * Returns the GUID formatted as a string.
	 */
	public toString(): string {
		return this.guid;
	}

	/**
	 * Creates a new Guid from a string.
	 * If it is a valid RFC4122 v4 GUID, it returns the Guid object, null otherwise.
	 */
	public static parse(guid: string): Guid {
		let pattern = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/;
		if (pattern.test(guid)) {
			return new Guid(guid);
		}
		return null;
	}

	/**
	 * Creates a new GUID class.
	 * Conforms to RFC4122 v4.
	 * @return string Formatted RFC4122 v4 GUID.
	 */
	public static newGuid(): Guid {
		let d = new Date().getTime();
		let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
			let r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c === "x" ? r : (r&0x3|0x8)).toString(16);
		});
		return new Guid(uuid);
	}
}
