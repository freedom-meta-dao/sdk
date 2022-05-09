import type {CommunityPollStatus} from './community/poll/status';
import {CommunityRole} from './community/role';
import type {CommunityRoleData} from './community/role/data';
import type {CommunityVisibility} from './community/visibility';
import type {EthAddr} from '@toreda/types';

export class Defaults {
	public static CommunityMember = {
		Id: 0,
		Addr: 0x0,
		Roles: 0x0,
		JoinTime: 0,
		JoinBlock: 0
	} as const;

	public static Community: {
		Name: string;
		Visibility: CommunityVisibility;
		Addr: EthAddr;
		Roles: CommunityRole[];
		RolesData: CommunityRoleData[];
	} = {
		Name: '_',
		Visibility: 'public',
		Addr: 0x0,
		Roles: [],
		RolesData: []
	};

	public static CommunityPoll: {
		[k: string]: unknown;
		Status: CommunityPollStatus;
	} = {
		Status: 'INACTIVE'
	} as const;
}
