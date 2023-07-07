import { beforeEach, afterEach, describe, expect, it } from "vitest";
import { setActivePinia, createPinia } from 'pinia'
import { mount, shallowMount } from '@vue/test-utils'

import { useUserListStore } from '../../../store/user-list';

describe('UserListStore', () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
    })

    it('reqUserList action updates user list correctly', async () => {
        const userListStore = useUserListStore();

        expect(userListStore?.$state.userList).toEqual([])

        await userListStore.reqUserList(userListStore);

        // expect(userListStore.reqUserList).toHaveBeenCalledTimes(1);
        expect(userListStore.loading).toBe(false);

        // consider before following, because it take time
        expect(userListStore.$state.userList).toContainEqual(
            {
                id: expect.any(Number),
                firstName: expect.any(String),
                lastName: expect.any(String),
                maidenName: expect.any(String),
                age: expect.any(Number),
                gender: expect.any(String),
                email: expect.any(String),
                phone: expect.any(String),
                username: expect.any(String),
                password: expect.any(String),
                birthDate: expect.any(String),
                image: expect.any(String),
                bloodGroup: expect.any(String),
                height: expect.any(Number),
                weight: expect.any(Number),
                eyeColor: expect.any(String),
                hair: {
                    color: expect.any(String),
                    type: expect.any(String),
                },
                domain: expect.any(String),
                ip: expect.any(String),
                address: {
                    address: expect.any(String),
                    city: expect.any(String),
                    coordinates: {
                        lat: expect.any(Number),
                        lng: expect.any(Number),
                    },
                    postalCode: expect.any(String),
                    state: expect.any(String),
                },
                macAddress: expect.any(String),
                university: expect.any(String),
                bank: {
                    cardExpire: expect.any(String),
                    cardNumber: expect.any(String),
                    cardType: expect.any(String),
                    currency: expect.any(String),
                    iban: expect.any(String),
                },
                company: {
                    address: {
                        address: expect.any(String),
                        city: expect.any(String),
                        coordinates: {
                            lat: expect.any(Number),
                            lng: expect.any(Number),
                        },
                        postalCode: expect.any(String),
                        state: expect.any(String),
                    },
                    department: expect.any(String),
                    name: expect.any(String),
                    title: expect.any(String),
                },
                ein: expect.any(String),
                ssn: expect.any(String),
                userAgent: expect.any(String),
            }
        );

    });

    it('updateTxtSearch action updates txtSearch correctly', () => {
        const userListStore = useUserListStore();

        const newTxtSearch = 'John';

        userListStore.updateTxtSearch(userListStore, newTxtSearch);

        expect(userListStore.$state.txtSearch).toBe(newTxtSearch);
    });

});
