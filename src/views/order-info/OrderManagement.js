import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const OrderManagement = () => {
  // 현재 선택된 탭 상태 관리
  const [activeTab, setActiveTab] = useState('주문접수');

  // 탭 변경 핸들러
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // 탭에 따라 표시될 컨텐츠를 결정하는 함수
  const renderContent = () => {
    switch (activeTab) {
      case '주문접수':
        return <div>주문접수 내용입니다.</div>;
      case '준비중':
        return <div>준비중 내용입니다.</div>;
      case '배송중':
        return <div>배송중 내용입니다.</div>;
      case '배송완료':
        return <div>배송완료 내용입니다.</div>;
      case '주문취소':
        return <div>주문취소 내용입니다.</div>;
      default:
        return <div>내용을 선택해주세요.</div>;
    }
  };

  return (
    <PageContainer title="Order Management" description="주문 내역 페이지">
      <DashboardCard title="Order Management">
        <Typography>주문 내역 페이지 입니다</Typography>
        <Box>
          {['주문접수', '준비중', '배송중', '배송완료', '주문취소'].map((tab) => (
            <Button key={tab} onClick={() => handleTabChange(tab)}>
              {tab}
            </Button>
          ))}
        </Box>
        {renderContent()}
      </DashboardCard>
    </PageContainer>
  );
};

export default OrderManagement;