/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
import PageLayout from './components/Layout/PageLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { lazy } from 'react';

const LectureLayout = lazy(async () => await import('./components/Layout/LectureLayout'));
const LearningLectureDetailPage = lazy(async () => await import('./pages/LearningLectureDetailPage'));
const NoticeListPage = lazy(async () => await import('./pages/NoticeListPage'));
const NoticeDetailPage = lazy(async () => await import('./pages/NoticeDetailPage'));
const LectureInfoPage = lazy(async () => await import('./pages/LectureInfoPage'));
const QuestionListPage = lazy(async () => await import('./pages/QuestionListPage'));
const QuestionDetailPage = lazy(async () => await import('./pages/QuestionDetailPage'));
const CreateQuestionPage = lazy(async () => await import('./pages/CreateQuestionPage'));
const NoticeWritePage = lazy(async () => await import('./pages/NoticeWritePage/NoticeWritePage'));

const router = createBrowserRouter([
  {
    path: '',
    element: <PageLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'lecture/:lectureId/info',
        element: <LectureInfoPage />,
      },
      {
        path: 'lecture/:lectureId',
        element: <LectureLayout />,
        children: [
          {
            index: true,
            element: <LearningLectureDetailPage />,
          },
          {
            path: 'notice',
            children: [
              {
                index: true,
                element: <NoticeListPage />,
              },
              {
                path: ':noticeId',
                element: <NoticeDetailPage />,
              },
              {
                path: 'write',
                element: <NoticeWritePage />,
              },
            ],
          },
          {
            path: 'qna',
            children: [
              {
                index: true,
                element: <QuestionListPage />,
              },
              {
                path: ':questionId',
                element: <QuestionDetailPage />,
              },
              {
                path: 'write',
                element: <CreateQuestionPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
