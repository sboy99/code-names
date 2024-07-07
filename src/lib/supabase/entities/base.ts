export class Base<T> {
	constructor(entity: Partial<T>) {
		Object.assign(this, entity);
	}
}
