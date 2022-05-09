import type {Strong, StrongArray, Text} from '@toreda/strong-types';
import {StrongMap, arrayMake, strongMake, textMake} from '@toreda/strong-types';

import type {CommunityData} from './community/data';
import type {CommunityRole} from './community/role';
import {CommunityRoleData} from './community/role/data';
import type {CommunityVisibility} from './community/visibility';
import {Defaults} from './defaults';
import type {EthAddr} from '@toreda/types';

/**
 * @category Communities
 */
export class Community extends StrongMap {
	public readonly name: Text;
	public readonly visibility: Strong<CommunityVisibility>;
	public readonly addr: Strong<EthAddr>;
	public readonly roles: StrongArray<CommunityRole>;

	constructor(data?: CommunityData) {
		super();

		this.name = textMake(Defaults.Community.Name);
		this.visibility = strongMake<CommunityVisibility>(Defaults.Community.Visibility);
		this.addr = strongMake<EthAddr>(Defaults.Community.Addr);
		this.roles = arrayMake<CommunityRole>([]);

		this.parse(data);
	}

	public rolesData(): CommunityRoleData[] {
		const result: CommunityRoleData[] = [];

		for (const role of this.roles()) {
			result.push(role.toData());
		}

		return result;
	}

	public toData(): CommunityData {
		return {
			name: this.name(),
			addr: this.addr(),
			visibility: this.visibility(),
			roles: this.rolesData()
		};
	}
}
