import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import ButtonCustom from '../../../components/button-custom.vue';

// unit test for uncontrol component
// describe props, event

describe('button custom', () => {
    it('emits "handleClick" event when button is clicked', async () => {
        const wrapper = mount(ButtonCustom, {
            props: {
                text: 'Click me'
            }
        });

        // Simulate a click event on the button
        await wrapper.find('button').trigger('click');

        // Assert that the "handleClick" event was emitted
        expect(wrapper.emitted().handleClick).toBeTruthy();
    });

    it('displays the correct text', () => {
        const text = 'Click me';
        const wrapper = mount(ButtonCustom, {
            props: {
                text
            }
        });

        // Assert that the button displays the correct text
        expect(wrapper.text()).toContain(text);
    });
})
