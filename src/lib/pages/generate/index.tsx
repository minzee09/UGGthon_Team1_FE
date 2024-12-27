import { View } from '@/components/ui/view';
import { StepRenderer } from './components/step-renderer';

export default function GeneratePage() {
  return (
    <View padding={4}>
      <StepRenderer />
    </View>
  );
}
