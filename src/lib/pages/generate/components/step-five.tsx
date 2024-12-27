import { FadeInUp } from '@/components/animation/fade-in-up';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { useImageStore } from '@/lib/store/image-store';
import { useScenarioStore } from '@/lib/store/scenario-store';
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

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/djhsmwvsb/image/upload';
const UPLOAD_PRESET = 'unsignedpreset'; // 설정한 Unsigned Upload Preset 이름

export const Step5 = () => {
  const { scenario5 } = useScenarioStore();
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=5-5');

  return (
    <Fragment>
      <Stack>
        <FadeInUp>
          <FileUploadButton />
        </FadeInUp>
      </Stack>
      <AbsoluteField>
        <Button
          bgColor="#DD6B20"
          width="full"
          fontWeight="semibold"
          disabled={scenario5.length === 0}
          onClick={handleMoveToGenerate}
        >
          다음
        </Button>
      </AbsoluteField>
    </Fragment>
  );
};

const FileUploadButton = () => {
  const { topImages, setTopImages } = useImageStore();
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState<Array<File>>([]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files).filter(
        (file) =>
          !files.some((existingFile) => existingFile.name === file.name),
      );

      setFiles((prevFiles) => [...prevFiles, ...newFiles]);

      for (const file of newFiles) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', UPLOAD_PRESET);

        try {
          setIsUploading(true);
          const response = await fetch(CLOUDINARY_URL, {
            method: 'POST',
            body: formData,
          });

          if (!response.ok) {
            throw new Error(`Cloudinary 업로드 실패: ${response.statusText}`);
          }

          const data = await response.json();

          const newImages: Array<string> = [...topImages, data.secure_url];
          setTopImages(newImages);
        } catch (error) {
          // biome-ignore lint/suspicious/noConsole: <explanation>
          console.error(
            `Cloudinary 업로드 중 오류 발생 (${file.name}):`,
            error,
          );
          alert(`파일 업로드 실패: ${file.name}`);
        } finally {
          setIsUploading(false);
        }
      }
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
    <FileUploadRoot>
      <FileUploadTrigger asChild>
        <Button variant="outline" size="sm" as="label" disabled={isUploading}>
          <HiUpload /> {isUploading ? 'Uploading...' : 'Upload files'}
          <input
            type="file"
            multiple
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />
        </Button>
      </FileUploadTrigger>
      <Box marginTop={4} paddingBottom={20}>
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
                width="full"
                height="170px"
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
