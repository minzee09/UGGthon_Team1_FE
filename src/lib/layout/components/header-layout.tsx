import { Header } from '@/components/ui/header';
import { Box, IconButton } from '@chakra-ui/react';
import { ChevronLeft } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router';

// biome-ignore lint/style/noDefaultExport: <explanation>
export default function HeaderLayout() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Box minHeight="100vh">
      <IconButton
        aria-label="뒤로가기"
        onClick={handleBack}
        colorScheme="gray"
        variant="ghost"
      >
        <ChevronLeft style={{ width: '30px', height: '30px' }} />
      </IconButton>
      <Header />
      <Outlet />
    </Box>
  );
}
