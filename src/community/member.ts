import type {BitField, EthAddr} from '@toreda/types';
import type {Strong, UInt} from '@toreda/strong-types';
import {StrongMap, strongMake, uIntMake} from '@toreda/strong-types';

import type {CommunityMemberData} from './member/data';
import {Defaults} from '../defaults';
import type {Time} from '@toreda/time';
import {timeMake} from '@toreda/time';

/**
 * @category Communities
 */
export class CommunityMember extends StrongMap {
	public readonly id: UInt;
	public readonly joinBlock: UInt;
	public readonly joinTimestamp: Time;
	public readonly roles: Strong<BitField>;
	public readonly addr: Strong<EthAddr>;

	constructor(data?: CommunityMemberData) {
		super();

		this.id = uIntMake(Defaults.CommunityMember.Id);
		this.joinBlock = uIntMake(Defaults.CommunityMember.JoinBlock);
		this.joinTimestamp = timeMake('s', Defaults.CommunityMember.JoinTime);
		this.roles = strongMake<BitField>(Defaults.CommunityMember.Roles);
		this.addr = strongMake<EthAddr>(Defaults.CommunityMember.Addr);

		this.parse(data);
	}

	public toData(): CommunityMemberData {
		return {
			id: this.id(),
			roles: this.roles(),
			joinBlock: this.joinBlock(),
			joinTimestamp: this.joinTimestamp(),
			addr: this.addr()
		};
	}
}
