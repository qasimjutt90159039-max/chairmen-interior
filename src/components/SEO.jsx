import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    const baseTitle = "Chairman Interiors | PVC Panels, Wallpapers & Modern Interior Design Lahore";
    document.title = title ? `${title} | Chairman Interiors Lahore` : baseTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
