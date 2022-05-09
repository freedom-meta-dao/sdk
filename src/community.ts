import type {Strong, StrongArray, Text} from '@toreda/strong-types';
import {StrongMap, arrayMake, strongMake, textMake} from '@toreda/strong-types';

import type {CommunityData} from './community/data';
import type {CommunityRole} from './community/role';
import type {CommunityRoleData} from './community/role/data';
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

	constructor(data?: CommunityData | null) {
		super();

		this.name = textMake(Defaults.Community.Name);
		this.visibility = strongMake<CommunityVisibility>(Defaults.Community.Visibility);
		this.addr = strongMake<EthAddr>(Defaults.Community.Addr);
		this.roles = arrayMake<CommunityRole>([]);

		this.parse(data);
	}

	/**
	 * Convert community's roles to serializable role data for use with CommunityData objects.
	 * @returns
	 */
	public rolesData(): CommunityRoleData[] {
		const result: CommunityRoleData[] = [];

		for (const role of this.roles()) {
			result.push(role.toData());
		}

		return result;
	}

	/**
	 * Convert all properties to simplified data which can be serialized.
	 * @returns
	 */
	public toData(): CommunityData {
		return {
			name: this.name(),
			addr: this.addr(),
			visibility: this.visibility(),
			roles: this.rolesData()
		};
	}

	/**
	 * Completely reset Community properties to global default values. Used in test execution, Lambda
	 * serverless containers, object pools, etc. Does NOT reset to values for a specific community, even
	 * when object was constructed with a populated CommunityData object.
	 */
	public reset(): void {
		this.name.reset();
		this.addr.reset();
		this.visibility.reset();
		this.roles.reset();
	}
}
