import type {CommunityRoleData} from './role/data';
import type {CommunityVisibility} from './visibility';
import type {EthAddr} from '@toreda/types';

/**
 * Simplified Community entity data containing only primitive properties for easy serialization.
 *
 * @category Community
 */
export interface CommunityData {
	addr: EthAddr;
	name: string;
	visibility: CommunityVisibility;
	roles: CommunityRoleData[];
}
