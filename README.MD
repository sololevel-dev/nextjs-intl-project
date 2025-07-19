# Multi-Language Next.js Platform

A modern, responsive Next.js application with comprehensive internationalization support for English, Farsi (Persian), and Arabic languages. Built with TypeScript, Tailwind CSS, and next-intl for seamless multi-language experiences.

## ✨ Features

- **🌍 Multi-Language Support**: Full internationalization with English, Farsi, and Arabic
- **📱 RTL Support**: Complete right-to-left text direction support for Arabic and Farsi
- **🎨 Responsive Design**: Mobile-first design that works beautifully on all devices
- **🔄 Dynamic Language Switching**: Seamless language switching with URL-based routing
- **⚡ Performance Optimized**: Built with Next.js 13+ for optimal performance
- **🎯 Type-Safe**: Full TypeScript support with type-safe translations
- **🎨 Modern UI**: Clean, professional design with Tailwind CSS and shadcn/ui components
- **🌐 SEO Friendly**: Proper meta tags and URL structure for each language

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multilang-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Language Support

The application supports three languages with their respective URL structures:

- **English**: `/en` or `/` (default)
- **Farsi (Persian)**: `/fa` 
- **Arabic**: `/ar`

### Language Features

- **Automatic Direction**: RTL layout for Arabic and Farsi, LTR for English
- **Cultural Adaptation**: Content and design adapted for different cultural contexts
- **Font Support**: Optimized typography for different scripts
- **Navigation**: Language-aware navigation and routing

## 📁 Project Structure

```
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── layout.tsx      # Locale-specific layout
│   │   └── page.tsx        # Home page component
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── LanguageSwitcher.tsx # Language switching component
├── messages/               # Translation files
│   ├── en.json            # English translations
│   ├── fa.json            # Farsi translations
│   └── ar.json            # Arabic translations
├── lib/
│   └── utils.ts           # Utility functions
├── i18n.ts                # Internationalization configuration
├── middleware.ts          # Next.js middleware for routing
└── next.config.js         # Next.js configuration
```

## 🔧 Configuration

### Adding New Languages

1. **Add locale to configuration**
   ```typescript
   // i18n.ts
   const locales = ['en', 'fa', 'ar', 'your-locale'];
   ```

2. **Update middleware**
   ```typescript
   // middleware.ts
   export default createMiddleware({
     locales: ['en', 'fa', 'ar', 'your-locale'],
     defaultLocale: 'en'
   });
   ```

3. **Create translation file**
   ```bash
   # Create messages/your-locale.json
   touch messages/your-locale.json
   ```

4. **Add to language switcher**
   ```typescript
   // components/LanguageSwitcher.tsx
   const languages = [
     // ... existing languages
     { code: 'your-locale', name: 'Your Language', flag: '🏳️' }
   ];
   ```

### Customizing Translations

Edit the JSON files in the `messages/` directory:

```json
{
  "navigation": {
    "home": "Home",
    "about": "About"
  },
  "hero": {
    "title": "Welcome to our platform"
  }
}
```

## 🎨 Styling

The project uses:

- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality, accessible UI components
- **CSS Variables**: For consistent theming
- **RTL Support**: Automatic layout flipping for RTL languages

### RTL Considerations

- Use `rtl:` prefix for RTL-specific styles
- Utilize `space-x-reverse` for proper spacing
- Test layouts in both LTR and RTL modes

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Static Export

The project is configured for static export:

```bash
npm run build
# Files will be generated in the 'out' directory
```

### Deployment Platforms

Compatible with:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create page in `app/[locale]/your-page/page.tsx`
2. Add translations to message files
3. Update navigation if needed

### Translation Usage

```typescript
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('namespace');
  
  return <h1>{t('title')}</h1>;
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review existing issues and discussions

---

**Built with ❤️ using Next.js and modern web technologies**