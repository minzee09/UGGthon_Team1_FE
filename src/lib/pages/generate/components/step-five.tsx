import { FadeInUp } from '@/components/animation/fade-in-up';
import { AbsoluteField } from '@/components/ui/absolute-field';
import {
  Box,
  Button,
  FileUploadRoot,
  FileUploadTrigger,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { HiUpload } from 'react-icons/hi';
import { HiOutlineTrash } from 'react-icons/hi2';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

export const Step5 = () => {
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=6');

  return (
    <Fragment>
      <Stack>
        <FadeInUp>
          <FileUploadButton />
        </FadeInUp>
      </Stack>
      <AbsoluteField>
        <Button
          bgColor="orange.500"
          width="full"
          fontWeight="semibold"
          onClick={handleMoveToGenerate}
        >
          다음
        </Button>
      </AbsoluteField>
    </Fragment>
  );
};

const FileUploadButton = () => {
  const [files, setFiles] = useState<Array<File>>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files).filter(
        (file) =>
          !files.some((existingFile) => existingFile.name === file.name),
      );
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };
  return (
    <FileUploadRoot marginTop={10}>
      <FileUploadTrigger asChild>
        <Button variant="outline" size="sm" as="label">
          <HiUpload /> Upload files
          <input
            type="file"
            multiple
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />
        </Button>
      </FileUploadTrigger>
      <Box marginTop={4}>
        <SimpleGrid columns={2} gap={4}>
          {files.map((file, index) => (
            <Box
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              position="relative"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              overflow="hidden"
            >
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                objectFit="cover"
                width="100%"
                height="150px"
              />
              <IconButton
                aria-label="Remove file"
                size="sm"
                colorScheme="red"
                position="absolute"
                top={2}
                right={2}
                onClick={() => handleRemoveFile(index)}
              >
                <HiOutlineTrash />
              </IconButton>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </FileUploadRoot>
  );
};
