import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseTextGradient from '@/components/base/BaseTextGradient.vue'

describe('BaseTextGradient', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseTextGradient, { slots: { default: 'Hello Gradient' } })
    expect(wrapper.text()).toContain('Hello Gradient')
    expect(wrapper.classes()).toContain('bg-gradient-to-r')
    expect(wrapper.classes()).toContain('text-transparent')
    expect(wrapper.classes()).toContain('bg-clip-text')
  })
})
