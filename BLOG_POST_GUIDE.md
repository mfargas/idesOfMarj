# Blog Post Guide

## Publishing Control

### Boolean Publishing System
Posts **must** have `published: true` in the frontmatter to appear on the site. This gives you full control over when posts are visible.

### Date-Based Scheduling
If a post has `published: true` AND a date, it will only appear when that date arrives (today or in the past).

**Examples:**

**Published post available immediately:**
```markdown
---
title: "My Post"
date: "2024-01-15"
published: true  # Will appear immediately (date is in the past)
---
```

**Scheduled post (future date):**
```markdown
---
title: "My Post"
date: "2025-02-01"
published: true  # Will appear on February 1, 2025
---
```

**Draft post (hidden):**
```markdown
---
title: "My Post"
date: "2025-02-01"
published: false  # Won't appear even when date arrives
---
```

**No date (publish immediately when published: true):**
```markdown
---
title: "My Post"
published: true  # Will appear immediately
---
```

## Adding Images

### Local Images
Place images in `src/images/` or `public/images/` and reference them:

```markdown
![Alt text](/images/my-image.jpg)
```

Or with a relative path:
```markdown
![Alt text](../../images/my-image.jpg)
```

### External Images
You can use any external image URL:

```markdown
![Alt text](https://example.com/image.jpg)
```

## Linking to Instagram Posts

### Simple Link
Just paste the Instagram URL in your markdown:

```markdown
Check out this [Instagram post](https://www.instagram.com/p/ABC123/) I made!
```

The link will automatically be styled with an Instagram icon (📷) and Instagram brand color.

### Embed Instagram Post
For a visual embed, you can use HTML in your markdown (if needed):

```html
<div class="instagram-embed">
  <a href="https://www.instagram.com/p/ABC123/" target="_blank">
    View this post on Instagram
  </a>
</div>
```

## Frontmatter Options

```markdown
---
title: "Your Post Title"          # Required
date: "2025-02-01"                # Optional - controls when post appears (must be today or past)
excerpt: "Brief description"      # Optional - shown on listing page
category: "MARJIELA — Media Studies"  # Optional - shown as badge
readTime: "6 min read"            # Optional - shown on listing
published: true                   # Required - must be true for post to appear
---
```

## Example Post with Images and Instagram

```markdown
---
title: "Why apps are replacing traditional animation"
date: "2025-02-01"
excerpt: "The shift from linear animation to interactive experiences."
category: "MARJIELA — Media Studies"
readTime: "6 min read"
published: true
---

# Why apps are replacing traditional animation

Here's an image from my process:

![Animation process](/images/animation-process.jpg)

And here's a related [Instagram post](https://www.instagram.com/p/ABC123/) I made about this topic.

## The Economics of Animation

More content here...
```

