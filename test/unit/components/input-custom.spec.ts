import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import InputCustom from '../../../components/input-custom.vue';

// unit test for uncontrol component
// describe props, event

describe('input custom', () => {
    it('renders with correct props', async () => {
        const initProps = {
            type: 'text',
            placeholder: 'Enter something',
            name: 'myInput',
            modelValue: 'Initial value',
        }

        const wrapper = mount(InputCustom, {
            props: initProps
        });

        const inputElement = wrapper.find('input');

        expect(inputElement.element.value).toBe(initProps.modelValue);
        expect(inputElement.attributes('placeholder')).toBe(initProps.placeholder);
        expect(inputElement.attributes('type')).toBe(initProps.type);
        expect(inputElement.attributes('name')).toBe(initProps.name);
    });

    it('emits update:modelValue event on input', async () => {
        const wrapper = mount(InputCustom);

        const inputElement = wrapper.find('input');

        await inputElement.setValue('New value');

        expect(wrapper.emitted('update:modelValue')).toHaveLength(1);
        expect(wrapper.emitted('update:modelValue')![0][0]).toBe('New value');
    });


});
