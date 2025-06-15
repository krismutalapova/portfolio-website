import { render, screen } from '@testing-library/react';
import ExperienceCard from './ExperienceCard';

describe('ExperienceCard', () => {
    it('renders experience title, company, and description', () => {
        const exp = {
            title: 'Developer',
            company: 'TestCorp',
            location: 'Remote',
            period: '2020-2021',
            description: ['Did something great.', 'Learned a lot.'],
        };
        render(<ExperienceCard exp={exp} />);
        expect(screen.getByText('Developer')).toBeInTheDocument();
        expect(screen.getByText(/@ TestCorp/)).toBeInTheDocument();
        expect(screen.getByText('2020-2021 | Remote')).toBeInTheDocument();
        expect(screen.getByText('Did something great.')).toBeInTheDocument();
        expect(screen.getByText('Learned a lot.')).toBeInTheDocument();
    });
});
