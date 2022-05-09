import type {BitField, EthAddr} from '@toreda/types';

/**
 * @category Communities
 */
export interface CommunityMemberData {
	id: number;
	roles: BitField;
	joinBlock: number;
	joinTimestamp: number;
	addr: EthAddr;
}
