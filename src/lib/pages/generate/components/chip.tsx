// Step1ChipGroup.tsx
import { useScenarioStore } from '@/lib/store/scenario-store';
import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import type React from 'react';
import { useState } from 'react';

interface ChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

interface ChipData {
  id: number;
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label, isSelected, onClick }) => {
  return (
    <Button
      onClick={onClick}
      width="full"
      size="lg"
      variant="outline"
      borderRadius="full"
      px="5"
      borderWidth="2px"
      borderColor="orange.500"
      color={isSelected ? 'white' : 'orange.500'}
      bg={isSelected ? 'orange.500' : 'white'}
      _hover={{
        bg: isSelected ? 'orange.600' : 'orange.50',
      }}
      transition="all 0.2s"
    >
      {label}
    </Button>
  );
};

export const Step1ChipGroup: React.FC = () => {
  const [selectedChip, setSelectedChip] = useState<number | null>(null);

  const chips: Array<ChipData> = [
    { id: 1, label: '결혼식' },
    { id: 2, label: '크리스마스' },
    { id: 3, label: '생일' },
    { id: 4, label: '면접' },
  ];

  const { setScenario1 } = useScenarioStore();

  const handleChipClick = (chipId: number): void => {
    setSelectedChip((prevId) => (prevId === chipId ? null : chipId));
    setScenario1(chips.find((chip) => chip.id === chipId)?.label || '');
  };

  return (
    <Box p={4}>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={4}
        maxW="container.sm"
        mx="auto"
      >
        {chips.map((chip) => (
          <GridItem key={chip.id}>
            <Chip
              label={chip.label}
              isSelected={selectedChip === chip.id}
              onClick={() => handleChipClick(chip.id)}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export const Step2ChipGroup: React.FC = () => {
  const [selectedChips, setSelectedChips] = useState<Array<number>>([]);

  const chips: Array<ChipData> = [
    { id: 1, label: '캐주얼' },
    { id: 2, label: '스트릿' },
    { id: 3, label: '페미닌' },
    { id: 4, label: '럭셔리' },
    { id: 5, label: '스포티' },
    { id: 6, label: '모던' },
  ];

  const { setScenario2 } = useScenarioStore();

  const handleChipClick = (chipId: number): void => {
    setSelectedChips((prevIds) => {
      // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
      let newSelectedIds;
      if (prevIds.includes(chipId)) {
        // 이미 선택된 경우 제거
        newSelectedIds = prevIds.filter((id) => id !== chipId);
      } else {
        // 새로 선택하는 경우 추가
        newSelectedIds = [...prevIds, chipId];
      }

      // 선택된 모든 라벨을 찾아서 스토어에 저장
      const selectedLabels = newSelectedIds
        .map((id) => chips.find((chip) => chip.id === id)?.label)
        .filter((label): label is string => label !== undefined);

      setScenario2(selectedLabels);
      return newSelectedIds;
    });
  };

  return (
    <Box p={4}>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={4}
        maxW="container.sm"
        mx="auto"
      >
        {chips.map((chip) => (
          <GridItem key={chip.id}>
            <Chip
              label={chip.label}
              isSelected={selectedChips.includes(chip.id)}
              onClick={() => handleChipClick(chip.id)}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
