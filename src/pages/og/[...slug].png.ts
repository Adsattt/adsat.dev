import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';
import { ogImageMarkup } from '../../utils/og-template';
import fs from 'fs/promises';
import path from 'path';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

export async function GET({ props }: any) {
  const { post } = props;
  
  // Load font
  const fontPath = path.join(process.cwd(), 'public', 'fonts', 'Inter-SemiBold.ttf');
  const fontData = await fs.readFile(fontPath);

  const formattedDate = post.data.date?.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  // Get markup
  const markup = ogImageMarkup(post.data.title, formattedDate);

  // Generate SVG via satori
  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: fontData,
        weight: 600,
        style: 'normal',
      },
    ],
  });

  // Convert to PNG via sharp
  const pngBuffer = await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9, quality: 100 })
    .toBuffer();

  return new Response(pngBuffer as any, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
