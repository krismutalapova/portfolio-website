import { render, screen } from '@testing-library/react';
import EducationCard from './EducationCard';

describe('EducationCard', () => {
    it('renders degree, institution, and period/location', () => {
        const edu = {
            degree: 'BSc Computer Science',
            institution: 'Test University',
            location: 'Online',
            period: '2018-2022',
            description: 'Studied a lot.',
        };
        render(<EducationCard edu={edu} />);
        expect(screen.getByText('BSc Computer Science')).toBeInTheDocument();
        expect(screen.getByText(/@ Test University/)).toBeInTheDocument();
        expect(screen.getByText('2018-2022 | Online')).toBeInTheDocument();
        expect(screen.getByText('Studied a lot.')).toBeInTheDocument();
    });
});
