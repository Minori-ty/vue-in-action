import HelloWorld from '../src/components/HelloWorld.vue'
import { shallowMount } from '@vue/test-utils'
import { describe } from 'yargs'
import { expect, test } from '@jest/globals'

describe('aaa', () => {
    test('should', () => {
        const wrapper = shallowMount(HelloWorld, {
            props: {
                msg: 'hello, vue3',
            },
        })
        expect(wrapper.text()).toMatch('hello, vue3')
    })
})
