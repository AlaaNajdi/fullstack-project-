import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemText, Divider, styled } from '@mui/material';
import { FiUser, FiSettings } from 'react-icons/fi'; // استيراد الأيقونات

// تعريف الألوان
const colors = {
  lightBeige: '#ffffff',
  darkBeige: '#F9F7F3',
  vibrantPink: '#842B6B', // لون فوشي
  softWhite: '#000000',
  lightGray: '#f1f1f1',
};

// تنسيق الشريط الجانبي
const Sidebar = styled('aside')({
  backgroundColor: colors.darkBeige,
  color: colors.softWhite,
  padding: '20px',
  height: '100vh',
  width: '250px',
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  transition: 'all 0.3s ease',
});

// تنسيق الرابط
const StyledLink = styled(Link)({
  color: colors.softWhite,
  textDecoration: 'none',
  fontSize: '1rem',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    color: colors.lightBeige,
    backgroundColor: colors.vibrantPink,
    padding: '10px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  },
  '& svg': {
    marginRight: '10px',
  },
});

// تنسيق المحتوى الرئيسي
const MainContent = styled('main')({
  backgroundColor: colors.lightBeige,
  flex: 1,
  marginLeft: '250px', // تأكيد أن المحتوى لن يغطي الشريط الجانبي
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 80px)', // تأكيد أن المحتوى سيملأ الصفحة بالكامل باستثناء الفوتر
});

const UserDashboard = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* الشريط الجانبي */}
      <Sidebar>
        <Typography variant="h5" gutterBottom>
          User Dashboard
        </Typography>
        <Divider />
        <nav>
          <List>
            <ListItem button='true' component={StyledLink} to="profile">
              <FiUser />
              <ListItemText primary="Personal Profile" />
            </ListItem>
            <Divider />
          </List>
        </nav>
      </Sidebar>

      {/* المحتوى الرئيسي */}
      <MainContent>
        <Outlet />
      </MainContent>
    </Box>
  );
};

export default UserDashboard;
