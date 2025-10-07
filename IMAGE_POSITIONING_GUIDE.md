# Image Positioning Guide

## ✅ Fixed!

I've adjusted the image positioning for Shaikh Faisal Maqbool's photo to display properly.

### Current Setup:
- **CEO (Faisal):** `object-center` - Shows full seated pose
- **Director (Ali Imran):** `object-top` - Shows upper body/speaking

## 🎯 If You Need Further Adjustments

### Option 1: Center Both Photos
Edit line 112 in `/components/Leadership.tsx`:

```tsx
// Current:
className={`object-cover ${index === 0 ? 'object-center' : 'object-top'}`}

// Change to center both:
className="object-cover object-center"
```

### Option 2: Custom Positioning for CEO
```tsx
// Fine-tune vertical position:
className="object-cover object-[center_30%]"  // 30% from top
className="object-cover object-[center_40%]"  // 40% from top
className="object-cover object-[center_50%]"  // Exactly center
```

### Option 3: Top Positioning for CEO
```tsx
// If you want CEO from top like Director:
className="object-cover object-top"
```

### Option 4: Different Positioning Options
```tsx
object-top          // Show from top
object-center       // Show from center (current for CEO)
object-bottom       // Show from bottom
object-left         // Align to left
object-right        // Align to right
object-[center_20%] // Custom: 20% from top
object-[center_60%] // Custom: 60% from top
```

## 📸 Photo Characteristics

### CEO Photo (sh-faisal.jpg):
- Seated in chair
- Office setting with green flag
- Full body/upper body shot
- **Best with:** `object-center` (current)

### Director Photo (ali-imran.jpg):
- Standing at podium
- Speaking/presenting
- Upper body headshot
- **Best with:** `object-top` (current)

## 🔧 Quick Test Different Positions

If the current setup doesn't look perfect, try these:

### For CEO (Faisal):
```tsx
// Try these options (one at a time):
object-[center_35%]  // Slightly higher
object-[center_45%]  // Slightly lower
object-[center_25%]  // Much higher (shows more of top)
object-[center_55%]  // Much lower (shows more of chair)
```

### For Director (Ali Imran):
Usually `object-top` is perfect for podium shots, but if needed:
```tsx
object-[center_15%]  // Slightly lower than top
object-[center_10%]  // Just below top
```

## 📐 How to Make Changes

### Step 1: Open the file
```
components/Leadership.tsx
```

### Step 2: Find line 112
```tsx
className={`object-cover ${index === 0 ? 'object-center' : 'object-top'}`}
```

### Step 3: Change the positioning
```tsx
// Example: Change CEO to 35% from top
className={`object-cover ${index === 0 ? 'object-[center_35%]' : 'object-top'}`}
```

### Step 4: Save and see results
```bash
# Server auto-reloads
# Just refresh your browser!
```

## 🎨 Current Settings Explained

```tsx
${index === 0 ? 'object-center' : 'object-top'}
```

This means:
- `index === 0` → First leader (CEO/Faisal) → **object-center**
- `index === 1` → Second leader (Director/Ali) → **object-top**

## 💡 Pro Tips

### Tip 1: Preview Before Changing
Look at your actual photos and note:
- Where is the face?
- Is the person centered?
- What's the important part to show?

### Tip 2: Test on Different Screens
- Desktop view might look different from mobile
- Check both before finalizing

### Tip 3: Consider the Background
- Faisal's photo has the flag - might want to show it
- Ali's photo has the podium - top view is good

### Tip 4: Balance Both Photos
- Make sure both leaders look equally good
- Neither should be cut off awkwardly

## 🚀 Recommended Settings

Based on the photo types:

### Best Overall (Current):
```tsx
CEO: object-center       // Shows seated pose well
Director: object-top     // Shows speaker at podium
```

### Alternative 1 (Both Centered):
```tsx
CEO: object-center
Director: object-center
```

### Alternative 2 (Both Top):
```tsx
CEO: object-top
Director: object-top
```

### Alternative 3 (Custom Fine-Tune):
```tsx
CEO: object-[center_35%]      // Slightly higher
Director: object-[center_15%]  // Slightly lower than top
```

## 📱 Mobile Considerations

The photos are:
- **550px tall** on mobile
- **650px tall** on desktop

So desktop shows more of the photo. Test on both!

## ✅ Current Status

**CEO Photo (Faisal):**
- ✅ Using `object-center`
- ✅ Shows full seated pose
- ✅ Flag visible
- ✅ Professional appearance

**Director Photo (Ali Imran):**
- ✅ Using `object-top`
- ✅ Shows upper body/face
- ✅ Podium setting visible
- ✅ Speaking pose captured

---

**The photos should now display properly!** If you need any adjustments, follow the guide above. 📸✨

