import path from 'node:path';
import fs from 'node:fs/promises';

async function getRoadmapIds() {
  return fs.readdir(path.join(process.cwd(), 'src/data/roadmaps'));
}

async function getBestPracticesIds() {
  return fs.readdir(path.join(process.cwd(), 'src/data/best-practices'));
}

export function shouldIndexPage(pageUrl) {
  return ![
    'https://roadmap.thaiprogrammer.org/404',
    'https://roadmap.thaiprogrammer.org/terms',
    'https://roadmap.thaiprogrammer.org/privacy',
    'https://roadmap.thaiprogrammer.org/pdfs',
    'https://roadmap.thaiprogrammer.org/g',
  ].includes(pageUrl);
}

export async function serializeSitemap(item) {
  const highPriorityPages = [
    'https://roadmap.thaiprogrammer.org',
    'https://roadmap.thaiprogrammer.org/about',
    'https://roadmap.thaiprogrammer.org/roadmaps',
    'https://roadmap.thaiprogrammer.org/best-practices',
    'https://roadmap.thaiprogrammer.org/guides',
    'https://roadmap.thaiprogrammer.org/videos',
    ...(await getRoadmapIds()).flatMap((id) => [
      `https://roadmap.thaiprogrammer.org/${id}`,
      `https://roadmap.thaiprogrammer.org/${id}/topics`,
    ]),
    ...(await getBestPracticesIds()).map(
      (id) => `https://roadmap.thaiprogrammer.org/best-practices/${id}`
    ),
  ];

  // Roadmaps and other high priority pages
  for (let pageUrl of highPriorityPages) {
    if (item.url === pageUrl) {
      return {
        ...item,
        // @ts-ignore
        changefreq: 'monthly',
        priority: 1,
      };
    }
  }

  // Guide and video pages
  if (
    item.url.startsWith('https://roadmap.thaiprogrammer.org/guides') ||
    item.url.startsWith('https://roadmap.thaiprogrammer.org/videos')
  ) {
    return {
      ...item,
      // @ts-ignore
      changefreq: 'monthly',
      priority: 0.9,
    };
  }

  return undefined;
}
