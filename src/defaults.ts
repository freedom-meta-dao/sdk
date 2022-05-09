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
	} = {
		Name: '_',
		Visibility: 'public',
		Addr: 0x0
	};
}
