import {StrongMap, Text, textMake} from '@toreda/strong-types';

import type {CommunityPollOptionData} from './option/data';

/**
 * @category Community Polls
 */
export class CommunityPollOption extends StrongMap {
	public readonly value: Text;

	constructor(data?: CommunityPollOptionData) {
		super();

		this.value = textMake('_');

		this.parse(data);
	}

	public toData(): CommunityPollOptionData {
		return {
			value: this.value()
		};
	}

	public reset(): void {
		this.value.reset();
	}
}
