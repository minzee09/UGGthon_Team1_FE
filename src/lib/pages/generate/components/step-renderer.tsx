import { useSearchParams } from 'react-router';
import Page404 from '../../404';
import { Step1 } from './step-first';
import { Step5 } from './step-five';
import { Step55 } from './step-five-five';
import { Step4 } from './step-fourth';
import { Step2 } from './step-second';
import { Step7 } from './step-seven';
import { Step6 } from './step-six';
import { Step3 } from './step-third';

export const StepRenderer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const step = searchParams.get('step');

  switch (step) {
    case '1':
      return <Step1 />;
    case '2':
      return <Step2 />;
    case '3':
      return <Step3 />;
    case '4':
      return <Step4 />;
    case '5':
      return <Step5 />;
    case '5-5':
      return <Step55 />;
    case '6':
      return <Step6 />;
    case '7':
      return <Step7 />;
    default:
      return <Page404 />;
  }
};
