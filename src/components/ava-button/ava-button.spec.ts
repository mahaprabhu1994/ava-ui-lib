import { newSpecPage } from '@stencil/core/testing';
import { AvaButton } from './ava-button';

describe('ava-button', () => {
  it('renders with label', async () => {
    const page = await newSpecPage({
      components: [AvaButton],
      html: `<ava-button label="Click me"></ava-button>`,
    });

    expect(page.root).toEqualHtml(`
      <ava-button label="Click me" class="hydrated">
        <mock:shadow-root>
          <button class="ava-btn" type="button">
            <span>Click me</span>
          </button>
        </mock:shadow-root>
      </ava-button>
    `);
  });

  it('renders with icon slot', async () => {
    const page = await newSpecPage({
      components: [AvaButton],
      html: `
        <ava-button label="With Icon">
          <span slot="icon" class="ava-btn-icon">ICON</span>
        </ava-button>
      `,
    });

    const icon = page.root.querySelector('[slot="icon"]');
    expect(icon).toBeTruthy();
    expect(icon.textContent).toBe('ICON');
  });
});
