import {Community} from '../src/community';
import {CommunityData} from '../src/community/data';
import {CommunityRole} from '../src/community/role';
import {CommunityRoleData} from '../src/community/role/data';
import type {CommunityVisibility} from '../src/community/visibility';
import {Defaults} from '../src/defaults';

const DEFAULT_NAME = 'aaa-219745-97141';
const DEFAULT_ADDR = 0xffff;
const DEFAULT_ROLES = [];
const DEFAULT_VISIBILITY: CommunityVisibility = 'public';

const EMPTY_ROLES: CommunityRole[] = [];
const EMPTY_ROLES_DATA: CommunityRoleData[] = [];

describe('Community', () => {
	let instance: Community;

	beforeAll(() => {
		instance = new Community({
			name: DEFAULT_NAME,
			addr: DEFAULT_ADDR,
			roles: DEFAULT_ROLES,
			visibility: DEFAULT_VISIBILITY
		});
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {
		it(`should intialize community.name to global Community default name when data is undefined`, () => {
			const custom = new Community();

			expect(custom.name()).toBe(Defaults.Community.Name);
		});

		it(`should intialize community.name to global Community default when data arg is null`, () => {
			const custom = new Community(null);

			expect(custom.name()).toBe(Defaults.Community.Name);
		});

		it(`should intialize community.name to global Community default when data arg has no name property`, () => {
			const custom = new Community({
				addr: DEFAULT_ADDR,
				roles: DEFAULT_ROLES,
				visibility: DEFAULT_VISIBILITY
			} as CommunityData);

			expect(custom.name()).toBe(Defaults.Community.Name);
		});

		it(`should intialize community.addr to global Community default when data arg is undefined`, () => {
			const custom = new Community();

			expect(custom.addr()).toBe(Defaults.Community.Addr);
		});

		it(`should intialize community.addr to global Community default when data arg is null`, () => {
			const custom = new Community(null);

			expect(custom.addr()).toBe(Defaults.Community.Addr);
		});

		it(`should intialize community.addr to global Community default when data arg has no addr property`, () => {
			const custom = new Community({
				roles: DEFAULT_ROLES,
				name: DEFAULT_NAME,
				visibility: DEFAULT_VISIBILITY
			} as CommunityData);

			expect(custom.addr()).toBe(Defaults.Community.Addr);
		});

		it(`should intialize community.visibility to global Community default when data arg is undefined`, () => {
			const custom = new Community();

			expect(custom.visibility()).toBe(Defaults.Community.Visibility);
		});

		it(`should intialize community.visibility to global Community default when data arg is null`, () => {
			const custom = new Community(null);

			expect(custom.visibility()).toBe(Defaults.Community.Visibility);
		});

		it(`should intialize community.visibility to global Community default when data arg has no visibility property`, () => {
			const custom = new Community({
				roles: DEFAULT_ROLES,
				name: DEFAULT_NAME,
				addr: DEFAULT_ADDR
			} as CommunityData);

			expect(custom.visibility()).toBe(Defaults.Community.Visibility);
		});










		it(`should intialize community.roles to global Community default when data arg is undefined`, () => {
			const custom = new Community();

			expect(custom.roles()).toEqual(Defaults.Community.Roles);
		});

		it(`should intialize community.roles to global Community default when data arg is null`, () => {
			const custom = new Community(null);

			expect(custom.roles()).toEqual(Defaults.Community.Roles);
		});

		it(`should intialize community.roles to global Community default when data arg has no roles property`, () => {
			const custom = new Community({
				roles: DEFAULT_ROLES,
				name: DEFAULT_NAME,
				addr: DEFAULT_ADDR
			} as CommunityData);

			expect(custom.roles()).toEqual(Defaults.Community.Roles);
		});
	});

	describe('Implementation', () => {
		describe('rolesData', () => {
			it(`should return an empty array when community has no roles`, () => {
				const value: CommunityRole[] = [];
				instance.roles(value);

				expect(instance.rolesData()).toEqual(EMPTY_ROLES_DATA);
			});
		});

		describe('reset', () => {
			it('should reset community.addr to global Community default name', () => {
				const value = 'aaa9741-90719-3337141';
				instance.name(value);
				expect(instance.name()).toBe(value);
				instance.reset();

				expect(instance.name()).toBe(Defaults.Community.Name);
			});

			it('should reset community.addr to global Community default addr', () => {
				const value = 0x047171;
				instance.addr(value);
				expect(instance.addr()).toBe(value);
				instance.reset();

				expect(instance.addr()).toBe(Defaults.Community.Addr);
			});

			it('should reset community.addr to global Community default visibility', () => {
				const value: CommunityVisibility = 'community_role';
				instance.visibility(value);
				expect(instance.visibility()).toBe(value);
				instance.reset();

				expect(instance.visibility()).toBe(Defaults.Community.Visibility);
			});
		});
	});
});
