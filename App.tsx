
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import TechnologyPage from './components/TechnologyPage';
import NewsAndMediaPage, { Article } from './components/NewsAndMediaPage';
import ArticleDetailPage from './components/ArticleDetailPage';
import DataCenterPage from './components/DataCenterPage';
import AviationPage from './components/AviationPage';
import CareersPage from './components/CareersPage';
import EducationPage from './components/EducationPage';
import CommercialPage from './components/CommercialPage';
import AccreditationsPage from './components/AccreditationsPage';
import SearchPage from './components/SearchPage';
import FacilitiesManagementPage from './components/FacilitiesManagementPage';
import FacilitiesManagementServicePage from './components/FacilitiesManagementServicePage';
import VisionAndMissionPage from './components/VisionAndMissionPage';
import ChatBot from './components/ChatBot';
import DiversityPage from './components/DiversityPage';
import OurColleaguesPage from './components/OurColleaguesPage';
import ProfileDetailPage, { Profile } from './components/ProfileDetailPage';
import LeadershipTeamPage, { LeadershipProfile } from './components/LeadershipTeamPage';
import LeadershipProfileDetailPage from './components/LeadershipProfileDetailPage';
import HardServicesPage from './components/HardServicesPage';
import TrueValuesPage from './components/TrueValuesPage';
import OurServicesPage from './components/OurServicesPage';
import CleaningPage from './components/CleaningPage';
import SecurityPage from './components/SecurityPage';
import PestControlPage from './components/PestControlPage';
import PayrollPage from './components/PayrollPage';
import TermsAndConditionsPage from './components/TermsAndConditionsPage';
import PrivacyNoticePage from './components/PrivacyNoticePage';
import AwardsPage from './components/AwardsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [selectedLeadershipProfile, setSelectedLeadershipProfile] = useState<LeadershipProfile | null>(null);

  const navigate = (page: string, data: any = null) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    if (page === 'article-detail') {
      setSelectedArticle(data);
    }
    if (page === 'profile-detail') {
      setSelectedProfile(data);
    }
    if (page === 'leadership-profile-detail') {
      setSelectedLeadershipProfile(data);
    }
    // Clear selected article when navigating back to the main news page
    if (page === 'news' && data === null) {
      setSelectedArticle(null);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'technology':
        return <TechnologyPage />;
      case 'data-center':
        return <DataCenterPage />;
      case 'aviation':
        return <AviationPage />;
      case 'education':
        return <EducationPage />;
      case 'commercial':
        return <CommercialPage />;
      case 'cleaning':
        return <CleaningPage navigate={navigate} />;
      case 'security':
        return <SecurityPage navigate={navigate} />;
      case 'pest-control':
        return <PestControlPage navigate={navigate} />;
      case 'payroll':
        return <PayrollPage navigate={navigate} />;
      case 'careers':
        return <CareersPage navigate={navigate} />;
      case 'news':
        return <NewsAndMediaPage navigate={navigate} />;
      case 'article-detail':
        // Fallback to news list if no article is selected
        return selectedArticle ? <ArticleDetailPage article={selectedArticle} navigate={navigate} /> : <NewsAndMediaPage navigate={navigate} />;
      case 'accreditations':
        return <AccreditationsPage />;
      case 'awards':
        return <AwardsPage />;
      case 'search':
        return <SearchPage navigate={navigate} />;
      case 'facilities-management':
        return <FacilitiesManagementPage navigate={navigate} />;
      case 'facilities-management-service':
        return <FacilitiesManagementServicePage navigate={navigate} />;
      case 'hard-services':
        return <HardServicesPage navigate={navigate} />;
      case 'vision-mission':
        return <VisionAndMissionPage />;
      case 'diversity':
        return <DiversityPage />;
      case 'our-colleagues':
        return <OurColleaguesPage navigate={navigate} />;
      case 'our-services':
        return <OurServicesPage navigate={navigate} />;
      case 'leadership-team':
        return <LeadershipTeamPage navigate={navigate} />;
      case 'profile-detail':
        return selectedProfile ? <ProfileDetailPage profile={selectedProfile} navigate={navigate} /> : <OurColleaguesPage navigate={navigate} />;
      case 'leadership-profile-detail':
        return selectedLeadershipProfile ? <LeadershipProfileDetailPage profile={selectedLeadershipProfile} navigate={navigate} /> : <LeadershipTeamPage navigate={navigate} />;
      case 'true-values':
        return <TrueValuesPage navigate={navigate} />;
      case 'terms-and-conditions':
        return <TermsAndConditionsPage />;
      case 'privacy-notice':
        return <PrivacyNoticePage />;
      case 'home':
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  const pagesWithWhiteBg = ['search', 'technology', 'news', 'article-detail', 'data-center', 'aviation', 'careers', 'education', 'commercial', 'accreditations', 'facilities-management', 'facilities-management-service', 'vision-mission', 'diversity', 'our-colleagues', 'profile-detail', 'leadership-team', 'leadership-profile-detail', 'hard-services', 'true-values', 'our-services', 'cleaning', 'security', 'pest-control', 'payroll', 'terms-and-conditions', 'privacy-notice', 'awards'];

  return (
    <div className={`${pagesWithWhiteBg.includes(currentPage) ? 'bg-white' : 'bg-gray-50'} min-h-screen font-sans text-gray-800 overflow-x-hidden`}>
      <Header navigate={navigate} />
      <main>
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
      <ChatBot />
    </div>
  );
};

export default App;
