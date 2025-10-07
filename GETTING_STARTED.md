# Getting Started with Al Musawir Developers Website

## 🚀 Quick Start

Follow these simple steps to get your website up and running:

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Intersection Observer

### 2. Run Development Server

Start the development server:

```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

Your browser will automatically open, and you'll see your beautiful new website! 🎉

### 3. Make It Your Own

#### Update Contact Information

Edit `/components/Header.tsx` and `/components/Footer.tsx` to update:
- Phone numbers
- Email addresses
- Social media links

#### Replace Images

The website currently uses placeholder images from Unsplash. Replace them with your own:

1. Add your images to the `/public` folder
2. Update image URLs in:
   - `components/Hero.tsx`
   - `components/About.tsx`
   - `components/Leadership.tsx`
   - `components/ProjectHighlights.tsx`
   - `components/ConstructionUpdates.tsx`

Example:
```tsx
// Change from:
backgroundImage: 'url("https://images.unsplash.com/...")'

// To:
backgroundImage: 'url("/images/your-image.jpg")'
```

#### Customize Colors

Edit `/tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Your brand colors
  },
  gold: {
    // Your accent colors
  },
}
```

### 4. Build for Production

When you're ready to deploy:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

### 5. Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Your website will be live in minutes! 🚀

## 📱 Testing

### Check Responsiveness

Test on different screen sizes:
- Mobile: 375px - 640px
- Tablet: 768px - 1024px
- Desktop: 1280px and above

### Browser Testing

Test in:
- Chrome
- Firefox
- Safari
- Edge

## 🎨 Customization Tips

### Adding New Sections

1. Create a new component in `/components`
2. Import it in `/app/page.tsx`
3. Add navigation link in `Header.tsx`

### Changing Fonts

Edit `/app/layout.tsx` to import different Google Fonts:

```typescript
import { Inter, Playfair_Display } from 'next/font/google'
```

### Adding Animation Effects

Use the `useInView` hook for scroll animations:

```typescript
const { ref, inView } = useInView({
  threshold: 0.2,
  triggerOnce: true,
})
```

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is busy, use a different port:

```bash
npm run dev -- -p 3001
```

### Build Errors

Clear the cache and rebuild:

```bash
rm -rf .next
npm run build
```

### Styling Issues

Make sure Tailwind is processing correctly:

```bash
npm run dev
```

Check the terminal for any CSS errors.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Framer Motion](https://www.framer.com/motion)

## 🆘 Need Help?

- Check the README.md for detailed documentation
- Review component files for implementation examples
- Contact: info@almusawirdevelopers.com

---

**Enjoy your new blazing-fast website!** 🎉

