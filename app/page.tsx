
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Globe, Languages, Palette } from 'lucide-react';
import {getTranslations} from 'next-intl/server';
export default async function HomePage() {
 const t = await getTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">MultiLang</span>
            </div>
            
            <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                {t('navigation.home')}
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                {t('navigation.about')}
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                {t('navigation.services')}
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                {t('navigation.contact')}
              </a>
            </div>

            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {t('hero.getStarted')}
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              {t('hero.learnMore')}
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            {t('features.title')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Languages className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('features.feature1.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.feature1.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('features.feature2.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.feature2.description')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Palette className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('features.feature3.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('features.feature3.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Language Status */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 border border-blue-200 rounded-full">
            <Globe className="h-5 w-5 text-blue-600 mr-2 rtl:mr-0 rtl:ml-2" />
            <span className="text-blue-800 font-medium">
              {t('language.current')}
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}


