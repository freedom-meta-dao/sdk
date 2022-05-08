import {StrongMap, uIntMake} from "@toreda/strong-types";

import type {CommunityMemberData} from "./member/data";
import type {Time} from '@toreda/time';
import type {UInt} from '@toreda/strong-types';
import {timeMake} from '@toreda/time';

/**
 * @category Communities
 */
export class CommunityMember extends StrongMap {
	public readonly id: UInt;
	public readonly joinBlock: UInt;
	public readonly joinTimestamp: Time;
	public readonly 

	constructor(data?: CommunityMemberData) {
		super();

		this.id = uIntMake(0);
		this.joinBlock = uIntMake(0);
		this.joinTimestamp = timeMake('s', 0);

		this.parse(data);
	}

	public toData(): CommunityMemberData {
		return {
			id: this.id(),
			joinBlock: this.joinBlock(),
			joinTimestamp: this.joinTimestamp()
		}
	}
}
