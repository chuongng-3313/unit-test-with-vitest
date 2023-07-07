// Unit test for page
// 1. Renderring
// 2. Data
// 3. Methods
// 4. Lifecycle hooks

import { beforeEach, describe, expect, it, vi } from "vitest";
import { setActivePinia, createPinia } from 'pinia'
import { mount, shallowMount } from '@vue/test-utils'
// import { createTestingPinia } from '@pinia/testing'
import { useUserListStore } from "../../../store/user-list";

import UserList from "../../../pages/user-list.vue";
import InputCustom from "../../../components/input-custom.vue";
import ButtonCustom from "../../../components/button-custom.vue";

describe('user list', () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
    })

    // render + data
    it('displays user list correctly', () => {
        const userListStore = useUserListStore();

        const wrapper = mount(UserList, {
            global: {
                components: {
                    InputCustom: { template: '<input />' },
                    ButtonCustom: { template: '<button />' },
                },
                provide: {
                    userListStore,
                },
            },
            props: {
                title: 'User List',
            },
        });

        expect(wrapper.text()).toContain('User List');
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true);

        //optional
        // expect(wrapper.text()).toContain('Terry');
        // expect(wrapper.text()).toContain('Smitham');
        // expect(wrapper.text()).toContain('Medhurst');
        // expect(wrapper.text()).toContain('50');
        // expect(wrapper.text()).toContain('+63 791 675 8914');
    });

    // method
    it('calls handleSearch method on button click', async () => {
        const userListStore = useUserListStore();
        const wrapper = mount(UserList, {
            global: {
                components: {
                    InputCustom: { template: '<input />' },
                    ButtonCustom: { template: '<button />' },
                },
                provide: {
                    userListStore
                },
            },
            props: {
                title: 'User List',
            },
        });

        const inputElement = wrapper.find('input');
        const buttonElement = wrapper.find('button');

        const inputVal = 'john'

        await inputElement.setValue(inputVal);
        await buttonElement.trigger('click');

        expect(userListStore.updateTxtSearch).toHaveBeenCalledTimes(1);
        expect(userListStore.updateTxtSearch).toHaveBeenCalledWith(inputVal);
    });

    // lifecycle
    it('calls the created and mounted hooks', async () => {
        const wrapper = await mount(UserList);
    
        expect(wrapper.vm.$options.created).toHaveBeenCalled();
        expect(wrapper.vm.$options.mounted).toHaveBeenCalled();
      });
})
