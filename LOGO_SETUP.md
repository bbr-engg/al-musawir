# How to Add Your Logo

## Quick Setup

Your logo has been integrated into the website! Now you just need to add the actual logo file.

### Step 1: Add Your Logo File

1. **Save your logo** as `al-musawir-logo.png` 
2. **Place it in the `/public` folder** of your project

```
al-musawir/
├── public/
│   └── al-musawir-logo.png  ← Put your logo here
```

### From Your Computer:

Simply copy your logo file to:
```
/Users/babarsultan/Documents/personal/al-musawir/public/al-musawir-logo.png
```

### Alternative: Using Terminal

```bash
# Navigate to your project
cd /Users/babarsultan/Documents/personal/al-musawir

# Copy your logo from wherever it is
cp /path/to/your/logo.png public/al-musawir-logo.png
```

## Logo Specifications

### Recommended Format:
- **Format**: PNG (with transparent background)
- **Size**: 256x256px or larger
- **Quality**: High resolution for retina displays

### Alternative Formats:
If you want to use a different format, rename accordingly:
- `al-musawir-logo.svg` (best for scalability)
- `al-musawir-logo.jpg`
- `al-musawir-logo.webp`

Then update the file extension in the components:
- `/components/Header.tsx` (line 72)
- `/components/Footer.tsx` (line 21)

## Where Your Logo Appears

Your logo is now displayed in:

1. **Header** (Top navigation)
   - Desktop: Full logo with company name
   - Mobile: Logo only
   - Hover effect: Slight scale animation

2. **Footer** (Bottom of page)
   - White version (inverted colors for dark background)
   - Smaller size with company name

## Logo Styling

### Header Logo:
- Size: 64x64px
- Hover: Scales to 105%
- Priority loading (appears immediately)

### Footer Logo:
- Size: 64x64px
- Colors: Inverted to white for dark background
- Style: `brightness-0 invert`

## Customizing Logo Size

### To make the logo bigger in Header:

Edit `/components/Header.tsx`:
```tsx
// Change from:
width={64}
height={64}

// To:
width={80}  // or any size you prefer
height={80}
```

Also update the container:
```tsx
// Change from:
<div className="w-16 h-16 ...">

// To:
<div className="w-20 h-20 ...">  // w-20 = 80px
```

### Size Reference:
- `w-12 h-12` = 48px
- `w-14 h-14` = 56px
- `w-16 h-16` = 64px (current)
- `w-20 h-20` = 80px
- `w-24 h-24` = 96px

## Optimizations Already Implemented

✅ **Next.js Image Component**
- Automatic optimization
- Lazy loading (except header - priority load)
- WebP/AVIF conversion
- Responsive images

✅ **Performance**
- Header logo: Priority loading (no delay)
- Footer logo: Lazy loaded
- Proper alt text for accessibility

## Troubleshooting

### Logo Not Showing?

1. **Check file location:**
   ```bash
   ls public/al-musawir-logo.png
   ```

2. **Check file name** (case-sensitive):
   - Correct: `al-musawir-logo.png`
   - Wrong: `Al-Musawir-Logo.PNG`

3. **Restart dev server:**
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

4. **Clear browser cache:**
   - Chrome/Firefox: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Logo Too Big/Small?

Adjust the size in both components as shown above.

### Logo Quality Issues?

Use a higher resolution image:
- Minimum: 256x256px
- Recommended: 512x512px
- Best: SVG format (scalable)

### Footer Logo Doesn't Show Well?

If the inverted colors don't look good, remove the filter:

Edit `/components/Footer.tsx`:
```tsx
// Remove: brightness-0 invert
className="object-contain"
```

Or use a white version of your logo instead.

## Using SVG Logo (Recommended)

For the best quality and performance:

1. Save your logo as `al-musawir-logo.svg`
2. Update both components to use `.svg` instead of `.png`

SVG benefits:
- Perfect quality at any size
- Smaller file size
- Scalable without quality loss
- Better for responsive design

## Next Steps

After adding your logo:

1. ✅ Add logo file to `/public` folder
2. ✅ Restart development server
3. ✅ Check both header and footer
4. ✅ Test on mobile devices
5. ✅ Adjust size if needed

---

**Your logo is now integrated and ready to shine!** 🎨

