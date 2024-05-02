import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Location from 'pages/Location/Location';
import RandomList from 'pages/RandomList/RandomList';
import Result from 'pages/Result/Result';
import Poll from 'pages/Poll/Poll';
import OverallRanking from 'pages/OverallRanking/OverallRanking';
import Error from 'pages/Error/Error';
import Notice from 'components/modal/Notice/Notice';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Location />} />
        <Route path="/random-menu" element={<RandomList />} />
        <Route path="/random-menu/:id" element={<Poll />} />
        <Route path="/random-menu/:id/result" element={<Result />} />
        <Route path="/random-menu/:id/result/overall-ranking" element={<OverallRanking />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Notice />
    </>
  );
};

export default AppRoutes;
