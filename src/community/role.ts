import type {Strong, Text, UInt} from '@toreda/strong-types';
import {StrongMap, strongMake, textMake, uIntMake} from '@toreda/strong-types';

import type {BitField} from '@toreda/types';
import type {CommunityRoleData} from './role/data';

/**
 * @category Communities
 */
export class CommunityRole extends StrongMap {
	public readonly id: UInt;
	public readonly label: Text;
	public readonly flags: Strong<BitField>;

	constructor(data?: CommunityRoleData) {
		super();

		this.id = uIntMake(0);
		this.label = textMake('__');
		this.flags = strongMake(0x0);

		this.parse(data);
	}

	public toData(): CommunityRoleData {
		return {
			id: this.id(),
			label: this.label(),
			flags: this.flags()
		};
	}

	public reset(): void {
		this.id.reset();
		this.label.reset();
		this.flags.reset();
	}
}
