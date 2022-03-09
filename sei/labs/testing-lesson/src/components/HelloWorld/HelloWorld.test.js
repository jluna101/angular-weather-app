import { render, screen } from '@testing-library/react'
import HelloWorld from './HelloWorld';

test('Should display name of in HelloWorld component', () => {
    // render the component
    render(<HelloWorld name={'Jesse'} />);
    expect(screen.getByText('Jesse')).toBeVisible()
    expect(screen.getByText('Jesse').tagName).toBe('H1');
});