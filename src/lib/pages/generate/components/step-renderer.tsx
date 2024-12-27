import { useSearchParams } from 'react-router';
import Page404 from '../../404';
import { Step1 } from './step-first';
import { Step2 } from './step-second';

export const StepRenderer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step');

  switch (step) {
    case '1':
      return <Step1 />;
    case '2':
      return <Step2 />;
    default:
      return <Page404 />;
  }
};
