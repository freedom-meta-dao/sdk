import {Strong, StrongMap, Text, strongMake, textMake} from "@toreda/strong-types";

import type {CommunityPollOptionData} from "./option/data";
import {CommunityPollStatus} from "./status";
import {Defaults} from "../../defaults";

/**
 * @category Community Polls
 */
export class CommunityPollOption extends StrongMap {
	public readonly value: Text;

	constructor(data?: CommunityPollOptionData) {
		super();

		this.value = textMake('_');
		//this.status = strongMake<CommunityPollStatus>(Defaults.CommunityPoll.Status)

		this.parse(data);
	}

	public toData(): CommunityPollOptionData {
		return {
			value: this.value()
		};
	}

	public reset(): void {

	}
}
