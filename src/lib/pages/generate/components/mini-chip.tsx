import { useScenarioStore } from '@/lib/store/scenario-store';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';
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

const AllVibes: Record<string, Array<ChipData>> = {
  결혼식: [
    { id: 1, label: '화려한' },
    { id: 2, label: '고급스러운' },
    { id: 3, label: '깔끔한' },
    { id: 4, label: '우아한' },
    { id: 5, label: '단정한' },
    { id: 6, label: '세련된' },
  ],
  크리스마스: [
    { id: 1, label: '레드&그린' },
    { id: 2, label: '화이트&실버' },
    { id: 3, label: '파티' },
    { id: 4, label: '별' },
    { id: 5, label: '산타' },
    { id: 6, label: '털장식' },
    { id: 7, label: '포근함' },
    { id: 8, label: '로맨틱' },
    { id: 9, label: '가족' },
    { id: 10, label: '눈' },
    { id: 11, label: '따뜻한' },
    { id: 12, label: '축제' },
    { id: 13, label: '어그부츠' },
  ],
  생일: [
    { id: 1, label: '캐주얼' },
    { id: 2, label: '편안한' },
    { id: 3, label: '귀여운' },
    { id: 4, label: '특별한' },
    { id: 5, label: '화려한' },
    { id: 6, label: '파티' },
  ],
  면접: [
    { id: 1, label: '단정한' },
    { id: 2, label: '깔끔한' },
    { id: 3, label: '전문적인' },
    { id: 4, label: '신뢰감있는' },
    { id: 5, label: '격식있는' },
    { id: 6, label: '세련된' },
  ],
};

const MiniChip: React.FC<ChipProps> = ({ label, isSelected, onClick }) => {
  return (
    <Button
      onClick={onClick}
      size="sm"
      variant="outline"
      borderRadius="full"
      px="4"
      py="1"
      borderWidth="1px"
      borderColor="orange.500"
      color={isSelected ? 'white' : 'orange.500'}
      bg={isSelected ? 'orange.500' : 'white'}
      _hover={{
        bg: isSelected ? 'orange.600' : 'orange.50',
      }}
      height="auto"
      fontSize="sm"
      fontWeight="normal"
    >
      {label}
    </Button>
  );
};

export const Step3ChipGroup: React.FC = () => {
  const [selectedChips, setSelectedChips] = useState<Array<number>>([]);
  const { scenario1, setScenario3 } = useScenarioStore();

  const vibes = scenario1 ? AllVibes[scenario1] : [];

  const handleChipClick = (chipId: number): void => {
    setSelectedChips((prevIds) => {
      const newSelectedIds = prevIds.includes(chipId)
        ? prevIds.filter((id) => id !== chipId)
        : [...prevIds, chipId];

      const selectedLabels = newSelectedIds
        .map((id) => vibes.find((chip) => chip.id === id)?.label)
        .filter((label): label is string => label !== undefined);

      setScenario3(selectedLabels);
      return newSelectedIds;
    });
  };

  return (
    <Box p={4}>
      <VStack gap={6} align="stretch">
        <Flex flexWrap="wrap" gap={2} justifyContent="start">
          {vibes.map((chip) => (
            <MiniChip
              key={chip.id}
              label={chip.label}
              isSelected={selectedChips.includes(chip.id)}
              onClick={() => handleChipClick(chip.id)}
            />
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};
